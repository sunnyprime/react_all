import React from 'react'

export default function HookCounter() {
    const[count,setCount] = React.useState(0)


    return (
        <div style={{textAlign:'center'}}>
            <h1>Hook Counter</h1>
            <h2>{count}</h2>
            <br />
            <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
      <button onClick={() => setCount(0)}>
        RESET
      </button>
        </div>
    )
}
