export type User = {
  login: { uuid: string }
  location: {
    coordinates: {
      latitude: string
      longitude: string
    }
    city: string
    country: string
  }
  picture: { large: string }
  name: { title: string; first: string; last: string }
  email: string
  dob: { age: number }
  gender: string
}

export type UserCardProps = {
  user: User
  isSavedPage: boolean
}

export type LocationUser = {
  id: string
  latitude: number
  longitude: number
  profileImage: string
}

export type UserLocationMapProps = {
  users: LocationUser[]
}

export type ModalProps = {
  children?: React.ReactNode
  show: boolean
  onClose: () => void
}

export type HourlyForecastProps = {
  fullTime: string
  time: string
  date: string
  temperature: number
  weatherCode: number
}

export type WeatherDataProps = {
  temperature: number
  weatherCode: number
  minTemp: number
  maxTemp: number
  hourlyForecast: HourlyForecastProps[]
}

export type WeatherModalProps = {
  show: boolean
  onClose: () => void
  weather: WeatherDataProps
  city: string
  country: string
}

export type UseWeatherProps = {
  latitude: string
  longitude: string
}
