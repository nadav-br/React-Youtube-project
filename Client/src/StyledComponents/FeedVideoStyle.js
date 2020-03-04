import styled from "styled-components";

export const FeedVideoStyle = styled.div`
  width: 20vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom:1.5vh;

  & img {
    width: 20vw;
    margin-bottom:1.5vh;
  }
  & li {
    list-style: none;
    margin:0;
    padding: 0;
    font-style: none;
    margin-bottom:1.5vh;
  }
`;
export const ViewsMoment = styled.div`
  color: #606060;
  font-size:14px;
`;