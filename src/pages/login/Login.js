import React from 'react';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import './Login.css'

function Login(){
    return(
        <Card title="Login Card" >
            <Input placeholder="username"/>
            <Input placeholder="password"/>
        </Card>
    )
}

export { Login }; 