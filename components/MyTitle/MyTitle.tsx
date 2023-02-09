import { MyTitleType } from "."

export default function MyTitle({ title }: MyTitleType) {
  return <div className="font-bold text-lg mb-5">{title}</div>
}
