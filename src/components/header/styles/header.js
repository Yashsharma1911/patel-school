import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 51px 79px 154px 79px;
    height: 70vh;
`;
export const Frame = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 42px ;
`;
export const Logo = styled.h1`
    font-size: 25px;
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;

    margin-top: 2px;
    margin-left: 1px;
    margin-bottom: 10px;
`;
export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 471px;
    height: 100%;
`;
export const Text = styled.p`
    font-size: 14px;
    color: #000000;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    line-height: 19px;
`;
export const Profile = styled.div`
    width: 98px;
    height: 100%;

    background: #000000;
    border-radius: 21px 21px 0px 21px;

    p{
        margin: 11px 30px 12px 30px;
        color: #FFFFFF;
    }
`;
