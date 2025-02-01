import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import 'leaflet/dist/leaflet.css'
import { UserLocationMapProps } from '@/app/types'

const MapContainer = dynamic(
  () => import('react-leaflet').then((m) => m.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((m) => m.TileLayer),
  { ssr: false }
)
const Marker = dynamic(() => import('react-leaflet').then((m) => m.Marker), {
  ssr: false,
})
const Popup = dynamic(() => import('react-leaflet').then((m) => m.Popup), {
  ssr: false,
})

const UserLocationMap = ({ users }: UserLocationMapProps) => {
  const [L, setL] = useState<typeof import('leaflet') | null>(null)

  useEffect(() => {
    import('leaflet').then((leaflet) => {
      setL(leaflet)
    })
  }, [])

  if (!L) return null

  return (
    <MapContainer
      center={[0, 0]}
      zoom={1}
      minZoom={1}
      maxBounds={[
        [-90, -180],
        [90, 180],
      ]}
      maxBoundsViscosity={1.0}
      style={{ height: '500px', width: '100%', zIndex: 40 }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {users.map((user) => {
        const userIcon = new L.Icon({
          iconUrl: user.profileImage,
          iconSize: [25, 25],
          iconAnchor: [20, 40],
          popupAnchor: [0, -40],
        })

        return (
          <Marker
            key={user.id}
            position={[user.latitude, user.longitude]}
            icon={userIcon}
          >
            <Popup>
              <Image
                src={user.profileImage}
                alt="User"
                width={50}
                height={50}
              />
              <p className="font-bold text-center mt-2">User ID: {user.id}</p>
            </Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
}

export default UserLocationMap
