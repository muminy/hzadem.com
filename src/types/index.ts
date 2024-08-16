export type ListType = {
  PerPage?: number
  Page?: number
}

export type WordpressTagType = {
  name: string
  slug: string
  count: number
}

export type WordpressCommentType = {
  status: boolean
  commentId: number
  content: string
  date: string
  author: { node: { name: string; email: string } }
}

export type CreateCommentType = {
  author: string
  authorEmail: string
  content: string
  commentOn: number
}

export type WordpresPostType = {
  id: number
  date: string
  modified: string
  slug: string
  status: string
  content: string
  excerpt: string
  title: string
  image: string
  postId: number
  featuredImage: {
    node: {
      title: string
      sourceUrl: string
    }
  }
  categories: {
    nodes: WordpressCategoryType[]
  }
  tags: {
    nodes: WordpressTagType[]
  }
  comments: {
    nodes: WordpressCommentType[]
  }
  commentCount: number
  author: {
    node: {
      name: string
      description: string
    }
  }
}

export type WordpressCategoryType = {
  id: number
  name: string
  slug: string
  description: string
  count: number
  showmenu: boolean
  categoryId: number
  image: {
    node: {
      sourceUrl: string
      title: string
    }
  }
}

export type WordpresPostNodes = {
  posts: {
    pageInfo: {
      hasNextPage: boolean
      endCursor: string
    }
    nodes: WordpresPostType[]
  }
}
export type WordpresSinglePost = {
  post: WordpresPostType
}

export type WordpressCategoryNodes = {
  categories: {
    nodes: WordpressCategoryType[]
  }
}

export type WordpressTagNode = {
  tag: WordpressTagType
}
export type WordpressCategoryNode = {
  category: WordpressCategoryType
}
