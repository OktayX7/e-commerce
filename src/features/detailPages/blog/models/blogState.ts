import {BlogModel} from './blogModel'

export interface BlogState {
  blogs: BlogModel[]
  blog: BlogModel
}
