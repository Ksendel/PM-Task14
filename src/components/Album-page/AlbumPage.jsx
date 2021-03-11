import React, {useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import selector from "../../selector";
import useLoadPhotos from "../../hooks/useLoadPhotos";
import API from "../../services/API";
import Async from "react-async";
import Photos from "../Photos/Photos";

const AlbumPage = () => {

    const {albumId} = useParams()

    const {isLoading, photos, loadMore} = useLoadPhotos(albumId)

    return (
        <Async promiseFn={API.getAlbum} id={albumId}>
            <Async.Pending>Loading...</Async.Pending>
            <Async.Rejected>{error => <p> Error: {error.message} </p>}</Async.Rejected>
            <Async.Fulfilled>{album =>
                <div>
                    <p>{album.title}</p>
                    <p>{album.user.name} - {album.user.email}</p>
                    <Photos isLoading={isLoading} photos={photos} loadMore={loadMore}/>
                </div>
            }</Async.Fulfilled>
        </Async>

    )
}
export default AlbumPage
