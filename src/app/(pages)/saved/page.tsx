'use client'

import React from 'react'
import useSavedUsers from '@/app/hooks/useSavedUsers'
import UserCard from '@/app/components/user/UserCard'

const Saved = () => {
  const { savedUsers } = useSavedUsers()

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-accent-hover mb-6 text-center">
        Saved Users
      </h1>
      {savedUsers.length === 0 ? (
        <p className="text-center text-gray-500">No saved users yet.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedUsers.map((user, index) => (
            <UserCard key={index} user={user} isSavedPage={true} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Saved
