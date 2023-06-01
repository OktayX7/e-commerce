import {RootState} from 'libs'

export const getCategoriesState =
  () =>
    ({category: {categories}}: RootState) =>
      categories
