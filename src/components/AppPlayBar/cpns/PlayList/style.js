import styled from 'styled-components'

export const PlayListWrapper = styled.div`
  position: fixed;
  left: 50%;

  bottom: 43px;
  width: 986px;
  height: 301px;
  margin-left: -493px;

  display: flex;
  flex-direction: column;

  .right {
    flex: 1;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 41px;
  background-position: 0 0;

  .left {
    width: 528px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 25px;
    padding-right: 20px;
    top: 0;
    height: 39px;
    .title {
      line-height: 39px;
      font-size: 14px;
      color: #e2e2e2;
      font-weight: bold;
    }

    .icons {
      display: flex;
      align-items: center;
      a {
        display: flex;
        align-items: center;
        font-size: 14px;
        .play,
        .del {
          display: inline-block;
          width: 25px;
          height: 25px;
          margin-left: 8px;
          margin-right: 4px;
          cursor: pointer;
        }

        .play {
          background-position: -88px -163px;
        }
        .del {
          background-position: -51px 5px;
        }

        &:hover {
          color: #e2e2e2;

          .play {
            background-position: -88px -189px;
          }
          .del {
            background-position: -51px -15px;
          }
        }
      }
    }
  }

  .right {
    flex: 1;
    height: 39px;
    line-height: 39px;
    font-size: 14px;
    text-align: center;
    color: #fff;

    .close-window {
      margin-top: 6px;
      margin-right: 20px;
      float: right;
      width: 30px;
      height: 30px;
      cursor: pointer;
      background-position: -195px 9px;

      &:hover {
        background-position: -195px -21px;
      }
    }
  }
`

export const Content = styled.div`
  flex: 1;

  display: flex;

  background-color: #9f9f9f;

  .left {
    width: 557px;
    height: 260px;
  }

  .right {
    height: 260px;
    overflow: auto;
    padding: 25px 0;
  }
`

export const PlaylistMain = styled.div`
  display: flex;
  height: 260px;
  background: url(${require('@/assets/img/playlist_bg.png')});
  background-position: -1014px 0;
  background-repeat: repeat-y;

  .main-playlist {
    position: relative;
    width: 555px;
    padding-left: 2px;
    overflow: auto;

    .active {
      background-color: rgba(0, 0, 0, 0.4);
    }

    .null {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ccc;
    }
  }

  .main-line {
    width: 6px;
    height: 258px;
    background: #000;
    margin-top: 2px;
  }
`

export const LyricMain = styled.div`
  background: url(${require('@/assets/img/playlist_bg.png')});
  background-position: -1014px 0;
  background-repeat: repeat-y;

  p {
    color: #989898;
    word-wrap: break-word;
    text-align: center;
    line-height: 32px;
    height: auto !important;
    min-height: 32px;
    transition: color 0.7s linear;

    &.active {
      color: #fff;
    }
  }
`
