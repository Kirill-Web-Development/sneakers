import React from "react"
import styled from "styled-components"
import Container from "../../shared/ui/Container/Container";
import Button from "../../shared/ui/Button/Button";

const Hero = styled.section`
    padding-top: 164px;
    padding-bottom: 93px;
    background-color: ${({theme}) => theme.colors.secondary};
    color: ${({theme}) => theme.colors.textLight};
`
const Offer = styled.div`
    position: relative;
    z-index: 10;
    max-width: 580px;
`
const Title = styled.h1`
    font-weight: 400;
    font-size: 36px;
    line-height: 140%;
    margin-bottom: 20px;
`
const Paragrath = styled.p`
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    margin-bottom: 40px;
    max-width: 330px;
`

const ButtonWrapper = styled.div`
    margin-left: 14.5px;
`

const BgBigLogo = styled.div`
    font-weight: 700;
    font-size: 200px;
    color: rgba(255, 255, 255, 0.12);
    position: absolute;
    top: 35px;
    left: 32px;
    z-index: -1;
`


export const HeroLayout : React.FC = () => {
    return (
        <Hero>
            <Container>
                <Offer>
                    <Title>
                        Any products from famous brands with worldwide delivery
                    </Title>
                    <Paragrath>
                        We sell smartphones, laptops, clothes, shoes and many other products at low prices
                    </Paragrath>
                    <ButtonWrapper>
                        <Button size={'xl'} color={'primary'}>Go to shopping</Button>
                    </ButtonWrapper>
                    <BgBigLogo>Goods4you</BgBigLogo>
                </Offer>
            </Container>
        </Hero>
    )
}