'use client'

import { useState } from 'react'
import { useAppStore } from '@/lib/store'
import { validateInjectiveAddress } from '@/lib/injective'
import { Wallet } from 'lucide-react'

export const WalletConnect = () => {
  const [input, setInput] = useState('')
  const { setWalletAddress, setError } = useAppStore()

  const handleConnect = () => {
    if (!input.trim()) {
      setError('Please enter a wallet address')
      return
    }

    if (!validateInjectiveAddress(input)) {
      setError('Invalid Injective address. Must start with "inj" and be 42 characters.')
      return
    }

    setWalletAddress(input)
    setError(null)
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-secondary to-accent rounded-lg border border-primary/20">
      <div className="flex items-center gap-2 mb-4">
        <Wallet className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-bold text-white">Connect Wallet</h2>
      </div>

      <p className="text-gray-400 text-sm mb-4">
        Enter your Injective wallet address to analyze your portfolio
      </p>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleConnect()}
        placeholder="inj1..."
        className="w-full px-4 py-3 bg-accent border border-primary/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary mb-4"
      />

      <button
        onClick={handleConnect}
        className="w-full px-4 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors"
      >
        Analyze Portfolio
      </button>
    </div>
  )
}
