import React from "react"
import styled from "styled-components"
import {defaultCardProps} from '../../fakeDB'


export const Layout : React.FC<Partial<typeof defaultCardProps>> = ({
    price = defaultCardProps.price,
    model = defaultCardProps.model,
    url = defaultCardProps.url
}) => {
    const Card = styled.li`
        display: block;
    `
    const Image = styled.img`
        display: block;
        width: 100%;
        max-height: 293px;
        object-fit: cover;
        margin-bottom: 10px;
    `
    const Title = styled.h4`
        font-weight: 600;
        font-size: 16px;
        margin-bottom: 3px;
    `
    const Price = styled.div`
        font-weight: 400;
        font-size: 20px;
    `
    return (
        <Card>
            <Image src={url} alt={model}/>
            <Title>{model}</Title>
            <Price>{`${price}$`}</Price>
        </Card>
    )
}