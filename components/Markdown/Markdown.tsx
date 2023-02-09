import MarkdownToJsx from "markdown-to-jsx"
import { MarkdownProps } from "."

export default function Markdown({ content }: MarkdownProps) {
  return <MarkdownToJsx>{content}</MarkdownToJsx>
}
