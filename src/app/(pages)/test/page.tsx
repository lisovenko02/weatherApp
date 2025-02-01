import WeatherModal from '@/app/components/weather/WeatherModal'

export default function Test() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
      <WeatherModal />
      <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>

      <button className="bg-accent hover:bg-accent-hover text-foreground px-6 py-3 rounded-lg">
        Click Me
      </button>

      <p className="mt-4 text-neutral-light">
        This is a text with light grey color.
      </p>

      <a href="#" className="text-link hover:text-accent">
        This is a link.
      </a>
    </div>
  )
}
