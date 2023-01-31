import styled from 'styled-components'

export const BarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 53px;
  background-position: 0 0;
  background-repeat: repeat;

  > .content {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    width: 980px;
    transform: translate(-50%, -50%);
  }
`

export const Head = styled.div`
  margin: 6px 15px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 34px;
    height: 34px;
    background-color: red;
  }
`

export const Time = styled.div`
  color: #a1a1a1;
  margin: 22px 30px 0 17px;

  .total-time {
    color: #797979;
  }
`
