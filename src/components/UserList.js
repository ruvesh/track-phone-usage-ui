import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UserList = ({baseUrl}) => {

    const [users, setUsers] = useState([])
    const url = `${baseUrl}/users`

    useEffect(() => {
        axios.get(url)
          .then(res => {
            const newUsers = res.data.userList
              .map(obj => obj);
      
            setUsers(newUsers);
          });
      }, []);

    return (
        <div>
            Users
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