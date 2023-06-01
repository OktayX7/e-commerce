/* eslint-disable indent */

import {RootState} from 'libs'

export const getLoadingState =
  () =>
  ({loading: {loading}}: RootState) =>
    loading
