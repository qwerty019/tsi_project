import React, { PureComponent } from 'react'

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    // render() {
    //     const headerStyle = {
    //         position: 'fixed',
    //         height: '10%',
    //         width: '100%',
    //         display: 'flex',
    //         alignItems: 'center', // Центрирование по вертикали
    //         //justifyContent: 'center',
    //         padding: '0 20px' // Отступы по бокам
    //     };
    //     const linkStyle = {
    //         marginLeft: '70px', // Отступ между ссылками
    //         marginRight: 'auto', // Сдвигаем ссылки влево
    //         color: 'red',
    //         fontSize: '20px'
    //     };
    //     const linkLogoStyle = {
    //         marginLeft: '70px', // Отступ между ссылками
    //         marginRight: 'auto', // Сдвигаем ссылки влево
    //         color: 'red',
    //         fontSize: '30px'
    //     };

    //     return (
            
    //         <div style={headerStyle}>
    //         <div style={{ flexGrow: 1 }} />
    //         <a href='/' style={linkLogoStyle}>AnimeLogo</a>
    //         <div style={{ flexGrow: 3 }} />
    //         <a href='/news' style={linkStyle}>Новости</a>
    //         <a href='/anime' style={linkStyle}>Аниме</a>
    //         <a href='/list' style={linkStyle}>Списки</a>
    //         <div style={{ flexGrow: 1 }} />
    //         </div>
    //     )
    // }

    render() {
        return (
            <div className="fixed h-[10%] w-full flex items-center px-5">
                <div className="flex-grow" />
                <a href="/" className="ml-[70px] text-red-500 text-3xl">AnimeLogo</a>
                <div className="flex-grow-[3]" />
                <a href="/news" className="ml-[70px] text-red-500 text-xl">Новости</a>
                <a href="/anime" className="ml-[70px] text-red-500 text-xl">Аниме</a>
                <a href="/list" className="ml-[70px] text-red-500 text-xl">Списки</a>
                <div className="flex-grow" />
            </div>
        )
    }
}

export default Header