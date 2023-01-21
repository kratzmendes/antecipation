import React from 'react'
import { Container, Flex } from "./styles";

interface Props{
    className?: string;
    children?: React.ReactNode;

    fontSize?: any;
    color?: string;
    display?: string;
    flexDirection?: string;
    alignItems?: string;
    maxWidth?: string;
    margin?: string;
}

export const Layout: React.FC <Props> = ({className, children}) => {

    return (
        <Container className={className}>
            <Flex>
                Hello Layout Component!
                {children}
            </Flex>
        </Container>
    )
}

