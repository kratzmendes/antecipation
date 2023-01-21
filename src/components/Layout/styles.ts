import styled from "styled-components";

interface Props{
    display?: string;
    flexDirection?: string;
    alignItems?: string;
    justifyContent?: string;
    backgroundColor?: string;
    width?: string;
    height?: string;
    boxShadow?: string;
    borderRadius?: string;
}


export const Container = styled.div<Props>`
  display: ${({ display }) => display ? display : 'flex'};
  flex-direction: ${({ flexDirection }) => flexDirection ? flexDirection : 'column'};
  align-items: ${({ alignItems }) => alignItems ? alignItems : 'center'};
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'center'};
  background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : '#000'};
  width: ${({ width }) => width ? width : '608px'};
  height: ${({ height }) => height ? height : '390px'};
  box-shadow: ${({ boxShadow }) => boxShadow ? boxShadow : '5px 5px 5px rgba(0, 0, 0, 0.25)'}; 
  border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : '18px'};

`
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  @media(min-width: 768px){
    flex-direction: row;
  }
`

