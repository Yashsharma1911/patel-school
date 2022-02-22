import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 41px 79px 0px 79px;

    @media(max-width: 1000px){
        margin: 39px 30px 0px 30px;
    }
`;

export const Div = styled.div``
export const Frame = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 42px ;
`;

export const Text = styled.p`
    display: block;
    font-size: 14px;
    color: white;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    line-height: 19px;
`;

export const Logo = styled(ReactRouterLink)`
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    color: black;
    cursor: pointer;
    margin-top: 2px;
    margin-left: 1px;
    margin-bottom: 10px;

    @media(max-width: 298px){
        font-size: 22px;
    }
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    font-size: 14px;
    color: #000000;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    line-height: 19px;
    text-decoration: none;
    transition: opacity 0.2s;
`;
export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 471px;
    height: 100%;

    ${ButtonLink}:hover {
        opacity: 0.6;
    }

    @media(max-width: 1000px){
        display: none;
    }

`;
export const Profile = styled(ReactRouterLink)`
    width: 98px;
    height: 100%;
    background: #000000;
    border-radius: 21px 21px 0px 21px;
    cursor: pointer;
    transition: opacity 0.3s;

    p{
        margin: 11px 30px 12px 30px;
        color: #FFFFFF;
    }
    &:hover{
        opacity: 0.7;
    }
    @media(max-width: 1000px){
        display: none;
    }
`;
export const MenuLogo = styled.img`
    display: none;
    cursor: pointer;
    @media(max-width: 1000px){
        display: block;
    }
`;

export const MenuButtonLink = styled(ReactRouterLink)`
    display: block;
    font-size: 14px;
    color: #000000;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    line-height: 19px;
    text-decoration: none;
    background-color: ${({ color }) => color};
    border: 1px solid;
    ${({ color }) => color && `border-color: ${color}`};
    padding: 15px 149px 13px 34px;
`

export const BurgerMenu = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    padding: 42px 30px;
    top: 0;
    bottom: 0;
    right: 0;
    transform: ${({ show }) => show ? 'translateX(0)' : 'translateX(100%)'};
    background-color: white;
    max-width: 313px;
    width: 88vw;
    box-shadow: ${({ show }) => show ? '0px 4px 49px rgba(0, 0, 0, 0.21)' : 'none'};
    opacity: ${({ show }) => show ? '1' : '0'};
    transition: all 0.4s ease-out;
    z-index: 1000;
    ${Div}{
        margin-top: 113px;
    }
    ${MenuButtonLink}{
        margin-bottom: 25px;
        border-radius: 17px 17px 0px 17px;
        max-width: 253px;
        width: 100%;
        height: 52px;

        &:last-of-type{
            margin-top: 64px;
        }
    }
`;

export const CrossButton = styled.img`
    position: absolute;
    top: 42px;
    right: 30px;
    width: 39px;
    height: 39px;
`
export const MenuBgImg = styled.img`
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;

    @media(max-width: 1000px){
        display: block;
    }
`
