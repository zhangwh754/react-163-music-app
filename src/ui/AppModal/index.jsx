import { memo } from 'react'
import { createPortal } from 'react-dom'

import { ModalWrapper } from './style'

const AppModal = memo(props => {
  const Modal = () => (
    <ModalWrapper>
      <div className="content">{props.children}</div>
    </ModalWrapper>
  )

  return createPortal(<Modal />, document.querySelector('#modal'))
})

export default AppModal
