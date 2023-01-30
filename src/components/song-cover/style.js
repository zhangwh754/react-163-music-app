import styled from 'styled-components'

export const SongCoverWrapper = styled.a`
  width: ${props => props.width + 'px'};
  margin: 20px 0 20px 0;
  .cover-wrapper {
    width: 140px;
    height: 140px;
    position: relative;
    margin: 0 auto;

    img {
      width: 100%;
    }

    .cover-mask {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 0;

      .bottom-bar {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        left: 0;
        right: 0;
        bottom: 0;
        height: 27px;
        background-position: 0 -537px;
        color: #ccc;

        .erji {
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }

        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
        }
      }
    }
  }

  .cover-title {
    margin: 0 auto;
    width: 140px;
    font-size: 14px;
    color: #000;
    margin-top: 5px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical; /* 设置对齐模式 */
    -webkit-line-clamp: 3; /* 设置多行的行数 */
  }

  .cover-source {
    color: #666;
  }
`
