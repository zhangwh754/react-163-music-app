import styled from 'styled-components'

export const PlaylistItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  height: 28px;
  cursor: pointer;
  justify-content: space-between;
  margin-top: 2px;
  color: #ccc;

  &:hover,
  &.active {
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
  }

  .song-name {
    width: 250px;
    height: 28px;
    text-align: left;
    line-height: 28px;
  }

  .control-and-singer {
    margin-left: -18px;
    display: flex;

    .anticon-delete,
    .anticon-download,
    .anticon-like {
      opacity: 0;
      color: #ccc;
      font-size: 14px;
      margin: 2px 6px 0;
    }

    .anticon-delete:hover,
    .anticon-download:hover,
    .anticon-like:hover,
    span:hover {
      color: #fff;
    }

    span {
      margin-left: 4px;
    }
  }

  &:hover .anticon-delete,
  &:hover .anticon-download,
  &:hover .anticon-like {
    opacity: 1;
  }

  .duration {
    margin-right: 18px;
  }
`
