import styled from 'styled-components'

export const RightWrapper = styled.div`
  > .content {
    display: flex;
    align-items: center;
    color: #ccc;
    font-size: 12px;

    .search-wrapper {
      position: relative;

      /* 搜索框 */
      .search {
        width: 221px;
        height: 32px;
        border-radius: 16px;

        input {
          font-size: 14px;
          font-family: '微软雅黑';
          &::placeholder {
            font-size: 12px;
          }
        }
      }

      /* 下拉框 */
      .down-slider {
        position: absolute;
        top: 36px;
        left: 0;
        right: 0;
        width: 237px;
        z-index: 999;
        /* height: 144px; */
        border: 1px solid #bebebe;
        border-radius: 4px;
        background: #fff;
        box-shadow: 0 4px 7px #555;
        text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);

        .search-header {
          height: 35px;
          .discover {
            display: inline-block;
            padding-top: 10px;
            padding-left: 10px;
          }
        }

        .content {
          display: flex;
          border: 1px solid rgb(183, 183, 187);

          .zuo {
            /* float: left; */
            /* height: 100%; */
            width: 65px;
            /* border: 1px solid rgb(183, 183, 187); */
            padding-top: 10px;
            border-bottom: none;

            .song {
              color: #ccc;
              margin-left: 28px;
            }
          }

          .main {
            display: inline-block;
            font-size: 13px;
            line-height: 28px;

            .item {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              width: 168px;
              cursor: pointer;
              height: 35px;
              line-height: 35px;
              color: #000;
              text-indent: 8px;

              &:hover {
                background-color: #ecf0f1;
                border-radius: 5%;
                color: #2ecc71;
              }

              &.active {
                background-color: #ecf0f1;
                color: #2ecc71;
              }
            }
          }
          span.blue {
            color: #7ab3dd;
          }
        }
      }
    }

    .center {
      width: 75px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      border: 1px solid #666;
      border-radius: 16px;
      margin: 0 13px;
      background-color: transparent;

      &:hover {
        cursor: pointer;
        border-color: #fff;
        color: #fff;
      }
    }

    .login {
      font-size: 15px;
      color: #ccc;

      &:hover {
        color: #fff;
        cursor: pointer;
        text-decoration: underline;
      }
    }

    .profile-img {
      width: 35px;
      height: auto;
      border-radius: 50%;
    }

    .dropdown-item {
      width: 256px;
      color: red;
    }
  }
`
