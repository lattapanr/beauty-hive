import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.css";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import EyeProducts from "./pages/EyeProducts";
import FaceProducts from "./pages/FaceProducts";
import LipProducts from "./pages/LipProducts";

// Components
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/face-products/:id" element={<FaceProducts />} />
      <Route path="/eye-products/:id" element={<EyeProducts />} />
      <Route path="/lip-products/;id" element={<LipProducts />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
