import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class News extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <div>Bye</div>
        )
    }
}

export default News
