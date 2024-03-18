import styled from "styled-components";
import {PropsWithChildren, HTMLAttributes, FC} from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
    width?: number
}
const StyledComponent = styled.div<Props>`
    max-width: ${({width}) => width ? `${width}px` : '1180px'};
    margin: 0 auto;
`


const Container: FC<PropsWithChildren<Props>> = ({children, ...rest}) => {
    return <StyledComponent {...rest}>{children}</StyledComponent>
}

export default Container