import React from 'react';

const UserForm = (props) => {

    return (
        <form onSubmit={props.getUser}>
            <input style={{marginTop:"20px auto", display:"block"}} type="text" name="username"/>
            <button>Submit</button>
        </form>
    );
}

export default UserForm;