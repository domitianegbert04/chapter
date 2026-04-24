import Navbar from './components/Navbar'

function ChapterIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="20" fill="#0d0d0b"/>
      <rect x="18" y="14" width="52" height="60" rx="4" fill="#1a1a17"/>
      <path d="M18 56 L52 90 L70 66 L70 14 L52 14 L52 32 L18 32 Z" fill="#1a1a17"/>
      <path d="M18 56 L52 56 L52 90 Z" fill="#2a2a27"/>
      <rect x="26" y="24" width="24" height="2.5" rx="1.25" fill="white" opacity="0.2"/>
      <rect x="26" y="32" width="32" height="2.5" rx="1.25" fill="white" opacity="0.15"/>
    </svg>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0b]">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-xl">
          <div className="flex justify-center mb-6">
            <ChapterIcon size={64} />
          </div>
          <h1 className="text-7xl font-bold text-white mb-5 tracking-tight">
            Chapter
          </h1>
          <p className="text-xl text-gray-400 mb-4">
            Your reading life. All in one place.
          </p>
          <p className="text-gray-600 text-sm mb-10">
            Track books. Build streaks. Save quotes. Discover what to read next.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all">
            Get Started — it's free
          </button>
        </div>
      </div>
    </main>
  )
}