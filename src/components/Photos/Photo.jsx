import {Link} from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

const Photo = ({id, title, url, clickable = false}) => {
    if(clickable){
        return <Link to={`photos/${id}`}>
            <img src={url} alt={title}/>
        </Link>
    } else {
        return <img src={url} alt={title}/>
    }
}

export default Photo

Photo.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    clickable: PropTypes.bool
}
