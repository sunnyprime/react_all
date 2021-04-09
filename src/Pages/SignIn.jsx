import React from 'react'
// import Contextapi from '../ContextAPI/Contextapis'
import AuthContext from '../ContextAPI/Auth'

export default function SignIn() {
    console.log(React.useContext(AuthContext));
    return (
        <div>
            <h1>This is a SignIn Page</h1>
            {/* {Authorization} */}

        </div>
    )
}
