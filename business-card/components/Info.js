import React from "react"

export default function Info() {
    return (
        <div className="info" >
            <img src="./images/profilepic.jpeg" className="dp"/>
            <h1 className="name" >First Name Surname</h1>
            <h3 className="jobtitle" >Job Title</h3>
            <button>
                <img src="./images/Mail.png" className="image" />
                Email
            </button>
        </div>
    )
}