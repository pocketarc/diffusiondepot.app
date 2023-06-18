import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-6xl font-title md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-6 md:mb-12">
      {children}
    </h1>
  )
}

export default PostTitle
