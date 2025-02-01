import React from 'react'
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs'

const getGenderIcon = (gender: string) => {
  return gender === 'male' ? (
    <BsGenderMale color="blue" size={26} />
  ) : (
    <BsGenderFemale color="purple" size={26} />
  )
}

export default getGenderIcon
