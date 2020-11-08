import React, { Component } from 'react'
class TxtFieldContainer extends Component {
    state = {
        values: this.props.children.map(child => {
            // return {[child.type.name]:0}
            if (child.type.name == 'TxtField') {
                return { [child.props.name]: 0 }
            }
        }),
        vlu: {},
    }
    componentDidMount() {
        let { children } = this.state;
        console.log(children);

    }
    // state = {
    //     name: '',
    //     value: '',
    //     values: this.props.children.map(obj => {
    //       return { [obj.name]: '' };
    //     }),
    //   }

    render() {
        let { children } = this.props;
        return (
            <div className='txt-field-container'>
                {children}
                {/* {console.log(children[3].props.name)} */}
                {console.log(this.state.vlu)}
            </div>
        );
    }
}

export default TxtFieldContainer;