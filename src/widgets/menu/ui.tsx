import Flex from "../../shared/ui/Flex/Flex"
import styled from "styled-components"
import Container from "../../shared/ui/Container/Container"
import { MenuType, Props } from "./types"
import { Link } from "./link"
import Logo from "../../shared/ui/Logo/Logo"


const StyledInnerMenu = styled.div`
    padding-top: 15.5px;
    padding-bottom: 9px;
    border-bottom:  1px solid rgba(255, 255, 255, 0.5);
    padding-right: 1.5px;
`

const StyledMenu = styled.header<Props>`
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${({colored, theme}) => colored ? theme.coloredMenu : 'none'};
    z-index: 100;
`

export const MenuLayout : MenuType = ({colored}) => {
   return (
    <StyledMenu colored={colored}>
        <Container>
            <StyledInnerMenu>
                    <Flex justify="space-between" align="center">
                        <Logo className="logo">
                            Goods4you
                        </Logo>
                        <nav>
                            <Flex columngap={36}>
                                <MenuLayout.Link>Catalog</MenuLayout.Link>
                                <MenuLayout.Link>About us</MenuLayout.Link>
                                <MenuLayout.Link>Product selection</MenuLayout.Link>
                                <MenuLayout.Link>Our team</MenuLayout.Link>
                                <MenuLayout.Link>FAQ</MenuLayout.Link>
                                <MenuLayout.Link>For staff</MenuLayout.Link>
                            </Flex>
                        </nav>
                    </Flex>
                </StyledInnerMenu>
        </Container>
    </StyledMenu>
   )
}

MenuLayout.Link = Link