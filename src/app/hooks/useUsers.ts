'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { User } from '../types'

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const fetchUsers = async (reset = false) => {
    setIsLoading(true)
    try {
      const response = await axios.get('https://randomuser.me/api/?results=12')
      setUsers((prevUsers) =>
        reset ? response.data.results : [...prevUsers, ...response.data.results]
      )
      setPage((prevPage) => prevPage + 1)
    } catch (error) {
      console.log('Failed: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers(true)
  }, [])

  return { users, isLoading, page, fetchUsers }
}
