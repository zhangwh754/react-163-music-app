import styled from 'styled-components'

export const BannerWrapper = styled.div`
  position: relative;
  .bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: background 0.2s ease;
    background-image: url(${props => props.imageUrl}?imageView&blur=40x20);
    background-size: 6000px;
    background-position: center center;
  }

  > .content {
    position: relative;
    width: 982px;
    height: 285px;
    margin: 0 auto;
    display: flex;

    .banner {
      position: relative;
      width: 730px;
      background-color: red;

      img {
        display: block;
        width: 730px;
        height: 100%;
      }
    }

    .indicator-box {
      position: absolute;
      bottom: 10px;
      height: 10px;
      width: 730px;

      .indicator {
        position: absolute;
        height: 10px;
        display: flex;
        column-gap: 10px;
        align-items: center;
        left: 50%;
        transform: translateX(-50%);

        .dot {
          width: 10px;
          height: 10px;
          background-color: rgb(252, 219, 210);
          border-radius: 50%;

          &.active {
            background-color: red;
          }
        }
      }
    }

    .download {
      flex: 1;
      background: url(${require('@/assets/img/download.png')}) no-repeat 0 0;

      a {
        display: block;
        height: 56px;
        margin: 186px 0 0 19px;
        text-indent: -9999px;
        background: url(${require('@/assets/img/download.png')}) no-repeat 0 0;
        background-position: 0 9999px;

        &:hover {
          background-position: 0 -290px;
          text-decoration: none;
        }
      }

      p {
        margin: 10px auto;
        text-align: center;
        color: #8d8d8d;
      }
    }

    .btns {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      color: #fff;
      padding: 10px 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
    .left {
      left: -100px;
    }

    .right {
      right: -100px;
    }

    /* 轮播图过渡动画 */
    .switch-enter {
      opacity: 0;
    }

    .switch-enter-active {
      opacity: 1;
      transition: all 0.2s ease;
    }

    .switch-exit {
      opacity: 1;
      transition: all 0.2s ease;
    }

    .switch-exit-active {
      opacity: 0;
    }
  }
`
