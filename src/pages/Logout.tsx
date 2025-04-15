import React, { useEffect } from 'react'
import { hardNavigate } from '../utils'

const Logout: React.FC = () => {
  useEffect(() => {
    localStorage.clear()
    hardNavigate("/")
  }, [])

  return null
}

export default Logout
