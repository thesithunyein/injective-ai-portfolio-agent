'use client'

import { Loader } from 'lucide-react'

interface LoadingStateProps {
  message?: string
}

export const LoadingState = ({
  message = 'Analyzing your portfolio...',
}: LoadingStateProps) => {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-secondary to-accent rounded-lg border border-primary/20 flex flex-col items-center justify-center min-h-64">
      <Loader className="w-8 h-8 text-primary animate-spin mb-4" />
      <p className="text-gray-300 text-center">{message}</p>
    </div>
  )
}
