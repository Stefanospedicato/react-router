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
        <div className="container my-5">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default DefaultLayout;
