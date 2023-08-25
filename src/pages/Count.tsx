import {FC} from "react";
import {useSelector, useDispatch} from "react-redux";
import {increase,decrease} from "../store/count.ts";
import {StateType} from "../store";

const Count: FC = () => {
    const count = useSelector<StateType>(state => state.count) as number
    const dispatch = useDispatch()
    return (
        <div>
            <span>Count: {count}</span>
            <button onClick={()=>dispatch(increase())}>Increment</button>
            <button onClick={()=>dispatch(decrease())}>Decrement</button>
        </div>
    )
}
export default Count