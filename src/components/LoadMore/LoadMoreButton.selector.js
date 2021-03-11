import {createSelector} from 'reselect'

const offsetSelector = createSelector(
    (state) => state.photos.offset,
    (offset) => offset
)
export default offsetSelector
