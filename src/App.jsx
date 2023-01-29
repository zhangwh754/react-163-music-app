import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import route from './router'
import AppHeader from './components/AppHeader'
import AppNav from './components/AppNav'
import AppFooter from './components/AppFooter'
import AppLogin from './components/AppLogin'

const App = memo(() => {
  return (
    <>
      <AppHeader />
      <AppNav />
      <Suspense fallback={<h2>Loading...</h2>}>{useRoutes(route)}</Suspense>
      <AppFooter />

      {/* 登录弹窗 */}
      <AppLogin />
    </>
  )
})

export default App
