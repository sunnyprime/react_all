import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }

    increasecount=()=> {
        // console.log("Increased"+this.state.count);
        this.setState({count:this.state.count+1})
    }
    decresecount=()=>{
        // console.log("Decreas");
        this.setState({count:this.state.count-1})
    }
    reset=()=>{
        this.setState({count:0})
    }


    render() {
        return (
            <div  style={{textAlign:'center'}}>
                <h2>This is a counter page</h2>
                {this.state.count}
                <br />
                <button onClick={this.increasecount}>Increase</button>
                <button onClick={this.decresecount}>Decrease</button>
                <button onClick={this.reset}>Reset</button>

            </div>
        )
    }
}
