import axios from 'axios'
import { useEffect, useState } from 'react'
import {
  HourlyForecastProps,
  UseWeatherProps,
  WeatherDataProps,
} from '../types'

export const useWeather = ({ latitude, longitude }: UseWeatherProps) => {
  const [weather, setWeather] = useState<WeatherDataProps>()
  const [isLoading, setIsLoading] = useState(true)

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weathercode&timezone=auto`
      )

      const today = new Date().toISOString().split('T')[0]

      const hourlyData: HourlyForecastProps[] = response?.data?.hourly?.time
        .map(
          (time: string, index: number): HourlyForecastProps => ({
            fullTime: time,
            time: time.slice(-5),
            date: time.split('T')[0],
            temperature: response.data.hourly.temperature_2m[index],
            weatherCode: response.data.hourly.weathercode[index],
          })
        )
        .filter((hour: HourlyForecastProps) => hour.date === today)

      setWeather({
        temperature: response.data.current_weather.temperature,
        weatherCode: response.data.current_weather.weathercode,
        minTemp: response.data.daily.temperature_2m_min[0],
        maxTemp: response.data.daily.temperature_2m_max[0],
        hourlyForecast: hourlyData,
      })
    } catch (error) {
      console.log('Error: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather()

    const interval = setInterval(() => {
      fetchWeather()
    }, 300000)

    return () => clearInterval(interval)
  }, [latitude, longitude])

  return { weather, isLoading }
}
