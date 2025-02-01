import Link from 'next/link'
import { TiWeatherPartlySunny } from 'react-icons/ti'

export default function Header() {
  return (
    <header className="bg-background text-foreground p-4 flex items-center justify-between border-b-2 border-neutral">
      <div className="text-2xl font-bold">
        <Link href="/" className="flex items-center justify-center gap-1">
          <TiWeatherPartlySunny className="hover:text-blue-500" />
          <span>Weather</span>
        </Link>
      </div>

      <nav className="space-x-4">
        <Link href="/" className="hover:text-accent">
          Users
        </Link>
        <Link href="/saved" className="hover:text-accent">
          Saved Users
        </Link>
      </nav>
    </header>
  )
}
