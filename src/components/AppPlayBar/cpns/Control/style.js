import styled from 'styled-components'

export const ControlWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 6px;
  width: 137px;

  .pre,
  .next,
  .play {
    width: 28px;
    height: 28px;
    margin-right: 8px;
    margin-top: 5px;
    cursor: pointer;
  }

  .pre {
    background-position: 0 -130px;

    &:hover {
      background-position: -30px -130px;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    /* 动态的传递 */
    background-position: 0 ${props => (props.isPlaying ? '-165px' : '-204px')};
    margin-top: 0;

    &:hover {
      /* 动态的传递 */
      background-position: -40px ${props => (props.isPlaying ? '-165px' : '-204px')};
    }
  }

  .next {
    background-position: -80px -130px;

    &:hover {
      background-position: -110px -130px;
    }
  }
`
