import * as React from "react";
import { Container, DivSub } from "./styles/fees";


export function Fees({ children, ...restProps }) {
    return (
        <Container {...restProps} >
            {children}
        </Container>
    );
}

Fees.DivSub = function FormDivSub({ children, ...restProps }) {
    return (
        <DivSub {...restProps} >
            {children}
        </DivSub>
    );
}