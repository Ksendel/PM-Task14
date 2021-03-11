import React from "react";
import {Link, useParams} from "react-router-dom";
import Async from "react-async"
import API from "../../services/API";
import useClearOnChangeLocation from "../../hooks/useClearOnChangeLocation";

const PhotoPage = () => {
    useClearOnChangeLocation()

    const {photoId} = useParams()

    return (
        <Async promiseFn={API.getSinglePhoto} id={photoId}>
            <Async.Pending>Loading...</Async.Pending>
            <Async.Rejected>{error => <p> Error: {error.message} </p>}</Async.Rejected>
            <Async.Fulfilled>{photo =>
                <div>
                    <img src={photo.url} alt=""/>
                    <p>{photo.title}</p>
                    <Link to={`/album/${photo.albumId}`}>
                        <p>{photo.album.title}</p>
                    </Link>
                </div>
            }</Async.Fulfilled>
        </Async>
    )
}
export default PhotoPage
