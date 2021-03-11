import {createStructuredSelector} from 'reselect'

const pageableSelector = (state) => state.photos.offset

const photosSelector = state => state.photos.photos

const loadingSelector = state => state.photos.isLoading

const selector = createStructuredSelector({
    offset: pageableSelector,
    photos: photosSelector,
    isLoading: loadingSelector
})

export default selector
