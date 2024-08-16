import { MUTATION_CREATE_COMMENT } from ":/graphql/comment"
import client from ":/lib/apollo"
import { CreateCommentType } from ":/types"

export async function createComment({
  commentOn,
  content,
  authorEmail,
  author,
}: CreateCommentType) {
  return await client.mutate({
    mutation: MUTATION_CREATE_COMMENT,
    variables: { commentOn, content, authorEmail, author },
  })
}
