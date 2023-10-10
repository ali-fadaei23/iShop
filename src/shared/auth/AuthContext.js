import React, { createContext, useState, useContext } from "react";
import { useParams } from "react-router-dom";

const authContext = createContext()


export const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
    return useContext(authContext)
}


const useProvideAuth = () => {
    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false)
    let { userId } = useParams()

    const signIn = async (username, password) => {
        setLoading(true)
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: "POST", headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify({ username, password })
        })
        setLoading(false)
        const responseData = await response.json().then((err) => {
            if (!response.ok) {
                setErrors(err.errors)
            }
        })

        setUser(responseData)

    }


    const signUp = async (signUpData) => {
        setErrors([])
        setLoading(true)
        const response = await fetch('https://fakestoreapi.com/users', {
            method: "POST", headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(signUpData)
        })

        setLoading(false)

        const responseData = await response.json().then((err) => {
            if (!response.ok) {
                setErrors(err.errors)
            }
        })

        setUser(responseData)

    }

    const signOut = async () => {
        const response = await fetch(`https://fakestoreapi.com/users/${userId}`, {
            method: "DELETE",
        })
        if (response.ok) {
            setUser(null)
        }
    }
    return {
        user, signIn, signOut, signUp, errors, loading
    }


}


