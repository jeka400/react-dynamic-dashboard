import { Suspense, useEffect, useState } from "react";
import MainPage from "./MainPage";
import { FadeLoader } from "react-spinners";
import DynamicComponent from "./DynamicComponent";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {
  LazyFirstComponent,
  LazySecondComponent,
  MainLayout
} from "./LazyComponents";

function App() {
  const [LoadedComponent, setLoadedComponent] = useState(() => () => null);
  const [selectedComponent, setSelectedComponent] = useState("");

  useEffect(() => {
    import("./DynamicComponent").then((module) => {
      setLoadedComponent(() => module.default);
    });
  }, []);

  return (
    <div className="container mt-4">
      <LoadedComponent />

      <div className="form-group">
        <label htmlFor="componentSelect">Load Component:</label>
        <select
          id="componentSelect"
          className="form-control"
          value={ selectedComponent }
          onChange={ (e) => setSelectedComponent(e.target.value) }
        >
          <option value="">None</option>
          <option value="first">First Component</option>
          <option value="second">Second Component</option>
        </select>
      </div>
      <hr />

      <Suspense fallback={<FadeLoader color="lightblue" size={150} />}>
        <MainPage />
        <DynamicComponent name={ selectedComponent } />
      </Suspense>
      <hr />

      <Router>
        <Routes>
          <Route path="/" element={ <MainLayout /> }>
            <Route path="/first" element={ <LazyFirstComponent /> } />
            <Route path="/second" element={ <LazySecondComponent /> } />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
