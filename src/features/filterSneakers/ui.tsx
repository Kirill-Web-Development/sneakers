import styled from "styled-components"
import { FilterOption } from "./filterOption"

export const Layout: React.FC = () => {
    const Wrapper = styled.div`
        width: 280px;
        max-height: 535px;
        padding: 9px 20px 20px 20px;
        background: #fff4ee;
        border: 1px solid #fff4ee;
        border-radius: 4px;
        font-weight: 600;
    `

    const Title = styled.h3`
        font-size: 24px;
        max-width: 240px;
        margin-bottom: 25px;
    `

    const FilterBy = styled.div`
        font-size: 16px;
        margin-bottom: 3px;
    `


    const FiltersGrid = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 57px;
        margin-bottom: 32px;
    `

    return (
        <Wrapper>
            <Title>Selection by parameters</Title>
            <form>
                <FilterBy>Category</FilterBy>
                <FiltersGrid>
                    {Array.from({ length: 8 }, (_, index) => <FilterOption id={`sneakers-${index}`} name='sneakers'/>)}
                </FiltersGrid>
            </form>
        </Wrapper>
    )
}