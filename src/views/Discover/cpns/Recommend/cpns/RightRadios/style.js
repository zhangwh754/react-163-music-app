import styled from 'styled-components'

export const RadiosWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    margin-bottom: 10px;
  }

  a.item {
    display: inline-block;
    display: flex;
    align-items: center;
    width: 210px;
    padding: 5px 10px;
    color: #333;

    &:hover {
      text-decoration: none;
    }

    img {
      width: 40px;
      height: 40px;
    }

    .desc {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 15px;

      .name {
      }

      .position {
        margin-top: 10px;
        width: 130px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`
