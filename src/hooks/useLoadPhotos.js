import {getPhotos, getPhotosByAlbum} from "../ducks/getPhotos"
import {useDispatch} from "react-redux";
import {useEffect} from "react";

const useLoadPhotos = ({albumId, offset}) => {
    const limit = 6
    const dispatch = useDispatch()

    useEffect(() => {
        if (albumId) dispatch(getPhotosByAlbum(albumId, offset, limit))
        else dispatch(getPhotos(offset, limit))
    }, [offset])
}

export default useLoadPhotos
