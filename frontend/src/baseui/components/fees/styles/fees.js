import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    font-family: 'Lato';
    max-width: 1440px;

    .headingContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 42px;
        max-width: 702px;
        margin: 0 auto;
        margin-top: 60px;
    }

    .heading {
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 30px;
        color: #000000;
    }

    .subHeading {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #000000;

        @media screen and (max-width: 768px) {
            font-size: 14px;
        }
    }
`;

export const DivSub = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    
    grid-gap: 20px;
    max-width: ;
    margin: auto;
    margin-top: 60px;

    .item{
        border: 1px solid #000000;
        overflow: auto;
    }

    .item1{
        grid-column: 1 / 3;
    }
    .item2{
        grid-column: 3 / 4;
    }
    .item3{
        grid-column: 1 / 4;
    }
    .item4{
        grid-column: 1 / 4;
    }

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(1, minmax(auto, 1fr));
        .item1{
            grid-column: 1;
        }
        .item2{
            grid-column: 1;
        }
        .item3{
            grid-column: 1;
        }
        .item4{
            grid-column: 1;
        }
    }
   
`