
import GlobalStyle from "../globalStyles";
import withProviders from "./providers";
import { MenuLayout } from "../widgets/menu";
import Home  from "../pages/home";

function App() {
  return (
    <>
      <GlobalStyle/>
      <MenuLayout/>
      <Home/>
    </>
  );
}

export default withProviders(App);
