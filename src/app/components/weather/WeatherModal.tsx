'use client'

import { WeatherModalProps } from '@/app/types'
import Modal from '../common/Modal'
import { getWeatherIcon } from '@/app/utils/weatherCode'
import { SquareX } from 'lucide-react'

const WeatherModal = ({
  show,
  onClose,
  weather,
  city,
  country,
}: WeatherModalProps) => {
  return (
    <Modal show={show} onClose={onClose}>
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
      >
        <SquareX size={28} />
      </button>
      <div className="p-6 text-center">
        <div className="flex justify-center items-center gap-2">
          <h2 className="text-2xl font-bold text-gray-800">
            Current Weather in {city}, {country}
          </h2>
          <div className="text-6xl text-gray-700">
            {getWeatherIcon(weather?.weatherCode)}
          </div>
        </div>
        <div className="flex flex-col items-center mt-4">
          <p className="text-lg mt-2 text-gray-900 font-medium">
            🌡 Temperature: {weather?.temperature}°C
          </p>
          <p className="text-sm text-gray-700">
            🔽 Min: {weather?.minTemp}°C | 🔼 Max: {weather?.maxTemp}°C
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6 text-gray-800">
          Hourly Forecast for {weather?.hourlyForecast?.[0]?.date}
        </h3>
        <div className="flex overflow-x-auto gap-4 mt-4">
          {weather ? (
            weather.hourlyForecast.map((hour, index) => (
              <div
                key={index}
                className="p-3 border rounded-lg min-w-[100px] text-center bg-gray-100 shadow-sm"
              >
                <p className="text-sm font-medium text-gray-800">{hour.time}</p>
                <div className="text-2xl text-gray-700">
                  {getWeatherIcon(hour.weatherCode)}
                </div>
                <p className="text-md text-gray-900 font-semibold">
                  {hour.temperature}°C
                </p>
              </div>
            ))
          ) : (
            <p className="text-bold text-accent">No one Hourly Forecast</p>
          )}
        </div>
      </div>
    </Modal>
  )
}

export default WeatherModal
