import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    width: 45%;
    height: 475%;
    margin-top: 45px;
    
    @media(max-width: 1300px){
        width: 75%;
        height: 75%;
        margin-top: 55px;
    }
    @media(max-width: 1000px){
        width: 84%;
        height: 84%;
        margin-top: 120px;
    }
    @media(max-width: 428px){
        width: 95%;
        height: 95%;
        margin-top: 150px;
    }
`