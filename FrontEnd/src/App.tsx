import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}
