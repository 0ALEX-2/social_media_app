import React from "react"
import { useParams } from "react-router-dom"
import "./profile.css"

const Profile =()=>{
const {userName}=useParams()
    return(
        <div>
            <h1>{userName}</h1>
        </div>
    )
}
export default Profile