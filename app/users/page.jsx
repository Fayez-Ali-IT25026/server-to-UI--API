import React from 'react';
import UsersCard from '../../components/UsersCard';

const users =async() => {

const res = await fetch (`http://localhost:5000/users`);
const users = await res.json();

    return (
        <div>
            {/* <h2>yo {users.length}</h2> */}

{/* {
    users.map(user => ()) 
} */}


{
    users.map(user => <UsersCard key = {user._id}  user={user}></UsersCard>) 
}

        </div>
    );
};

export default users;