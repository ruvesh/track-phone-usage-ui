import React, {useState, useEffect} from 'react'
import axios from 'axios'


const User = ({baseUrl, username}) => {

    const [user, setUser] = useState({})
    const reqUrl = `${baseUrl}/users/${username}`

    useEffect(()=>{
        axios.get(reqUrl)
        .then(res => {
            const fetchedUser = res.data

            setUser(fetchedUser)
        })       
    }, {})

    return (
        <div>
            User { user.username }
        </div>
    )
}

export default User