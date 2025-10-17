'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-heading font-bold gradient-text">
            404
          </h1>
        </div>
        
        <h2 className="text-4xl font-heading font-bold text-white mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-violet via-primary-indigo to-primary-cyan rounded-xl font-semibold text-white hover:shadow-glow-violet transition-all duration-300"
          >
            <Home size={20} />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 liquid-glass rounded-xl font-semibold text-white hover:shadow-glow-cyan transition-all duration-300 border border-primary-cyan/30"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
