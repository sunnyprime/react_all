import React, { Component } from 'react'

export default class Terniary extends Component {
    constructor(props) {
        super(props);
        this.state = {
          valid:false
        };
      }
    render() {
        const a=0
        const count=false
        return (
            <div>
                <h1>Terniary</h1>
                {this.state.valid ? 'currently' : 'not'}
                {/* {a.length == 0&&<>"Greater than 0"</>:<>"Not greater"} */}
                a
                { count && <h1>Messages: {count}</h1>}
            </div>
        )
    }
}

