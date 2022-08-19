import React, { useEffect, useState } from 'react'
// import {GrMail, GrPhone, GrGlobe, GrLocation } from "react-icons/gr"
import "./user.css"
import axios from "axios"

const Users = () => {

    // const [user, setUser] = useState([])
    // const [post, setPost] = useState([])

    let endpoints = [
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/posts',
        
      ];
      
       axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
        axios.spread((name, username, body, title) => {
            console.log({name, username, body, title});
          })
      );

    

    return (
        <>
            <div >
            </div>
        </>
    )
}

export default Users



