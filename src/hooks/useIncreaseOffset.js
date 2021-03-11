import {useDispatch, useSelector} from "react-redux";
import offsetSelector from "../components/LoadMore/LoadMoreButton.selector";
import {changeOffset} from "../ducks/getPhotos";

const useIncreaseOffset = () => {
    const defaultPageSize = 6
    const offset = useSelector(offsetSelector)
    const dispatch = useDispatch()
    return () => dispatch(changeOffset(offset + defaultPageSize))
}

export default useIncreaseOffset
