import React from 'react'
import useIncreaseOffset from "../../hooks/useIncreaseOffset";

const LoadMoreButton = () => {
    const onLoadMore = useIncreaseOffset()
    return <div>
        <button onClick={onLoadMore}>Load more</button>
    </div>
}

export default LoadMoreButton
