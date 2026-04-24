import { supabase } from './lib/supabase'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-7xl font-bold text-white mb-6 tracking-tight">
            Chapter
          </h1>
          <p className="text-2xl text-gray-400 mb-8">
            Your reading life. All in one place.
          </p>
          <p className="text-gray-600 text-sm mb-12">
            Track books. Build streaks. Share quotes. Discover your next read.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </main>
  )
}