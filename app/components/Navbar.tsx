export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0a0a0a] border-b border-gray-800 px-6 py-4 flex justify-between items-center z-50">
      <h1 className="text-white font-bold text-xl">Chapter</h1>
      <div className="flex gap-4">
        <button className="text-gray-400 hover:text-white text-sm transition-all">
          Sign In
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all">
          Get Started
        </button>
      </div>
    </nav>
  )
}