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

<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {
    users.map(user => <UsersCard key = {user._id}  user={user}></UsersCard>) 
}
</div>

        </div>
    );
};

export default users;