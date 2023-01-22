import React from 'react'
import { Container, Flex, HelperText, Input, Label } from "../../styles/styles";

interface Props{
    className?: string;
    children?: React.ReactNode;

    label?: string;
    helperText?: string;
//////////////////////////////////////////////////    
    onChange?: any; //https://stackoverflow.com/questions/53943737/typescript-react-component-that-accepts-onchange-for-both-textarea-and-input
//////////////////////////////////////////////////    
    value?: string;
}

export const TextInput : React.FC <Props> = ({className, label, helperText, onChange, value, children}) => {

    return (
        <Container 
            alignItems='left'
            width='100%' 
            height='78px' 
            borderWidth='0px'
            margin= '0px 0px 26px 0px'
        >
            {label && <Label>{label}</Label>}
            <Input
                type='text'
                onChange={onChange}
                value={value}
                name={label}
                />
            {helperText && <HelperText>{helperText}</HelperText>}
        </Container>
    )
}

