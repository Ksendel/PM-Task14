import API from "../services/API";

const REQUESTED = 'redux/home/requested'
const RECEIVED = 'redux/home/received'
const OFFSET_CHANGED = 'redux/home/offset-changed'
const CLEAR = 'redux/home/clear-photos'

const requested = () => ({
    type: REQUESTED
})

const received = (photos) => ({
    type: RECEIVED,
    payload: photos
})

const offsetChanged = (offset) => ({
    type: OFFSET_CHANGED,
    payload: offset
})

const stateCleared = () => ({
    type: CLEAR
})

export const getPhotos = (offset, limit) => (dispatch) => {
    dispatch(requested())

    API.getPhotos(offset, limit)
        .then((photos) => dispatch(received(photos)))
}

export const getPhotosByAlbum = (id, offset, limit) => (dispatch) => {
    dispatch(requested())

    API.getPhotosByAlbum({id, offset, limit})
        .then((photos) => dispatch(received(photos)))
}

export const changeOffset = (offset) => (dispatch) => {
    dispatch(offsetChanged(offset))
}

export const clearState = () => (dispatch) => {
    dispatch(stateCleared())
}

const initialState = {
    isLoading: false,
    photos: [],
    offset: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUESTED:
            return {
                ...state,
                isLoading: true
            }
        case RECEIVED:
            return {
                ...state,
                isLoading: false,
                photos: [...state.photos, ...action.payload]
            }
        case OFFSET_CHANGED:
            return {
                ...state,
                offset: action.payload
            }
        case CLEAR:
            return initialState

        default:
            return state
    }
}

export default reducer
