import React from 'react'
import { Container, Flex, TitleH5 } from "../../styles/styles";
import { TextInput } from '../TextInput';

interface Props{
    className?: string;
    children?: React.ReactNode;
}

export const FormSimulationColumn: React.FC <Props> = ({className, children}) => {

    return (
        <Container 
            className={className} 
            width={'377px'} 
            maxWidth={'377px'} 
            padding={'59px 95px 44px 56px'}
        >
                <TitleH5>Simule sua Antecipação</TitleH5>
                <TextInput label={'Informe o valor da venda *'} helperText={'Ex: 15000'}/>
                <TextInput label={'Em quantas parcelas *'} helperText={'Maximo de 12 parcelas'}/>
                <TextInput label={'Informe o percentual de MDR *'} helperText={'Ex: 4'}/>
                {children}
            
        </Container>
    )
}

