'use client'

import { useState, useEffect } from 'react'
import { User } from '../types'
import toast from 'react-hot-toast'

const useSavedUsers = () => {
  const [savedUsers, setSavedUsers] = useState<User[]>([])

  const saveUser = (user: User) => {
    const existingUsers = JSON.parse(localStorage.getItem('savedUsers') ?? '[]')

    const isUserExist = existingUsers.some(
      (savedUser: User) => savedUser.login.uuid === user.login.uuid
    )

    if (isUserExist) {
      toast.error('This user is already saved!')
      return
    }

    toast.success('User saved successfully!')

    const updatedUsers = [...existingUsers, user]
    localStorage.setItem('savedUsers', JSON.stringify(updatedUsers))
    setSavedUsers(updatedUsers)
  }

  useEffect(() => {
    const savedUsersFromLocalStorage = JSON.parse(
      localStorage.getItem('savedUsers') ?? '[]'
    )
    setSavedUsers(savedUsersFromLocalStorage)
  }, [])

  return { savedUsers, saveUser }
}

export default useSavedUsers
