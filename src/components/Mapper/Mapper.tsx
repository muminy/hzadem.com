import clsx from "clsx"
import { Fragment, ReactElement, ReactNode } from "react"

export interface IMapperProps<T> {
  data: T[]
  render(item: T, index: number): ReactNode
  renderEmpty?: ReactElement
  renderHeader?: ReactElement
  as?: keyof JSX.IntrinsicElements
  className?: string
}

export default function Mapper<T>({
  data,
  render,
  className,
  renderEmpty,
  renderHeader,
  as: Wrapper = "div",
}: IMapperProps<T>) {
  const Empty = () => renderEmpty ?? null
  const Header = () => renderHeader ?? null

  return (
    <Fragment>
      <Header />
      <Wrapper className={clsx(className)}>
        {data.length === 0 ? (
          <Empty />
        ) : (
          data.map((item, index) => (
            <Fragment key={`${index}_render_fragment`}>
              {render(item, index)}
            </Fragment>
          ))
        )}
      </Wrapper>
    </Fragment>
  )
}
