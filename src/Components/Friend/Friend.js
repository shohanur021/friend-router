import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name,email,id} = props.friend;
    const friendStyle = {
        border:'1px solid purple',
        margin:'20px',
        padding:'20px',
        borderRadius:'10px'
    }
    const history = useHistory();
    const handleClick = (friendId) => {
        history.push(`about/${friendId}`);
    }

    return (
        <div style={friendStyle}>
            <h3>Name : {name}</h3>
            <p>Email : {email}</p>
            <p>id : <Link to={`about/${id}`}>show detail of {id}</Link></p>
            <button onClick={() => handleClick(id)}>Click me</button>
        </div>
    );
};

export default Friend;