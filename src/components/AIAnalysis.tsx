'use client'

import { AIAnalysis } from '@/lib/ai'
import { Brain, AlertCircle, Target } from 'lucide-react'

interface AIAnalysisProps {
  analysis: AIAnalysis
}

export const AIAnalysisComponent = ({ analysis }: AIAnalysisProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="p-6 bg-gradient-to-br from-secondary to-accent rounded-lg border border-primary/20">
        <div className="flex items-center gap-2 mb-4">
          <Brain className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-bold text-white">AI Analysis</h2>
        </div>

        <div className="p-4 bg-accent/50 rounded-lg border border-primary/10">
          <p className="text-gray-300 leading-relaxed">{analysis.summary}</p>
        </div>
      </div>

      <div className="p-6 bg-gradient-to-br from-secondary to-accent rounded-lg border border-primary/20">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="w-5 h-5 text-yellow-400" />
          <h3 className="text-xl font-bold text-white">Risk Assessment</h3>
        </div>

        <div className="p-4 bg-accent/50 rounded-lg border border-yellow-400/20">
          <p className="text-gray-300 leading-relaxed">
            {analysis.riskAssessment}
          </p>
        </div>
      </div>

      <div className="p-6 bg-gradient-to-br from-secondary to-accent rounded-lg border border-primary/20">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-green-400" />
          <h3 className="text-xl font-bold text-white">Recommendations</h3>
        </div>

        <ul className="space-y-3">
          {analysis.recommendations.map((rec, idx) => (
            <li
              key={idx}
              className="p-3 bg-accent/50 rounded-lg border border-green-400/20 text-gray-300 flex gap-3"
            >
              <span className="text-green-400 font-semibold flex-shrink-0">
                {idx + 1}.
              </span>
              <span>{rec}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 bg-gradient-to-br from-secondary to-accent rounded-lg border border-primary/20">
        <h3 className="text-xl font-bold text-white mb-4">Rebalancing Suggestion</h3>

        <div className="space-y-4">
          <div className="p-4 bg-accent/50 rounded-lg border border-primary/10">
            <p className="text-sm text-gray-400 mb-1">Action</p>
            <p className="text-white font-semibold">
              {analysis.rebalancingSuggestion.action}
            </p>
          </div>

          <div className="p-4 bg-accent/50 rounded-lg border border-primary/10">
            <p className="text-sm text-gray-400 mb-3">Target Allocation</p>
            <div className="space-y-2">
              {Object.entries(
                analysis.rebalancingSuggestion.targetAllocation
              ).map(([asset, percentage]) => (
                <div key={asset} className="flex justify-between items-center">
                  <span className="text-white font-medium">{asset}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-secondary rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-cyan-400 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-primary font-semibold w-12 text-right">
                      {percentage.toFixed(1)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-accent/50 rounded-lg border border-primary/10">
            <p className="text-sm text-gray-400 mb-1">Reasoning</p>
            <p className="text-gray-300 leading-relaxed">
              {analysis.rebalancingSuggestion.reasoning}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
