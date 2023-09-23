import { Component } from "react"
import './counter.css'

export default class Counter extends Component {
    state = {
        value: 0,
        error: false
    }

    onValueChange = (value) => {
        this.setState({value, error: false})
    }

onPlus = () => this.onValueChange(this.state.value + 1)
onMinus = () => this.onValueChange(this.state.value - 1)


isCount= (e) => {

    const value = Number(e.target.value.trim())

    if(isNaN(value)){
        return this.setState({error: true})
    }

    this.setState({value, error: false})
}


    render() {

        return (
            <div className="counter">Counter
                <div className="action-div">
                    <button className="minus-btn" onClick={this.onMinus}>-</button>
                    <input type="text" value={this.state.value} onChange={this.isCount}/>
                    <button className="plus-btn" onClick={this.onPlus}>+</button>
                </div>
                <div>{ this.state.error ? "only write number" : null
                }</div>
            </div>
        )
    }
}