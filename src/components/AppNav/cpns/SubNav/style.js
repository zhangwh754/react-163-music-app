import styled from 'styled-components'

export const NavWrapper = styled.nav`
  background-color: #c20c0c;
  > .content {
    width: 1100px;
    margin: -5px auto 0;
    display: flex;
    align-items: center;
    height: 30px;

    ul {
      margin-left: 176px;
      display: flex;
      align-items: center;

      li {
        margin: 0 20px;

        .nav-item {
          display: inline-block;
          padding: 0 15px;
          height: 20px;
          line-height: 20px;
          border-radius: 20px;
          color: #fff;
          cursor: pointer;

          &:hover,
          &.active {
            background-color: #9b0909;
            text-decoration: none;
          }
        }
      }
    }
  }
`
