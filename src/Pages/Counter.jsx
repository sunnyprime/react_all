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
                <h1>This is a counter page</h1>
                <p>{this.state.count}</p>
                <br />
                <br />
                <button class="f6 link dim br1 ph3 pv2 mb2 dib white bg-purple"
                 onClick={this.increasecount}>Increase</button>
                <button class="f6 link dim br1 ph3 pv2 mb2 mh5 dib white bg-light-purple"
                onClick={this.decresecount}>Decrease</button>
                <button class="f6 link dim br1 ph3 pv2 mb2 dib white bg-dark-pink"
                onClick={this.reset}>Reset</button>

            </div>
        )
    }
}
