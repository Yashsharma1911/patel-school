import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1180px;
    width: 85%;
    margin: 68px auto;
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
`
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1180px;
    border: 1px solid #DDE7F8;
    border-radius: 40px 0px 40px 40px;
    padding: 55px 71px;
`
export const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const SectionDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-right: 20px;
`
export const SectionUpload = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`
export const Label = styled.label`
    font-size: 15px;
`
export const Border = styled.div`
    width: 100%;
    background: ${({ color }) => color};
    border-radius: 2px;
    height: 4px;
`
export const Button = styled.button`
    width: 100%;
    height: 45px;
    color: white;
    border: 0;
    background: #000000;
    border-radius: 14px 14px 0px 14px;
    font-size: 15px;
    transition: all 0.25s;
    margin-top: 49px;

    &:hover{
        opacity: 0.8;
    }
`
export const Input = styled.input`
    width: 100%;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #DDE7F8;
    border-radius: 14px 14px 0px 14px;
    padding: 0px 18px;
    font-size: 15px;
    margin-top: 13px;
`
export const FormBase = styled.form`
    dislplay: flex;
    flex-direction: column;
    width: 100%;

    ${Div}{
        flex-direction: row;
        justify-content: space-between;
        margin-top: 31px;
        &:first-of-type{
            margin-top: 0px;
        }
    }
`
export const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 47.5%;
`
export const Select = styled.select`
    width: 100%;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #DDE7F8;
    border-radius: 14px 14px 0px 14px;
    padding: 0px 18px;
    font-size: 15px;
    margin-top: 13px;
`
export const Option = styled.option``