import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Injective AI Portfolio Agent',
  description: 'AI-powered portfolio analysis and rebalancing for Injective',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {children}
      </body>
    </html>
  )
}
