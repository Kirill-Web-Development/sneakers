import { HeroLayout } from "../../widgets/hero";
import { Catalog } from "../../widgets";
const Home: React.FC = () => {
    return (
        <>
        <HeroLayout/>
        <Catalog.Layout withFilters/>
        </>
    )
}

export default Home;
