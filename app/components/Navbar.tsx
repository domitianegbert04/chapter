export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0d0d0b] border-b border-gray-800 px-6 py-4 flex justify-between items-center z-50">
      <div className="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="20" fill="#0d0d0b"/>
          <rect x="18" y="14" width="52" height="60" rx="4" fill="#1a1a17"/>
          <path d="M18 56 L52 90 L70 66 L70 14 L52 14 L52 32 L18 32 Z" fill="#1a1a17"/>
          <path d="M18 56 L52 56 L52 90 Z" fill="#2a2a27"/>
        </svg>
        <h1 className="text-white font-bold text-xl">Chapter</h1>
      </div>
      <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all">
        Sign In
      </button>
    </nav>
  )
}