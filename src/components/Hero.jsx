import React from 'react'

export default function Hero() {
  return (
    <section id="hero" data-tour="hero" className="bg-gradient-to-r from-indigo-50 via-white to-indigo-100">
  <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
    <div className="space-y-6">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
        Future of Work <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Starts with AI</span>
      </h1>
      <p className="text-lg text-gray-600">
        Discover how Artificial Intelligence is reshaping careers, skills, and opportunities for tomorrow.
      </p>
      <a href="#features" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow hover:scale-105 transform transition">
        Explore Features
      </a>
    </div>
    <div className="rounded-3xl border bg-white/70 backdrop-blur shadow-lg p-8">
      <div className="aspect-video rounded-2xl border-2 border-dashed grid place-items-center text-gray-500">
        <img src="https://plus.unsplash.com/premium_photo-1714618951275-9acb91c4bccd?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  </div>
</section>

  )
}
