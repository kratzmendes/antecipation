import React from 'react'
import { Container, Flex } from "../../styles/styles";

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
        >
            <Flex>
                Hello Results Column component!
                {children}
            </Flex>
        </Container>
    )
}

