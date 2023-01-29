import styled from 'styled-components'

export const RecommendWrapper = styled.div`
  > .content {
    .main {
      display: flex;
      margin: 0 auto;
      width: 980px;
      background-color: #fff;

      &-left,
      &-right {
        border: 1px solid #d3d3d3;
        border-width: 0 1px;
      }

      &-left {
        padding: 20px;
        width: 729px;
        border-right: none;
      }

      &-right {
        width: 250px;
      }
    }
  }
`
