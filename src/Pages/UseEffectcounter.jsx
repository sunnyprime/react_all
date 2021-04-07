import React from 'react'

export default function UseEffectcounter() {
    const[count,setCount] = React.useState(0)

    React.useEffect(() => {
        console.log("Inside Use effect");
    },[count])

    return (
        <div>
            <h1>This is Use Effect counter</h1>
            <h2>{count}</h2>
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
