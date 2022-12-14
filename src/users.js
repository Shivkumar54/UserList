import React, { useEffect, useState } from 'react'
// import {GrMail, GrPhone, GrGlobe, GrLocation } from "react-icons/gr"
import "./user.css"
import axios from "axios"

const Dashboard = () => {

    const [user, setUser] = useState([])
    const [post, setPost] = useState([])

    const fetchData = () => {
        const userAPI = 'https://jsonplaceholder.typicode.com/users';
        const postAPI = 'https://jsonplaceholder.typicode.com/posts';
        
        const getUserAPI = axios.get(userAPI)
        const getPostAPI = axios.get(postAPI)
        axios.all([getUserAPI, getPostAPI]).then(
            axios.spread((...allData) => {
                const getNewUserAPI = allData[0].data
                const getNewPostAPI = allData[1].data

                setUser(getNewUserAPI)
                console.log(getNewUserAPI)
                setPost(getNewPostAPI)
                console.log(getNewPostAPI)
            })
        )
    }
    useEffect(() => {
        fetchData()
    })


    const UserDetails = user.map(({ name, id, username, email }) => {
        return (
            <div key={id}>
                <h1>{name }</h1>
                <h3>{username }</h3>
                <h4>{email }</h4>
            </div>
        )
    })
    const postDetails = post.map(({ title, id, body }) => {
        return (
            <div key={id}>
                <h1>{title }</h1>
                <p>{body }</p>
                
            </div>
        )
    })




    return (
        <>
            <div className='flexxer'>
                <div>

                </div>
                {UserDetails}
                {postDetails}

            </div>
        </>
    )
}

export default Dashboard



