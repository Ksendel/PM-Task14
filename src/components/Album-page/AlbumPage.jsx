import React, {useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import selector from "../../selector";
import useLoadPhotos from "../../hooks/useLoadPhotos";
import API from "../../services/API";
import Async from "react-async";
import LoadMoreButton from "../LoadMore/LoadMoreButton";
import Spinner from "react-bootstrap/Spinner";

const AlbumPage = () => {

    const {albumId} = useParams()

    const {isLoading, photos, loadMore} = useLoadPhotos(albumId)

    const Loading = () => (
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    )

    const Photos = () => <div>
        {photos.map(photo => <img src={photo.thumbnailUrl} alt={photo.title}/>)}
        <div>
            <LoadMoreButton onLoadMore={loadMore}/>
        </div>
    </div>

    return (
        <Async promiseFn={API.getAlbum} id={albumId}>
            <Async.Pending>Loading...</Async.Pending>
            <Async.Rejected>{error => <p> Error: {error.message} </p>}</Async.Rejected>
            <Async.Fulfilled>{album =>
                <div>
                    <p>{album.title}</p>
                    <p>{album.user.name} - {album.user.email}</p>
                    {isLoading ? <Loading/> : <Photos/>}
                </div>
            }</Async.Fulfilled>
        </Async>

    )
}
export default AlbumPage
