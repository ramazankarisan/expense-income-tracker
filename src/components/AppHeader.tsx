import { Menu } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import { AppState } from '../store'
import { isLoggedIn } from '../store/actions/userActions'

const AppHeader = () => {
  const { data, loading } = useSelector((state: AppState) => state.user)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLoggedIn());
  }, [])

  // to focus on the menu item that we are in
  const { pathname } = useLocation();

  return (
    <>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>

        <Menu theme="dark" mode="horizontal" selectedKeys={[pathname]}>

          {/* if it is logging in, then we see records and categories if not register/login */}
          {data.username ?

            (<>
              <Menu.Item key="/records"><Link to="/records">Records</Link></Menu.Item>
              <Menu.Item key="/categories"><Link to="/categories">Categories</Link></Menu.Item>
              <Menu.Item key="/logout"><Link to="/logout"> Logout</Link></Menu.Item>
            </>)
            : loading ? null :
              (<><Menu.Item key="/login"><Link to="/login">Login</Link></Menu.Item>
                <Menu.Item key="/register"><Link to="/register">Register</Link></Menu.Item></>)
          }
        </Menu>
      </Header></>
  )
}

export default AppHeader