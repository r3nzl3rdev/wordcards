import React, { useEffect } from 'react'

const Logout: React.FC = () => {
  useEffect(() => {
    localStorage.clear()
    window.location.href = '/login'
  }, [])

  return null
}

export default Logout
