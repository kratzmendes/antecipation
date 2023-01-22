import React from 'react'
import { Container, Flex, ResultP } from "../../styles/styles";

interface Props{
    className?: string;
    children?: React.ReactNode;
}

export const ResultsSimulationColumn: React.FC <Props> = ({className, children}) => {

    return (
        <Container 
            className={className} 
            width={'231px'} 
            borderWidth={'0px'} 
            backgroundColor={'rgba(209, 220, 227, 0.18)'}
            padding={'83px 0px 83px 35px'}
            alignItems={'flex-start'}
        >
            <Container
                borderWidth={'0px 0px 1px 0px'}
                borderColor={'#5D9CEC'}
                borderRadius={'0px'}
                backgroundColor={'none'}
                width={'80%'}
                alignItems={'left'}
                margin={'0px 0px 0px 0px'}
            >
                <ResultP>VOCÊ RECEBERÁ:</ResultP>
            </Container>
            <Flex>
                <ResultP fontWeight='regular'>Amanhã:</ResultP>
                <ResultP>R$ 0,00</ResultP>
            </Flex>
            <Flex>
                <ResultP fontWeight='regular'>Em 15 dias:</ResultP>
                <ResultP>R$ 0,00</ResultP>
            </Flex>
            <Flex>
                <ResultP fontWeight='regular'>Em 30 dias:</ResultP>
                <ResultP>R$ 0,00</ResultP>
            </Flex>
            <Flex>
                <ResultP fontWeight='regular'>Em 90 dias:</ResultP>
                <ResultP>R$ 0,00</ResultP>
            </Flex>

            {children}
            
        </Container>
    )
}

