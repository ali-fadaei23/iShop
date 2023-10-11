import React, { createContext, useState, useContext } from "react";
import * as jose from 'jose'
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
    const [userInfo, setUserInfo] = useState({})
    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false)






    const signIn = async (username, password) => {
        setLoading(true)
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: "POST", headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify({ username: username, password: password })
        })
        setLoading(false)
        const responseData = await response.json()
        const userId = jose.decodeJwt(responseData.token)



        if (!response.ok) {
            setErrors(errors)
        }


        setUser(responseData)


        const getUserInfo = async () => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/users/${userId.sub}`)
            setLoading(false)
            const responseData = await response.json()

            setUserInfo(responseData)
            console.log("............USER INFO............", responseData);
        }
        getUserInfo()

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

        const responseData = await response.json()

        if (!response.ok) {
            setErrors(errors)
        }


        setUser(responseData)

    }



    // userId for Sign Out
    const signOut = async () => {
        const response = await fetch(`https://fakestoreapi.com/users/${userInfo.id}`, {
            method: "DELETE",
        })
        if (response.ok) {
            setUser(null)
        }
    }
    return {
        user, userInfo, signIn, signOut, signUp, errors, loading
    }


}


