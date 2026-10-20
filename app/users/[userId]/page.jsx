// import React from 'react';

// const UserDetailPage = ({params}) => {

// const {userId} = params


//     return (
//         <div>
//             <h2>yo user : {userId}</h2>
//         </div>
//     );
// };

// export default UserDetailPage;


import React from 'react';

const UserDetailPage = async({params}) => {

const {userId} = await params
const res = await fetch(`http://localhost:5000/users/${userId}`);
const user = await res.json();


    return (
        <div>
            <h2>yo user : {userId}</h2>
            <p>NAME : {user.name}</p>
            <p>EMAIL : {user.email}</p>
        </div>
    );
};

export default UserDetailPage;