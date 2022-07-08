import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 79px 46px 79px;
  max-width: 1377px;

  @media (max-width: 1000px) {
    margin: 60px 30px 30px 30px;
  }
  @media (min-width: 1500px) {
    margin: 60px auto 46px auto;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 164%;
  color: #000000;
  text-align: center;
  margin-top: 74px;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
export const PageLink = styled(ReactRouterLink)`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 164%;
  color: #000000;
  margin-top: 20px;
  width: fit-content;

  &:first-of-type {
    font-weight: 600;
    margin-top: 25px;
  }
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  ${PageLink} {
    font-weight: normal;
    margin-top: 26px;
  }
  div {
    margin-top: 9px;
    flex-direction: row;
    p {
      margin-top: 0;
      margin-left: 13px;
    }
    &:last-of-type {
      p {
        margin-top: -3px;
      }
    }
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  &:nth-child(4) {
    ${Div} {
      max-width: 251px;
      justify-content: space-between;
      margin-top: 20px;
      flex-direction: row;
    }
  }
`;
export const ImgSocialIcon = styled.img`
  margin-bottom: 0px;
`;
export const ImgIcon = styled.img``;
export const Logo = styled.img``;
