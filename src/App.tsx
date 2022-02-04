import { Route, Routes } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import SignUp from "./components/SignUp";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
    {/* <Routes >
    <Route path="/register" element={<SignUp/>}/>
    </Routes> */}

    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '50px 50px', marginTop: 64 }}>
     
    {/* <Route path="/register" element={<SignUp/>}/> */}
     <SignUp/>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Expense Tracker</Footer>
  </Layout>,
    </>
  );
}

export default App;
