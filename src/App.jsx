import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import AboutUsPage from "./pages/AboutUsPage";
import ProductsPage from "./pages/ProductsPage";
import AddPost from "./pages/AddPost";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={Homepage} />
          <Route path="/chi-siamo" Component={AboutUsPage} />
          <Route path="/prodotti" Component={ProductsPage} />
          <Route path="/crea-post" Component={AddPost} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
