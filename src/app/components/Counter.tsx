'use client'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { setUser } from "../store/tobeRenamed/tobeRenamedSlice"

const Counter = () => {
    const countValue = useSelector((state:RootState) => state.tobeRenamed.user)
    const dispatch = useDispatch();
    return <div>
        <p>Count: {countValue}</p>
        <button onClick={() => dispatch(setUser("Mile"))}>set User</button>
    </div>
}

export default Counter;