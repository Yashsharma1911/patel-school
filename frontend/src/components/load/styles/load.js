import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
`
export const Img = styled.img`
    width: 350px;
    height: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 428px) {
        width: 270px;
        height: 270px;
    }
`