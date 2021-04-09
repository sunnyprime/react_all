import React from 'react'

const AuthContext = React.createContext();

export default function AuthProvider({children}) {
    const [Authorization,setAuthorization] = React.useState(true)
    return (
        <AuthContext.Provider value={{a:"data"}}>
            {children}
        </AuthContext.Provider>
    )
}
