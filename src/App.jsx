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
import Error from "./pages/ErrorPage";

// Components
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="face" element={<FaceProducts />} />
      <Route path="eye" element={<EyeProducts />} />
      <Route path="lip" element={<LipProducts />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
