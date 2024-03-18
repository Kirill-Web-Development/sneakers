import { FC, HTMLAttributes} from "react";
import styled from "styled-components";

const StyledMenuLink = styled.a`
    font-weight: 600;
    font-size: 14px;
    color: ${({theme}) => theme.colors.textLight};
`

export const Link : FC<HTMLAttributes<HTMLLinkElement>> = ({children}) => {
    return <StyledMenuLink href="">{children}</StyledMenuLink>
}