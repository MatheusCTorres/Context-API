import React, {useContext} from 'react'
import {LoginContext} from '../contexts/LoginContext'

export default function LoginPage() {

    const {setUsername, setShowProfile} = useContext(LoginContext)
    
    return (
        <div>
            <h1>Login Page</h1>
            <input type="text" placeholder="Username" onChange={(event)=>setUsername(event.target.value)}/>
            <input type="password" placeholder="Password"/>
            <button onClick={()=>setShowProfile(true)}>login</button>
        </div>
    )
}