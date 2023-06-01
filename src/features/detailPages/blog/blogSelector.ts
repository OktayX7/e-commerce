/* eslint-disable indent */
import {RootState} from 'libs'

export const getBlogsState =
  () =>
  ({blog: {blogs}}: RootState) =>
    blogs

export const getBlogState =
  () =>
  ({blog: {blog}}: RootState) =>
    blog
