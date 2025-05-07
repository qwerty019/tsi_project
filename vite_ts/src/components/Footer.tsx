import React, { PureComponent } from 'react'

class Footer extends PureComponent {

    render() {
      return (
          <>
          <div className='fixed bottom-0 left-0 w-full bg-gray-700'>
              <div className="container mx-auto text-center">
              <h2 className="text-white text-lg font-semibold">Ваш список Аниме.</h2>
                <p className="mt-2">
                    
                </p>
                <p className="mt-4 text-white">&copy; {new Date().getFullYear()} В случае нарушения авторских прав или других уведомлений - обращайтесь на почту liza.stepanova@mail.ru</p>
              </div>
          </div>
          </>
      );
    }
}

export default Footer