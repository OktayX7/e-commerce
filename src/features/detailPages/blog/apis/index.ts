// Util and Lib Imports
import {requests} from 'utils'
import {BlogModel} from '../models'

const blogBaseUrl = '/blogs'

export const GetBlogsApi = () => requests.get<BlogModel[]>(`${blogBaseUrl}`)

export const GetBlogByTitleApi = (title: string) =>
  requests.get<BlogModel>(`${blogBaseUrl}/${title}`)
