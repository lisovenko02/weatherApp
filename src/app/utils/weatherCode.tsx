import {
  SunMedium,
  CloudSun,
  CloudFog,
  CloudDrizzle,
  CloudHail,
  CloudRain,
  CloudRainWind,
  Snowflake,
  CloudSnow,
  Zap,
} from 'lucide-react'
import { JSX } from 'react'

export const getWeatherIcon = (weatherCode: number): JSX.Element | null => {
  const weatherIcons: Record<number, React.ComponentType | null> = {
    0: SunMedium,
    1: CloudSun,
    2: CloudSun,
    3: CloudSun,
    45: CloudFog,
    48: CloudFog,
    51: CloudDrizzle,
    53: CloudDrizzle,
    55: CloudDrizzle,
    56: CloudHail,
    57: CloudHail,
    61: CloudRain,
    63: CloudRain,
    65: CloudRain,
    66: CloudRainWind,
    67: CloudRainWind,
    71: Snowflake,
    73: Snowflake,
    75: Snowflake,
    77: CloudSnow,
    80: CloudRain,
    81: CloudRain,
    82: CloudRain,
    85: Snowflake,
    86: Snowflake,
    95: Zap,
    96: Zap,
    99: Zap,
  }

  const Icon = weatherIcons[weatherCode] || null
  return Icon ? <Icon /> : null
}
