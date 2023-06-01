export interface BlogModel {
  title: string
  publishDate: string
  author: string
  contents: ContentTypeModel[]
  images: {
    url: string
  }[]
  tags: string[]
  category: string[]
}

export interface ContentTypeModel {
  content: string
  contentType: 'text' | 'heading' | 'image' | 'strong'
}
