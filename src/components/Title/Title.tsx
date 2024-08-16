export interface MyTitleProps {
  title: string
}
export default function MyTitle({ title }: MyTitleProps) {
  return (
    <div className="mb-10 pt-10 h-[100px]">
      <h1 className="text-6xl block">
        <span className="font-bold">{title}</span>
      </h1>
    </div>
  )
}
