import styled, {css} from "styled-components"
import { ColorsNames} from "../../theme/theme"
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
    size? : 's' | 'm' | 'l' | 'full' | 'xl';
    color?: ColorsNames;
}

const mediumStyles = css`
    width: 171px;
`

const smallStyles = css`
    width: 140px;
`


const largeStyles = css`
    width: 148px;
`

const extralargeStyles = css`
    width: 201px;
`

const fullStyles = css`
    width: 100%;
`

const Button = styled.button<Props>`
    color : ${({theme}) => theme.colors.textLight};
    border-radius: 4px;
    padding: 22px 47px;
    ${({ size }) => size === 'm' ? mediumStyles : 
                    size === 'l' ? largeStyles :
                    size === 'xl' ? extralargeStyles :
                    size === 'full' ? fullStyles :  smallStyles}
    ${({color}) => color === 'secondary' ? css`
                        background-color: ${({theme}) =>  theme.colors.secondary};
                    ` : color === 'primary' ? css`
                        background-color: ${({theme}) =>  theme.colors.accent};
                    ` : css`
                        background-color: transparent;
                        border-color: ${({theme}) =>  theme.colors.secondary};
                        color: ${({theme}) =>  theme.colors.secondary};
                    `}
`



export default Button