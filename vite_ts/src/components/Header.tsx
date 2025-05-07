import React, { PureComponent } from 'react';

class Header extends PureComponent {
  render() {
    return (
      <div className="fixed h-[10%] w-full flex items-center px-5 bg-white shadow-md z-10">
        <div className="flex-grow" />
        <a href="/" className="ml-[70px] text-red-500 text-3xl font-bold">AnimeLogo</a>
        <div className="flex-grow-[3]" />
        <a href="/news" className="ml-[70px] text-red-500 text-xl hover:text-red-700">Новости</a>
        <a href="/anime" className="ml-[70px] text-red-500 text-xl hover:text-red-700">Аниме</a>
        <a href="/list" className="ml-[70px] text-red-500 text-xl hover:text-red-700">Списки</a>
        <div className="flex-grow" />
      </div>
    );
  }
}

export default Header;