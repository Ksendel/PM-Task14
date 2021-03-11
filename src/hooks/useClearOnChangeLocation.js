import {useHistory} from "react-router-dom";
import {clearState} from "../ducks/getPhotos";
import {useDispatch} from "react-redux";
import {useCallback, useEffect, useMemo} from "react";

const useClearOnChangeLocation = () => {
    const dispatch = useDispatch()

    // const history = useHistory()
    // useEffect(() => {
    //     console.log("Location changed effect")
    //     history.listen((location) => {
    //         console.log("Location changed", location.pathname)
    //         dispatch(clearState())
    //     }, [])
    // })
    useEffect(() => dispatch(clearState()))
}

export default useClearOnChangeLocation
