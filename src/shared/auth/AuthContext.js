import React, { createContext, useState, useContext } from "react";
import * as jose from 'jose'
// import { useNavigate, useParams } from "react-router-dom";

const authContext = createContext()

export const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
    return useContext(authContext)
}

const useProvideAuth = () => {
    const [userInfo, setUserInfo] = useState(null)
    const [user, setUser] = useState(null)
    const [userId, setUserId] = useState(null)
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false)

    const signIn = async (username, password) => {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: "POST", headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify({ username: username, password: password })
        })
        const responseData = await response.json()
        return responseData
    }

    const getUserInfo = async (userId) => {
        // const id = jose.decodeJwt(user.token)
        const response = await fetch(`https://fakestoreapi.com/users/${userId}`)
        const responseData = await response.json()

        return responseData
    }

    const handleLogin = async (username, password) => {
        try {
            setLoading(true)
            const responseSignIn = await signIn(username, password)
            setUser(responseSignIn)
            const id = jose.decodeJwt(responseSignIn.token)
            setUserId(id.sub)
            const responseUserInfo = await getUserInfo(id.sub)
            setUserInfo(responseUserInfo)
            setLoading(false)
        } catch (error) {
            setErrors(error)
        }
    }

    const signUp = async (signUpData) => {
        setErrors([])
        setLoading(true)
        const response = await fetch('https://fakestoreapi.com/users', {
            method: "POST", headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(signUpData)
        })

        if (!response.ok) {
            setErrors(errors)
        }

        const responseData = await response.json()

        setUser(responseData)
        setLoading(false)
    }

    const signOut = async () => {
        const response = await fetch(`https://fakestoreapi.com/users/${userId}`, {
            method: "DELETE",
        })
        console.log(userId, user);

        if (response.ok) {
            setUser(null)
        }
    }

    return {
        handleLogin, userId, user, userInfo, signOut, signUp, errors, loading
    }


}


