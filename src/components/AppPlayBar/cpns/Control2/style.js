import styled from 'styled-components'

export const ControlWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 6px;
  background-position: -119px -243px;

  .play,
  .loop,
  .volume,
  .playlist {
    width: 25px;
    height: 25px;
    margin-right: 8px;
    margin-top: 5px;
    cursor: pointer;
    margin-top: 0;
  }

  .play {
    background-position: -88px -163px;
    &:hover {
      background-position: -88px -189px;
    }
  }

  .volume {
    background-position: -2px -248px;
  }

  .playlist {
    background-position: -42px -68px;
    width: 60px;
    color: #ccc;
    padding-left: 20px;
    line-height: 25px;
  }

  .loop {
    background-position: ${props => {
      switch (props.playSequence) {
        case 1:
          return '-66px -248px;'
        case 2:
          return '-66px -344px;'
        default:
          return '-3px -344px;'
      }
    }};
  }
`
