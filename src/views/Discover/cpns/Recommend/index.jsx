import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RecommendWrapper } from './style'
import { getRecommendData } from '@/store/features/recommend'
import { isEmpty } from '@/utils'
import RecommendBanner from '@/components/RecommendBanner'

const Recommend = memo(() => {
  const { banner } = useSelector(state => ({
    banner: state.recommend.banner
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecommendData())
  }, [dispatch])

  return (
    <RecommendWrapper>
      <div className="content">
        {!isEmpty(banner) && <RecommendBanner banner={banner} />}
      </div>
    </RecommendWrapper>
  )
})

export default Recommend
