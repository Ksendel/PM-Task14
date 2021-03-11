import React from 'react'
import {useSelector} from "react-redux";
import selector from "./Preview.selector";
import useLoadPhotos from "../../hooks/useLoadPhotos";
import {Link} from "react-router-dom";
import LoadMoreButton from "../LoadMore/LoadMoreButton";
import Spinner from "react-bootstrap/Spinner";

const Preview = () => {

    const {photos, offset, isLoading} = useSelector(selector)

    useLoadPhotos({offset})

    const Loading = () => (
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    )

    const Photos = () => (
        <div>
            {photos.map(photo => {
                return (
                    <Link to={`photos/${photo.id}`}>
                        <img src={photo.thumbnailUrl} alt={photo.title}/>
                    </Link>
                )
            })}
            <LoadMoreButton/>
        </div>

    )

    return <div className='Home'>
        {isLoading ? <Loading/> : <Photos/>}



    </div>
}

export default Preview
