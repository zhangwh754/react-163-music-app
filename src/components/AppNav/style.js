import styled from 'styled-components'

export const NavWrapper = styled.div`
  height: ${props => (props.hasSub ? '30px' : '5px')};
  > .content {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 99;
    .bar {
      height: 5px;
      background-color: #c20c0c;
    }
  }
`
