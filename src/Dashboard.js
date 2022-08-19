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
                <h4>{name }</h4>
                <h6>{username }</h6>
                <p>{email }</p>
            </div>
        )
    })
    const postDetails = post.map(({ title, id, body }) => {
        return (
            <div key={id}>
                <h4>{title }</h4>
                <p>{body }</p>
                
            </div>
        )
    })




    return (
        <>
            <div className='flexxer'>
                <div className='users'>
                    <h1>Users</h1>
                {UserDetails}
                </div>
                <div className='posts'>
                    <h1>Posts</h1>
                {postDetails}
                </div>
                

            </div>
        </>
    )
}

export default Dashboard



