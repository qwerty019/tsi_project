import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const footerStyle = {
            position: 'fixed',
            backgroundColor: 'rgba(89, 89, 89, 1)',
            height: '10%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px',
            bottom: 0,
            color: 'white'
        };
        const linkStyle = {
            marginLeft: '20px', // Отступ между ссылками
            marginRight: 'auto' // Сдвигаем ссылки влево
            
        };

        return (
            
            <div style={footerStyle}>
            В случае нарушения авторских прав или других уведомлений - обращайтесь на почту liza.stepanova@mail.ru
            </div>
        )
    }
}

export default Footer