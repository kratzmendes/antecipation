import styled from "styled-components";

interface Props{
    display?: string;
    flexDirection?: string;
    alignItems?: string;
    justifyContent?: string;
    backgroundColor?: string;
    width?: string;
    maxWidth?: string;
    height?: string;
    margin?: string;
    padding?: string;
    boxShadow?: string;
    borderRadius?: string;
    borderStyle?: string;
    borderColor?: string;
    borderWidth?: string;
    textAlign?: string;
    fontSize?: string;
    fontWeight?: string;
    color?: string;
}


export const Container = styled.div<Props>`
    display: ${({ display }) => display ? display : 'flex'};
    flex-direction: ${({ flexDirection }) => flexDirection ? flexDirection : 'column'};
    align-items: ${({ alignItems }) => alignItems ? alignItems : 'center'};
    justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'center'};
    
    background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : '#FFFFFF'};
    
    width: ${({ width }) => width ? width : '608px'};
    max-width: ${({ maxWidth }) => maxWidth ? maxWidth : 'auto'};
    height: ${({ height }) => height ? height : '390px'};
    margin: ${({ margin }) => margin ? margin : 'auto'};
    padding: ${({ padding }) => padding ? padding : 'auto'};
    box-sizing: border-box;
    
    box-shadow: ${({ boxShadow }) => boxShadow ? boxShadow : '0px 0px 0px rgba(0, 0, 0, 0.25)'}; 
    
    border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : '4px'};
    border-style: ${({ borderStyle }) => borderStyle ? borderStyle : 'solid'};
    border-color: ${({ borderColor }) => borderColor ? borderColor : '#D1DCE3'};
    border-width: ${({ borderWidth }) => borderWidth ? borderWidth : '1px'};

    text-align:  ${({ textAlign }) => textAlign ? textAlign : 'center'};
    font-size: ${({ fontSize }) => fontSize ? fontSize : 'calc(10px + 2vmin)'};
    color: ${({ color }) => color ? color : '#656565'};
`
export const Flex = styled.div<Props>`
    display: ${({ display }) => display ? display : 'flex'};
    flex-direction: ${({ flexDirection }) => flexDirection ? flexDirection : 'column'};
    align-items: ${({ alignItems }) => alignItems ? alignItems : 'center'};
    justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'center'};
    margin: 0px;
    padding: 0px;
    @media(min-width: 768px){
        flex-direction: row;
  }
`
export const Input = styled.input`
    font-size: 14px;
    width: 100%;
    height: 37px;
    max-height: 37px;
    margin: 0px;
    padding: 10px 12px 10px 12px;
    border-radius: 4px;
    border-style: solid;
    border-color: #DDE6E9;
    border-width: 1px;
    &:focus {
        outline: none;
        border-color: #66AFE9;       
    }

`

export const Label = styled.label`
    margin-bottom: 8px;
    width: 100%;
    font: SourceSansPro;
    font-size: 14px;
    text-align: left;
`
export const HelperText = styled.label`
    margin-bottom: 8px;
    width: 100%;
    font: SourceSansPro;
    font-size: 11px;
    font-weight: bold;
    color: #CECECE;
    text-align: left;
`
export const TitleH5 = styled.h5`
    margin-bottom: 22px;
    margin-left: 40px;
    width: 118%;
    font: SourceSansPro;
    text-align: left;
`
export const ResultP = styled.p<Props>`
    margin: 22px 0px 5px 4px;

    font: SourceSansPro;
    font-size: 16px;
    font-style: italic;
    font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : 'bold'};
    color: #5D9CEC;

    text-align: left;
`

