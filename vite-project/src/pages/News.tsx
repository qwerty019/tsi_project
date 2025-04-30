import React, { PureComponent, ReactNode } from 'react'
import {Button} from '../components/Button'
import {Container} from '../components/Container'
import {Input} from '../components/Input'
import {Text} from '../components/Text'


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
            <Container>
            <div className="flex gap-4">
                <Button color="primary" size="large" title="Подтвердить"/>
                <Button color="secondary" size="large" title="Удалить"/>
            </div> 
            <div className="flex gap-6 mb-6 md:grid-cols-2">
                <Input color='primary' size='large' title=''/>
                <Input color='secondary' size='large' title=''/>
                <Input color='third' size='large' title=''/>
                <Input color='fourth' size='large' title=''/>
            </div> 
            <div className="flex gap-4">
                <Text color="primary"c size="large" title="Второй сезон аниме “Поднятие уровня в одиночку”(Solo Leveling) пользуется высокой 
популярностью среди любителей аниме, но мало кто мог подумать, что данный тайтл 
побьет рекорд сервиса Crunchyroll."/></div> 
            
            </Container>
        )
    }
}

export default News
