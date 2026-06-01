'use client'

import { Portfolio } from '@/lib/injective'
import { TrendingUp, PieChart } from 'lucide-react'

interface PortfolioDisplayProps {
  portfolio: Portfolio
}

export const PortfolioDisplay = ({ portfolio }: PortfolioDisplayProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-br from-secondary to-accent rounded-lg border border-primary/20">
      <div className="flex items-center gap-2 mb-6">
        <PieChart className="w-5 h-5 text-primary" />
        <h2 className="text-2xl font-bold text-white">Your Portfolio</h2>
      </div>

      <div className="mb-6 p-4 bg-accent/50 rounded-lg border border-primary/10">
        <p className="text-gray-400 text-sm mb-1">Total Value</p>
        <p className="text-3xl font-bold text-primary">
          ${portfolio.totalValue.toFixed(2)}
        </p>
      </div>

      <div className="space-y-3">
        {portfolio.assets.map((asset) => (
          <div
            key={asset.denom}
            className="p-4 bg-accent/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-semibold text-white">{asset.symbol}</p>
                <p className="text-sm text-gray-400">
                  {(parseFloat(asset.amount) / 1e18).toFixed(4)} tokens
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-primary">
                  ${asset.value.toFixed(2)}
                </p>
                <p className="text-sm text-gray-400">
                  {asset.percentage.toFixed(1)}%
                </p>
              </div>
            </div>

            <div className="w-full bg-secondary rounded-full h-2">
              <div
                className="bg-gradient-to-r from-primary to-cyan-400 h-2 rounded-full transition-all"
                style={{ width: `${asset.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-4 h-4 text-primary" />
          <p className="text-sm font-semibold text-primary">
            Last Updated: {portfolio.lastUpdated.toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  )
}
