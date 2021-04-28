import React, { Component } from 'react'

export class profession extends Component {
    render() {
        return (
            <div>
                <h1> {this.props.job} </h1>
                <img src={this.props.imag} alt="My Image" width="400px" height="200px"   />
            </div>
        )
    }
}

export default profession
