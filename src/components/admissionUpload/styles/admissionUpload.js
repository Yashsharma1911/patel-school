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
export const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1180px;
    height: 1629px;
    border: 1px solid #DDE7F8;
    border-radius: 40px 0px 40px 40px;
`
export const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
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
export const Border = styled.div`
    width: 100%;
    background: ${({ color }) => color};
    border-radius: 2px;
    height: 4px;
`

