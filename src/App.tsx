import { Route, Routes } from "react-router-dom";
import { Layout, Menu } from 'antd';
import SignUp from "./components/SignUp";
import "./App.css"
import Login from "./components/Login";
import CategoryTable from "./components/CategoryTable";
import ProtectedRoute from "./components/PrivateRoute";


const { Header, Content, Footer } = Layout;

function App() {

  return (
    <>


      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>

          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout " style={{ padding: '50px 50px', marginTop: 64 }}>

          <Routes>

            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path='/categories' element={<PrivateRoute element={Category} />} /> */}
            <Route path='/categories' element={<ProtectedRoute outlet={<CategoryTable />} />} />
          </Routes>

        </Content>
        <Footer style={{ textAlign: 'center' }}>Expense Tracker</Footer>
      </Layout >,
    </>
  );
}

export default App;
