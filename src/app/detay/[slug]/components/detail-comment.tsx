"use client"

import Button from ":/components/Form/Button"
import Input from ":/components/Form/Input"
import Textarea from ":/components/Form/Textarea"
import Mapper from ":/components/Mapper/Mapper"
import { PostProps } from ":/components/PostCards"
import { emailPattern } from ":/constants/patterns"
import { createComment } from ":/services/comment"
import { CreateCommentType } from ":/types"
import { has } from "lodash"
import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export default function DetailComment({
  comments,
  postId,
}: Pick<PostProps, "comments" | "postId">) {
  const [isPending, startTransition] = useTransition()
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CreateCommentType>()

  const onCreateComment = (formData: CreateCommentType) =>
    startTransition(() => {
      createComment({ ...formData, commentOn: postId })
        .then(() => {
          toast.success("Yorum Gönderildi")
          reset()
        })
        .catch(() => toast.error("Yorum Gönderilemedi"))
    })

  return (
    <div className="py-10 mb-20">
      <h4 className="font-black text-3xl mb-10">Yorumlar</h4>
      <form
        onSubmit={handleSubmit(onCreateComment)}
        className="grid grid-cols-12 gap-5 mb-5">
        <Input
          {...register("author")}
          label="Ad Soyad"
          className="col-span-6"
          hasError={has(errors, "author")}
        />
        <Input
          {...register("authorEmail", {
            required: true,
            pattern: emailPattern,
          })}
          label="E-mail"
          hasError={has(errors, "authorEmail")}
          className="col-span-6"
        />
        <Textarea
          {...register("content")}
          label="Yorum"
          hasError={has(errors, "content")}
          className="col-span-12"
        />
        <div className="col-span-12">
          <Button
            bgColor="PRIMARY"
            text="Gönder"
            isLoading={isPending}
          />
        </div>
      </form>

      <Mapper
        className="mt-10"
        data={comments.nodes}
        render={(item) => (
          <div className="bg-secondary p-6 rounded-xl">
            <div className="font-semibold text-xs">
              {item.author.node.name}
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
        )}
      />
    </div>
  )
}
