import { useState } from "react"
import './counter.css'



const FCounter = () => {

const [value, setValue] = useState(0)
const [error, setError] = useState(false)

const onValueChange = (value) => {
       setValue(value)
       setError(false)
    }

const onPlus = () => onValueChange(value + 1)
const onMinus = () => onValueChange(value - 1)


const isCount= (e) => {

    const value = Number(e.target.value.trim())

    if(isNaN(value)){
        return setError(true)
    }

    setValue(value)
    setError(false)
}



return (
    <div className="counter">Counter
        <div className="action-div">
            <button className="minus-btn" onClick={onMinus}>-</button>
            <input type="text" value={value} onChange={isCount}/>
            <button className="plus-btn" onClick={onPlus}>+</button>
        </div>
        <div>{ error ? "only write number" : null}</div>
    </div>
)


}

export default FCounter