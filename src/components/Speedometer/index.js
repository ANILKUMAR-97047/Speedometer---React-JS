// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  increaseSpeed = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  decreaseSpeed = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="speedometer-image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-view">Speed is {speed}mph</h1>
        <p className="speed-instructions">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div className="buttons-container">
          <button
            type="button"
            onClick={this.increaseSpeed}
            className="accelerate-button"
          >
            Accelerate
          </button>
          <button
            type="button"
            onClick={this.decreaseSpeed}
            className="apply-break-button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
