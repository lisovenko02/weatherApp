'use client'

import UserLocationMap from '../components/common/UserLocationMap'
import UserCard from '../components/user/UserCard'
import { useUsers } from '../hooks/useUsers'

export default function Home() {
  const { users, isLoading, fetchUsers } = useUsers()

  const mappedUsers = users.map((user) => ({
    id: user.login.uuid,
    latitude: parseFloat(user.location.coordinates.latitude),
    longitude: parseFloat(user.location.coordinates.longitude),
    profileImage: user.picture.large,
  }))

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      <div className="w-full md:w-1/3 overflow-auto max-h-[calc(100vh-100px)] p-4 rounded-lg shadow">
        <ul className="space-y-4">
          {users &&
            users.map((user, index) => (
              <UserCard user={user} key={index} isSavedPage={false} />
            ))}
        </ul>
        <div className="text-center mt-6">
          <button
            onClick={() => fetchUsers()}
            disabled={isLoading}
            className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
          >
            {isLoading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      </div>

      <div className="w-full md:w-2/3 h-[300px] md:h-[500px] bg-gray-100 rounded-lg shadow overflow-hidden">
        <UserLocationMap users={mappedUsers} />
      </div>
    </div>
  )
}
