import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'FortalezaDuro',
  description:
    'The most popular AMM on BSC by user count! Earn Duro through yield farming, then stake it in Syrup Pools to earn more tokens!',
  image: 'https://swap.fortalezadigital.io/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('FortalezaDuro')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('FortalezaDuro')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('FortalezaDuro')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('FortalezaDuro')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('FortalezaDuro')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('FortalezaDuro')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('FortalezaDuro')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('FortalezaDuro')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('FortalezaDuro')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('FortalezaDuro')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('FortalezaDuro')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('FortalezaDuro')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('FortalezaDuro')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('FortalezaDuro')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('FortalezaDuro')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('FortalezaDuro')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('FortalezaDuro')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('FortalezaDuro')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('FortalezaDuro Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('FortalezaDuro Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('FortalezaDuro Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('FortalezaDuro')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('FortalezaDuro')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('FortalezaDuro')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('FortalezaDuro')}`,
      }
    default:
      return null
  }
}
