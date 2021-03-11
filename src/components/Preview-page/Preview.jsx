import React from 'react'
import useLoadPhotos from "../../hooks/useLoadPhotos";
import Photos from "../Photos/Photos";

const Preview = () => {

    const {isLoading, photos, loadMore} = useLoadPhotos()

    return <div className='Home'>
        <Photos isLoading={isLoading} photos={photos} loadMore={loadMore} clickable={true}/>
    </div>
}

export default Preview
