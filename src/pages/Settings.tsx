import React from 'react'
import ProtectedRoute from '../components/ProtectedRoute'
import Button from '../components/Button'

const Settings: React.FC = () => {
  return (
    <ProtectedRoute>
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 max-w-[945px]">
          <h1 className="text-2xl md:text-4xl font-bold">Akkaunt sozlamari</h1>
          <p>Ro'yhatdan o'tilgan sana: <b>10/12/2024 00:27</b></p>
          <p>
            Bu yerda siz hisobingiz bilan bog'langan parol yoki elektron pochta manzilini o'zgartirishingiz mumkin. <br />
            So'nggi login: <b> 12.04.2025 08:09</b>.
          </p>
          <p className='text-2xl font-bold'>
            Parol
          </p>
          <p>O'rnatilgan <b>10/12/2024 00:27</b></p>
          <Button className='bg-yellow-200 w-fit rounded-md hover:bg-yellow-300'>
            <i className="fa-solid fa-key mr-2"></i>
            Parol o'zgartish
          </Button>
          <p className='mt-2 text-2xl font-bold'>
            Email
          </p>
          <p>
            Email manzilingiz: <b>zawkindev@gmail.com</b>
          </p>
          <Button className='bg-blue-500 w-fit rounded-md text-white hover:bg-blue-400'>
            <i className="fa-solid fa-envelope mr-2"></i>
              Email o'zgartish</Button>
          <p className='py-2 px-4 max-w-[500px] rounded-md shadow-gray-400 shadow-lg bg-sky-100'>
            Biz spam bilan kurashamiz, shuning uchun elektron pochtangiz sizdan boshqa hech kimga ko'rinmaydi.
          </p>
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default Settings
