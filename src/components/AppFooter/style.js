import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  > .content {
    background-color: #f2f2f2;
    padding: 33px 0 53px;

    .enter {
      width: 980px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .unit {
        a {
          display: block;
          width: 45px;
          height: 45px;
          margin: 0 auto;
          text-indent: -9999px;
          background: url(${require('@/assets/img/footer.png')}) no-repeat;
          background-size: 220px 220px;
        }

        span {
          display: block;
          margin-top: 10px;
          text-align: center;
        }

        &:nth-child(1) {
          a {
            background-position: -170px -5px;
            &:hover {
              background-position: -5px -115px;
            }
          }
        }
        &:nth-child(2) {
          a {
            background-position: -5px -170px;
            &:hover {
              background-position: -60px -170px;
            }
          }
        }
        &:nth-child(3) {
          a {
            background-position: -5px -60px;
            &:hover {
              background-position: -60px -5px;
            }
          }
        }
        &:nth-child(4) {
          a {
            background-position: -60px -60px;
            &:hover {
              background-position: -115px -5px;
            }
          }
        }
        &:nth-child(5) {
          a {
            background-position: -115px -115px;
            &:hover {
              background-position: -5px -5px;
            }
          }
        }
        &:nth-child(6) {
          a {
            background-position: -170px -115px;
            &:hover {
              background-position: -60px -115px;
            }
          }
        }
        &:nth-child(7) {
          a {
            background-position: -170px -60px;
            &:hover {
              background-position: -115px -60px;
            }
          }
        }
      }
    }

    .copy {
      width: 980px;
      margin: 60px auto 0;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        display: inline-block;
        padding: 0 15px;
        border-left: 1px solid #ccc;
        &:nth-child(1) {
          border-left: none;
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`
