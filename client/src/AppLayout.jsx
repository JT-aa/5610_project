import "./style/appLayout.css";

import { Outlet, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { Container } from "react-bootstrap";

export default function AppLayout() {
  const { user, isLoading, logout } = useAuth0();

  if (isLoading) {
    // return <div className="loading">Loading...</div>;
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <Header title="Student Interest Groups" />
      <main >
        <Container >
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
