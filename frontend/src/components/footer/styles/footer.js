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

export const Text = styled(ReactRouterLink)`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 164%;
  color: #000000;
  text-align: center;
  margin-top: ${({ margintop }) => margintop ? margintop : "0"}px;

  &:hover {
    text-decoration: underline;
  }
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
export const ImgIcon = styled.img`
  margin-right: 15px;
`;
export const Logo = styled.img`
  width: 90%;
  height: auto;
  transform: translateY(20px);
  z-index: -1;
`;
export const Anchor = styled.a`
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 164%;
color: #000000;
margin-top: 20px;
width: fit-content;

&:hover {
  text-decoration: underline;
}

`;
