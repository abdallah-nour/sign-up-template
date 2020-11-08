import React, { Component } from 'react'
import TxtField from '../Txt-field'
import PasswordPower from '../PasswordPower'
class CreatePassword extends Component {
    state = {
        passwordValue: '',
        repasswordValue: '',
        passPowerVisibility: false,
        passPowerColor: 'green',
        passPowerWidth: 75,
    }
    checkPassPower = (e) => {
        let { passwordValue } = this.state;
        let { value } = e.target;
        this.setState({ passwordValue: value });
        if (passwordValue.length < 8) {
            this.setState({ passPowerColor: 'red', passPowerWidth: 25 })
        }
    }
    handleRepassword = () => {
        let { repasswordValue } = this.state;

    }
    updateVisibility = () => {
        this.setState({ passPowerVisibility: true });
    }
    render() {
        let { passwordValue, repasswordValue, passPowerVisibility, passPowerColor, passPowerWidth } = this.state;
        return (
            <div className='create-pass'>
                <TxtField onFocus={this.handleRepassword} onChange={this.checkPassPower} value={passwordValue} type='password' name='password' descText='Create password*' placeholder='Password' />
                {/* use onChange => will check passwordValue length, containe numbers, contain capital and small. best to use RegEXP */}
                <PasswordPower visibility={passPowerVisibility} color={passPowerColor} width={passPowerWidth + '%'}></PasswordPower>
                <TxtField value={repasswordValue} type='password' name='repassword' descText='Repeat password*' placeholder='Repeat password' onChange={this.handleRepassword} />
                {/* use onFocus or onBlur */}
            </div>
        );
    }
}

export default CreatePassword;