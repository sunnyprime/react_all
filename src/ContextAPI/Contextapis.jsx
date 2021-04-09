import React from 'react'
export const Contexts = React.createContext()

export default function Contextapis({children}) {
    const [Authorization,setAuthorization] =React.useState(true)
    return (
        <div>
            <Contexts.provider value={{Authorization,setAuthorization}}>
                {children}
            </Contexts.provider>
            {/* {children} */}
            
        </div>
    )
}
