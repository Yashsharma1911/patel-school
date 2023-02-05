import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1260px;
  width: 85%;
  margin: 60px auto;
  justify-content: space-between;

  @media (max-width: 600px) {
    margin-top: 60px;
    margin-right: 30px;
    margin-left: 30px;
  }

  @media (max-width: 1000px) {
    margin-top: 90px;
    justify-content: center;
  }
`;

export const Text = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 25px;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const HeadlineText = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 55px;
  line-height: 116%;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 29px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 121px;
  background: #ffffff;
  border: 1px solid #dde7f8;
  border-radius: 14px 14px 0px 14px;
  padding: 12px 18px;
  font-size: 15px;
  margin-top: 13px;
  resize: none;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;

  &:hover {
    border: 1px solid black;
  }
  &:focus {
    border: 2px solid #2458b8;
    outline: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  background: #ffffff;
  border: 1px solid #dde7f8;
  border-radius: 14px 14px 0px 14px;
  padding: 0px 18px;
  font-size: 15px;
  margin-top: 13px;

  &:hover {
    border: 1px solid black;
  }
  &:focus {
    border: 2px solid #2458b8;
    outline: none;
  }
`;

export const Div = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  display: flex;
  flex-direction: ${({ direction }) => direction};

  @media (max-width: 1000px) {
    flex-direction: ${({ wrapOnSmall }) => (wrapOnSmall ? "column" : "")};
  }

  @media (max-width: 768px) {
    flex-direction: ${({ wrapOnTooSmall }) => (wrapOnTooSmall ? "column" : "")};
    width: 100%;
    margin-top: ${({ marginTopOnTooSmall }) => (marginTopOnTooSmall ? marginTopOnTooSmall : "")};
  }
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 551px;
    margin-top: 40px;
`;
export const Right = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
`;

export const Label = styled.label`
  font-size: 15px;
`;

export const LabelRequired = styled.label`
  font-size: 15px;
  &:after {
    content: " *";
    color: red;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  color: white;
  border: 0;
  background: #000000;
  border-radius: 14px 14px 0px 14px;
  font-size: 15px;
  transition: all 0.25s;
  margin-top: 20px;
  opacity: ${({ disabled }) => (disabled ? "0.8" : "1")};
  &:hover {
    opacity: 0.8;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  width: 100%;
  max-width: 551px;
`;

export const MapFrame = styled.iframe`
 max-width: 667px;
    width: 88%;
    height: 630px;
    @media (max-width: 1000px) {
        width: 100%;
        margin-top: 35px;
        height: 400px;
    }
`;
