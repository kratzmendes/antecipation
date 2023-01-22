import React from 'react'
import { Container, Flex } from "../../styles/styles";

interface Props{
    className?: string;
    children?: React.ReactNode;

///////////////////////////////////////////////////    
//APAGAR O QUE NAO FOR UTILIZADO
    fontSize?: any;
    color?: string;
    display?: string;
    flexDirection?: string;
    alignItems?: string;
    maxWidth?: string;
    margin?: string;
///////////////////////////////////////////////////

}

export const SimulationContainer: React.FC <Props> = ({className, children}) => {

    return (
        <Container className={className}>
            <Flex>
                {children}
            </Flex>
        </Container>
    )
}

