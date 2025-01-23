import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const DefaultLayout = () => {
  return (
    <>
      <header>
        <div className="container">
          <NavBar />
        </div>
      </header>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default DefaultLayout;
