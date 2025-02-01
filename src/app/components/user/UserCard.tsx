'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import WeatherModal from '../weather/WeatherModal'
import { useWeather } from '@/app/hooks/useWeather'
import useSavedUsers from '@/app/hooks/useSavedUsers'
import getGenderIcon from '@/app/utils/getGenderIcon'
import { UserCardProps } from '@/app/types'

const UserCard = ({ user, isSavedPage }: UserCardProps) => {
  const [showModal, setShowModal] = useState(false)
  const { saveUser } = useSavedUsers()

  const handleModalOpenSwitch = () => {
    setShowModal(!showModal)
  }

  const { gender, dob, email, location, name, picture } = user
  const { weather } = useWeather({
    latitude: location.coordinates.latitude,
    longitude: location.coordinates.longitude,
  })

  const handleSaveUser = () => {
    saveUser(user)
  }
  return (
    <li className="bg-accent rounded-lg p-4 shadow-md flex flex-col items-center text-center">
      <div className="relative">
        <Image
          src={picture.large}
          width={100}
          height={100}
          alt={`${name.first} ${name.last}`}
          className="rounded-full border-4 border-gray-200"
        />
        <span className="absolute top-2 right-2 text-2xl">
          {getGenderIcon(gender)}
        </span>
      </div>
      <h3 className="font-semibold text-lg mt-2">
        {name.title} {name.first} {name.last}
      </h3>
      <p className="text-gray-500">
        {location.city}, {location.country}
      </p>
      <p className="text-sm text-gray-600">{email}</p>
      <p className="text-gray-700 font-medium">Age: {dob?.age}</p>

      <div className="mt-4 flex gap-2">
        <button
          onClick={handleModalOpenSwitch}
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
        >
          Weather Details
        </button>
        {!isSavedPage && (
          <button
            onClick={handleSaveUser}
            className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition"
          >
            Save User
          </button>
        )}
      </div>

      {weather && (
        <WeatherModal
          show={showModal}
          onClose={handleModalOpenSwitch}
          weather={weather}
          city={location.city}
          country={location.country}
        />
      )}
    </li>
  )
}

export default UserCard
