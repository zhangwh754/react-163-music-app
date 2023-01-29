import styled from 'styled-components'

export const PanelWrapper = styled.div`
  > .content {
    display: flex;
    padding: 20px;

    .left {
      a {
        display: inline-block;
        width: 100px;
        height: 100px;
        padding: 2px;
        background: rgb(255, 255, 255);
        border: 1px solid rgb(218, 218, 218);

        img {
          width: 100%;
        }
      }
    }

    .right {
      margin-left: 20px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      p {
        font-size: 18px;
        font-weight: bold;
      }

      .level {
        display: inline-block;
        width: 60px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        border: 2px solid rgb(218, 218, 218);
        border-radius: 10px;
        margin: 10px 0;
      }
    }
  }
`
