import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class Anime extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
        <div>Hello</div> 
        )
    }
}

export default Anime
