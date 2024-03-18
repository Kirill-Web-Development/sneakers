import styled from 'styled-components';
import { HTMLAttributes} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    justify?: string;
    align?: string;
    wrap?: 'wrap';
    rowgap?: number;
    columngap?: number;
    direction?: 'column';
}

const Flex = styled.div<Props>`
    display: flex;
    justify-content: ${({justify}) => justify || 'flex-start'};
    align-items: ${({align}) => align || 'stretch'};
    flex-wrap: ${({wrap}) => wrap || 'nowrap'};
    flex-direction: ${({direction}) => direction || 'row'};
    row-gap: ${({rowgap}) => `${rowgap}px` || 'normal'};
    column-gap:${({columngap}) => `${columngap}px` || 'normal'};
`

export default Flex