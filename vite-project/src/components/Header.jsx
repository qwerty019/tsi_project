import React, { PureComponent } from 'react'

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
            
            <a href='/home'>Home</a>
            <a href='/about'>About</a>
            
            </>
        )
    }
}

export default Header