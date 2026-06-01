import {
  ChainGrpcWalletApi,
  getNetworkEndpoints,
  Network,
} from '@injectivelabs/sdk-ts'
import { getInjectiveAddress } from '@injectivelabs/sdk-ts'

const NETWORK = Network.TestnetK8s

export const getInjectiveEndpoints = () => {
  return getNetworkEndpoints(NETWORK)
}

export const getWalletApi = () => {
  const endpoints = getInjectiveEndpoints()
  return new ChainGrpcWalletApi({
    channel: endpoints.grpc,
  })
}

export const validateInjectiveAddress = (address: string): boolean => {
  try {
    return address.startsWith('inj') && address.length === 42
  } catch {
    return false
  }
}

export interface PortfolioAsset {
  denom: string
  amount: string
  symbol: string
  price: number
  value: number
  percentage: number
}

export interface Portfolio {
  totalValue: number
  assets: PortfolioAsset[]
  lastUpdated: Date
}

export const fetchPortfolio = async (address: string): Promise<Portfolio> => {
  if (!validateInjectiveAddress(address)) {
    throw new Error('Invalid Injective address')
  }

  const walletApi = getWalletApi()
  
  try {
    const balances = await walletApi.getBalance({
      address,
    })

    const assets: PortfolioAsset[] = balances.balances.map((balance) => ({
      denom: balance.denom,
      amount: balance.amount,
      symbol: getDenomSymbol(balance.denom),
      price: getPriceForDenom(balance.denom),
      value: (parseFloat(balance.amount) / 1e18) * getPriceForDenom(balance.denom),
      percentage: 0,
    }))

    const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0)

    const assetsWithPercentage = assets.map((asset) => ({
      ...asset,
      percentage: totalValue > 0 ? (asset.value / totalValue) * 100 : 0,
    }))

    return {
      totalValue,
      assets: assetsWithPercentage,
      lastUpdated: new Date(),
    }
  } catch (error) {
    console.error('Error fetching portfolio:', error)
    throw error
  }
}

const getDenomSymbol = (denom: string): string => {
  const denomMap: Record<string, string> = {
    inj: 'INJ',
    'peggy0x0000000000000000000000000000000000000000': 'WETH',
    'peggy0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': 'USDC',
    'peggy0xdAC17F958D2ee523a2206206994597C13D831ec7': 'USDT',
  }
  return denomMap[denom] || denom.slice(0, 6).toUpperCase()
}

const getPriceForDenom = (denom: string): number => {
  const priceMap: Record<string, number> = {
    inj: 8.5,
    'peggy0x0000000000000000000000000000000000000000': 2500,
    'peggy0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': 1.0,
    'peggy0xdAC17F958D2ee523a2206206994597C13D831ec7': 1.0,
  }
  return priceMap[denom] || 1.0
}
