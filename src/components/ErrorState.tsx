'use client'

import { AlertCircle } from 'lucide-react'

interface ErrorStateProps {
  error: string
  onRetry?: () => void
}

export const ErrorState = ({ error, onRetry }: ErrorStateProps) => {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-secondary to-accent rounded-lg border border-red-500/30">
      <div className="flex items-center gap-2 mb-4">
        <AlertCircle className="w-5 h-5 text-red-500" />
        <h2 className="text-lg font-bold text-red-500">Error</h2>
      </div>

      <p className="text-gray-300 mb-4">{error}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="w-full px-4 py-2 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  )
}
