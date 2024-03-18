import styled from "styled-components"
import Container from "../../shared/ui/Container/Container";
import { SneakerCard } from "../../entities";
import { fakeData} from "../../fakeDB";
import { LoadSneakers } from "../../features";
import Flex from "../../shared/ui/Flex/Flex";
import { FilterSneakers } from "../../features";

interface Props {
    withFilters?: true;
}

export const Layout: React.FC<Props>= ({withFilters = false}) => {
    const Section = styled.section`
        padding-top: 58px;
        padding-bottom: 53px;
    `

    const Grid = styled.ul`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-auto-rows: 358px;
        gap: 11px 20px;
    `

    return (
        <Section>
            <Container>
                <Flex columngap={withFilters ? 20 : undefined}>
                    {withFilters && <FilterSneakers.Layout/>}
                    <Flex direction="column" align="center" rowgap={31}>
                        <Grid>
                            {fakeData.map(({price, model, url, id}) => <SneakerCard.Layout key={id} price={price} url={url} model={model}/>)}
                        </Grid>
                        <LoadSneakers.LoadButton>Show more</LoadSneakers.LoadButton>
                    </Flex>
                </Flex>
            </Container>
        </Section>
    )
}