import {changeOffset, getPhotos, getPhotosByAlbum} from "../ducks/getPhotos"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import selector from "../selector";

const useLoadPhotos = (albumId) => {
    const limit = 6
    const dispatch = useDispatch()

    const {photos, offset, isLoading} = useSelector(selector)

    useEffect(() => {
        if (albumId) dispatch(getPhotosByAlbum(albumId, offset, limit))
        else dispatch(getPhotos(offset, limit))
    }, [offset])

    const loadMore = () => dispatch(changeOffset(offset + limit))

    return {isLoading, photos, loadMore}
}

export default useLoadPhotos
