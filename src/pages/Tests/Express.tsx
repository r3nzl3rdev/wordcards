import React from 'react'
import Test from '../../components/Test'
import ProtectedRoute from '../../components/ProtectedRoute'

const variants = ["so'z", "gap", "harf"]

const Express: React.FC = () => {
  return (
    <ProtectedRoute>
      <div className="flex justify-center text-lg">
        <div className="flex flex-col gap-8 w-full sm:w-5/6 max-w-[945px] overflow-auto no-scrollbar justify-start items-start">
          <Test title="Express-test" word="word" variants={variants} />
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default Express
