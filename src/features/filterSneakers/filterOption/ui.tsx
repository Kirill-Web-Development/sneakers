import { HTMLAttributes } from "react";
import styled from "styled-components"


interface Props {
    id: string;
    name?: string;
}

export const FilterOption: React.FC<Props> = ({id, name}) => {
    const FilterOptionWrapper = styled.div`
        position: relative;
        border: 1px solid #dbbba9;
        border-radius: 0 1px 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const FilterRadioInput = styled.input<Props & HTMLAttributes<HTMLInputElement>>`
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        opacity: 0;
        visibility: 0;
        pointer-events: none;
        position: absolute;
        z-index: -1;
    `
    return (
        <FilterOptionWrapper>
            <FilterRadioInput id={id}/>
            <label htmlFor={id}>{name || id}</label>
        </FilterOptionWrapper>
    )
}