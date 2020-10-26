import React, { Component } from 'react';

import Back from '../../components/Back/index'
import Form from '../../components/Form/index'
class SignIn extends Component{
    render(){
        return(
            <div className="container-signin">
                <Back></Back>
                <Form></Form>
            </div>
        );
    }
}

export default SignIn;