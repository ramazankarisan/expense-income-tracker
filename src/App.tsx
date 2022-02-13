import { Route, Routes, useNavigate } from "react-router-dom";
import { Col, Layout, Row } from "antd";
import SignUp from "./components/SignUp";
import "./App.css";
import Login from "./components/Login";
import CategoryTable from "./components/CategoryTable";
import ProtectedRoute from "./components/PrivateRoute";
import Records from "./components/Records";
import AppHeader from "./components/AppHeader";
import Logout from "./components/Logout";
import { useEffect } from "react";

const { Footer } = Layout;

function App() {
  const navigate = useNavigate();
  // at start to navigate register page
  useEffect(() => {
    navigate("/register");
  }, []);

  return (
    <>
      <Layout>
        {/* HEADER */}
        <AppHeader />

        <Row align="middle" justify="center">
          <Col
            xs={16}
            sm={16}
            md={18}
            lg={18}
            xl={18}
            style={{ paddingTop: 100 }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 380 }}
            >
              {/* ROUTES */}
              <Routes>
                <Route path="/register" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/categories"
                  element={
                    <ProtectedRoute
                      outlet={<CategoryTable />}
                    />
                  }
                />
                <Route
                  path="/records"
                  element={
                    <ProtectedRoute outlet={<Records />} />
                  }
                />
                <Route path="/logout" element={<Logout />} />
              </Routes>
            </div>
          </Col>
        </Row>

        <Footer style={{ textAlign: "center" }}>Expense Tracker</Footer>
      </Layout>
      ,
    </>
  );
}

export default App;
