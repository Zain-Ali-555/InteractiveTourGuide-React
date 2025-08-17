export default function Navbar({ onStartTour }) {
  return (
    <header
      data-tour="navbar"
      className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 backdrop-blur shadow"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        <a href="#" className="text-2xl font-bold tracking-wide">
          AI Career Path
        </a>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#hero" className="relative group">
            Home
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-white transition-all"></span>
          </a>
          <a href="#features" className="relative group">
            Features
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-white transition-all"></span>
          </a>
          <a href="#contact" className="relative group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-white transition-all"></span>
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={onStartTour}
            className="px-5 py-2 rounded-full bg-white text-indigo-700 font-semibold shadow hover:scale-105 transition"
          >
            Start Tour
          </button>
        </div>
      </div>
    </header>
  );
}
