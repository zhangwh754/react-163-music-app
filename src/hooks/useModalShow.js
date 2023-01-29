import { useDispatch } from 'react-redux'

import { setLoginPanelShowAction } from '@/store/features/login'

const useModalShow = () => {
  const dispatch = useDispatch()

  const handleModalShow = (type = true) => {
    dispatch(setLoginPanelShowAction(type))
  }

  return {
    handleModalShow
  }
}

export default useModalShow
