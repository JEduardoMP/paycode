// React
import { useContext } from "react";
// Router
import { BrowserRouter } from "react-router-dom";

// Components
import Loading from "./components/loading";
// Context
import LoadingContext from "./context/loading";
// Routes
import AppRoutes from "./Routes";

function App() {
  const { state } = useContext(LoadingContext);
  return (
    <BrowserRouter>
      {state.loading && <Loading />}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
