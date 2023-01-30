import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 70px;

  > .content {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: #242424;

    .wrap {
      width: 1100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      color: #fff;
    }
  }
`
