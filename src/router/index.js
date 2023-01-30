import Discover from '@/views/Discover'
import React from 'react'
import { Navigate } from 'react-router-dom'

const App404 = React.lazy(() => import('@/views/404'))
const Recommend = React.lazy(() => import('@/views/Discover/cpns/Recommend'))
const Ranking = React.lazy(() => import('@/views/Discover/cpns/Ranking'))
const Songs = React.lazy(() => import('@/views/Discover/cpns/Songs'))
const Album = React.lazy(() => import('@/views/Discover/cpns/Album'))
const Mine = React.lazy(() => import('@/views/Mine'))

const config = [
  { path: '', element: <Navigate to="/discover" /> },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      { path: '/discover', element: <Navigate to="/discover/recommend" /> },
      { path: '/discover/recommend', element: <Recommend /> },
      { path: '/discover/ranking', element: <Ranking /> },
      { path: '/discover/songs', element: <Songs /> },
      { path: '/discover/album', element: <Album /> }
    ]
  },

  {
    path: '/mine',
    element: <Mine />
  },

  {
    path: '*',
    element: <App404 />
  }
]

export default config
