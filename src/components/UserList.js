import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UserList = () => {

    const [users, SetUsers] = useState([])

    useEffect(() => {

        axios.get('https://phone-usage-monitor.herokuapp.com/users')
        .then(res => {
            const newUser = res.data.userList
            .map(usr => usr.username)

            SetUsers(newUser)
        })

    }, [])

    return (
        <div>
            <ul>
                {
                    users.map(user => (
                        <li key={user.username}>{user.username}</li>
                    ))
                }
            </ul>
        </div>
    )

}

export default UserList