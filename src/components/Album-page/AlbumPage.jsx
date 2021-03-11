import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import selector from "../Preview-page/Preview.selector";
import useLoadPhotos from "../../hooks/useLoadPhotos";
import API from "../../services/API";
import Async from "react-async";
import LoadMoreButton from "../LoadMore/LoadMoreButton";

const AlbumPage = () => {

    const {albumId} = useParams()
    const {photos, offset} = useSelector(selector)

    // const dispatch = useDispatch()
    // useEffect(() => {
    //     console.log("Clear")
    //     dispatch(clearState())
    // }, [albumId])

    useLoadPhotos({offset, albumId})

    return (
        <Async promiseFn={API.getAlbum} id={albumId}>
            <Async.Pending>Loading...</Async.Pending>
            <Async.Rejected>{error => <p> Error: {error.message} </p>}</Async.Rejected>
            <Async.Fulfilled>{album =>
                <div>
                    <p>{album.title}</p>
                    <p>{album.user.name} - {album.user.email}</p>
                    <div>
                        {photos.map(photo => <img src={photo.thumbnailUrl} alt=""/>)}
                    </div>
                    <LoadMoreButton/>
                </div>
            }</Async.Fulfilled>
        </Async>

    )
}
export default AlbumPage
