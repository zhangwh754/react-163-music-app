import styled from 'styled-components'

export const LineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
  margin: 10px 20px 10px;
  border-bottom: 1px solid #ccc;

  .hot-artist {
    font-weight: bold;
    color: #333;
  }
  .show-all {
    position: relative;
    display: inline-block;
    padding-right: 5px;
    color: #666;

    &::after {
      position: absolute;
      content: '';
      width: 6px;
      height: 6px;
      top: 3px;
      right: 0;
      border: 1px solid #333;
      border-bottom: none;
      border-left: none;
      transform: rotate(45deg);
    }
  }
`
