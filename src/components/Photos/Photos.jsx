import Spinner from "react-bootstrap/Spinner";
import LoadMoreButton from "../LoadMore/LoadMoreButton";
import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";

const Photos = ({isLoading, photos, loadMore, clickable}) => {

    if (isLoading) {
        return <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    } else {
        return <div>
            {photos.map(photo =>
                <Photo id={photo.id} url={photo.thumbnailUrl} title={photo.title} clickable={clickable}/>
            )}
            <div>
                <LoadMoreButton onLoadMore={loadMore}/>
            </div>
        </div>
    }
}
export default Photos

Photos.propTypes = {
    isLoading: PropTypes.bool,
    photos: PropTypes.array,
    loadMore: PropTypes.func,
    clickable: PropTypes.bool
}
