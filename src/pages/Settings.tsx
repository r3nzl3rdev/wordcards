import React, { useEffect, useState } from 'react'
import ProtectedRoute from '../components/ProtectedRoute'
import Button from '../components/Button'
import Modal from '../components/Modal'
import Input from '../components/Input'
import { toast } from 'react-toastify'

const Settings: React.FC = () => {
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false)
  const [isChangeEmailModalOpen, setIsChangeEmailModalOpen] = useState(false)
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")
  const [email, setEmail] = useState<string | null>(null);

  const isMismatch = confirmNewPassword && newPassword !== confirmNewPassword

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    setEmail(storedEmail);
  }, []);


  return (
    <ProtectedRoute>
      <>
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
            <Button onClick={() => setIsChangePasswordModalOpen(true)} className='bg-yellow-200 w-fit rounded-md hover:bg-yellow-300'>
              <i className="fa-solid fa-key mr-2"></i>
              Parol o'zgartish
            </Button>
            <p className='mt-2 text-2xl font-bold'>
              Email
            </p>
            <p>
              Email manzilingiz: <b>{email}</b>
            </p>
            <Button onClick={() => setIsChangeEmailModalOpen(true)} className='bg-blue-500 w-fit rounded-md text-white hover:bg-blue-400'>
              <i className="fa-solid fa-envelope mr-2"></i>
              Email o'zgartish
            </Button>
            <p className='py-2 px-4 max-w-[500px] rounded-md shadow-gray-400 shadow-lg bg-sky-100'>
              Biz spam bilan kurashamiz, shuning uchun elektron pochtangiz sizdan boshqa hech kimga ko'rinmaydi.
            </p>
          </div>
        </div>
        <Modal
          isOpen={isChangePasswordModalOpen}
          onClose={() => setIsChangePasswordModalOpen(false)}
          title="Words.uz"
        >
          <div className="flex flex-col gap-4">
            <p className="text-lg">Parolni o'zgartish</p>
            <p>
              Parolni o'zgartirish uchun <b>joriy</b> parolni kiriting, so'ngra <b>yangi</b> parolni ikki marta takrorlang.
            </p>
            <Input
              className="rounded"
              id="old-password"
              label="Joriy parol:"
              onChange={(e) => setOldPassword(e.target.value)}
              value={oldPassword}
            />
            <Input
              className="rounded"
              id="new-password"
              label="Yangi parol:"
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
            />
            <Input
              className={`rounded ${isMismatch ? 'border-2 border-red-500' : ''}`}
              id="confirm-password"
              label="Parolni tasdiqlang:"
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              value={confirmNewPassword}
            />
            {isMismatch && (
              <p className="text-red-600 text-sm">Parollar mos emas!</p>
            )}
            <Button className="bg-yellow-500 hover:bg-yellow-400 rounded-md text-black w-fit">
              Parolni o'zgartirish
            </Button>
          </div>
        </Modal>

        <Modal
          isOpen={isChangeEmailModalOpen}
          onClose={() => setIsChangeEmailModalOpen(false)}
          title="Words.uz"
        >
          <div className="flex flex-col gap-4">
            <p>Elektron pochtangizni qanday o'zgartirish bo'yicha ko'rsatmalar joriy elektron pochta manzilingizga yuborildi.</p>
          </div>
        </Modal>
      </>
    </ProtectedRoute>
  )
}

export default Settings
