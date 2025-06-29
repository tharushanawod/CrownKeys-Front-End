import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./components/Loader";
import GeneralRoutes from "./routing/GeneralRoutes";

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <GeneralRoutes />
      </Suspense>
    </Router>
  );
}

export default App;
