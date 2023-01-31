import styled from 'styled-components'

export const SlideWrapper = styled.div`
  position: relative;
  width: 493px;

  .ant-slider {
    position: relative;
    width: 493px;
    height: 9px;
    margin-top: 25px;

    z-index: 100;

    .ant-slider-rail,
    .ant-slider-track,
    .ant-slider-step {
      height: 9px;
    }

    .ant-slider-rail {
      background: url(${require('@/assets/img/progress_bar.png')}) no-repeat 0 0;
    }

    .ant-slider-track {
      background: url(${require('@/assets/img/progress_bar.png')}) no-repeat 0 0;
      background-position: left -66px;
    }

    .ant-slider-handle {
      position: absolute;
      top: -3px;
      width: 20px;
      height: 22px;
      border: 0;
      background: url(${require('@/assets/img/sprite_icon.png')}) no-repeat;
      background-position: 0 -250px;

      &:hover {
        background-position: 0 -280px;
      }

      &::after,
      &::before {
        display: none;
      }
    }
  }

  .info {
    position: absolute;
    top: 8px;
    color: #fff;

    .link {
      color: #fff;
    }

    .author {
      max-width: 220px;
      margin-left: 15px;
      color: #9b9b9b;
    }
  }
`
