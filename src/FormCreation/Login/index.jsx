import React from 'react';

function Login(props) {
    
    console.log(this);
    

    const load = () => {
        props.history.push('/form');
    }

    return (
        <div>
            <button onClick={load}>LOGIN</button>
        </div>
    )
}

export default Login;
