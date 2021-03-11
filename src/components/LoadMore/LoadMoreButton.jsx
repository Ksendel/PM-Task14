import React from 'react'
import PropTypes from 'prop-types';

const LoadMoreButton = ({onLoadMore}) => {
    return <button onClick={onLoadMore}>Load more</button>
}

export default LoadMoreButton

LoadMoreButton.propTypes = {
    onLoadMore: PropTypes.func
}
