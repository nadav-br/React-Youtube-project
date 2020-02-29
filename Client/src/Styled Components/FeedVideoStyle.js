import styled from "styled-components";

export const FeedVideoStyle = styled.ul`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-inline-start: 0px;

  & img {
    width: 250px;
    height: 150px;
  }
  & li {
    list-style: none;
    margin-left: 5px;
    padding: 0;
    font-style: none;
  }
`;

export const LinkVideoStyle = {
  margin: "2px 2px",
  textDecoration: "none"
};
