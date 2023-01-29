import styled from 'styled-components'

export const LoginWrapper = styled.div`
  > .content {
    .header {
      position: relative;
      padding-left: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 38px;
      line-height: 38px;
      z-index: 10;
      border-bottom: 1px solid #191919;
      border-radius: 4px 4px 0 0;
      background: #2d2d2d;

      .left {
        font-weight: bold;
        font-size: 14px;
        color: #fff;
      }

      .right {
        font-weight: bold;
        font-size: 18px;
        text-align: center;
        color: #ccc;
        i {
          padding: 0 18px;
        }
      }
    }

    .main {
      width: 538px;
      background-color: #fff;
    }
  }
`
