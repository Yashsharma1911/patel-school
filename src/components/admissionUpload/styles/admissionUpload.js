import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1180px;
    width: 85%;
    margin: 68px auto;
    @media(max-width: 600px){
        margin-top: 60px;
        margin-right: 30px;
        margin-left: 30px;
    }
`
export const Text = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 116%;
    color: ${({ color }) => color};
`
export const Section = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 55px;
    height: 38px;

    ${Text}{
        margin-bottom: 11px;
    }
    @media (max-width: 600px){
        margin-bottom: 37px;
    }

`
export const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1180px;
    border: 1px solid #DDE7F8;
    border-radius: 40px 0px 40px 40px;
    padding: 55px 71px;

    @media(max-width: 728px){
        padding: 55px 45px;
    }

    @media(max-width: 658px){
        padding: 55px 25px;
    }

    @media(max-width: 600px){
        border: 0;
        padding: 0;
    }
`
export const Div = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: ${({ Wrap }) => Wrap};
    flex-direction: ${({ flexDirection }) => flexDirection};
    max-width: ${({ maxWidth }) => maxWidth}px;
    align-items: ${({ alignItems }) => alignItems};
    margin-top: ${({ marginTop }) => marginTop};
    justify-content: ${({ justifyContent }) => justifyContent};

    @media(max-width: 1312px){
        // margin for div in mobile view
        margin-top: ${({ marginTop }) => marginTop};
        justify-content: ${({ justifyContentOnSmall }) => justifyContentOnSmall};
    }
    
`
export const SectionDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-right: 20px;

    @media (max-width: 600px){
        width: 100%;
        margin: 0;
    }
`
export const SectionUpload = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media (max-width: 600px){
        display: none;
    }
`
export const Border = styled.div`
    width: 100%;
    background: ${({ color }) => color};
    border-radius: 2px;
    height: 4px;
`

export const FileInput = styled.input`
    display: none;
`
export const FileText = styled.p`
    font-weight: 400;
    font-size: 18px;
`
export const LabelContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 14px 50px 14px 29px;
    margin-top: 15px;

    max-width: 325.71px;
    width: 325.71px;
    height: 58px;

    border: 1px solid #DDE7F8;
    border-radius: 17px 17px 0px 17px;

    ${FileText}{
        max-width: 250px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    @media(max-width: 600px){
        width: 100%;
        max-width: 100%;
    }
    &:active{
        background: #DDE7F8;
    }
`
export const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 135px;
    min-width: 135px;
    height: 58px;
    color: #2458B8;
    font-weight: 400;
    font-size: 18px;
    line-height: 164%;
    background: #DDE7F8;
    border: 2px solid #2458B8;
    border-radius: 17px 17px 0px 17px;
    transition: all 0.2s ease-in-out;
    margin-top: 15px;

    &:hover{
        background: #2458B8;
        color: #DDE7F8;
    }

    @media(max-width: 600px){
        display: none;
    }

`
export const FileIcon = styled.img`
    margin-right: 20px;
`
export const SubContainer = styled.div``
export const Form = styled.form``