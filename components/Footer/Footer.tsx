import { FooterProps } from "."
import Container from "../Container"

export default function Footer({
  className,
  ...remainingProps
}: FooterProps) {
  return <Container {...remainingProps}></Container>
}
