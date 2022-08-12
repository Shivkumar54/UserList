import React, { useState } from 'react'
import {GrMail, GrPhone, GrGlobe, GrLocation} from "react-icons/gr"
import "./user.css"
const Users = () => {
    const [datas, setDatas] = useState([""]);
    
    const getAPI = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data)=>setDatas(data))
    }
const list = datas.map(({id,name, username, email, phone, website}) => {
    return (
        <div className='col-12 col-md-6 col-lg-3 my-1'>
            <div className='data ' key={id}>
        <div className="floter"> {username}</div>
        <div className="titleFlexer d-flex justify-center">
            <img src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="image" width="55px" />
            <h3>{name}</h3>
        </div>
        <div className="content">
            <table>
                <tr>
                    <td><GrMail size={20}/></td>
                    <td>{email} </td>
                </tr>
                <tr>
                    <td><GrPhone size={20}/></td>
                    <td>{phone}</td>
                </tr>
                <tr>
                    <td><GrGlobe size={20}/></td>
                    <td>{website}</td>
                </tr>
               

            </table>
        </div>
    </div> 
        </div>
        )
    })



  return (
      <div className="rootFolder " onLoad={getAPI}>
          <div className="usersList container-xxl col-12 mx-auto row">
              <div className="userData col-12 mx-auto ">
                  <div className="row my-0">
                  {list}
                  </div>
             </div>
          </div>
    </div>
  )
}

export default Users



