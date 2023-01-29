import styled from 'styled-components'

export const ArtistWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #ccc;

  li {
    margin-bottom: 20px;
  }

  a.item {
    display: inline-block;
    display: flex;
    width: 210px;
    height: 62px;
    background: #fafafa;
    color: #333;

    &:hover {
      text-decoration: none;
    }

    img {
      width: 62px;
      height: 62px;
    }

    .desc {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 15px;

      .name {
        font-size: 16px;
        font-weight: bold;
      }

      .alias {
        margin-top: 10px;
        width: 147px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`
