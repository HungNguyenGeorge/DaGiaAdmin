import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard'
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import './style.scss'

const { Header, Content, Footer, Sider } = Layout;

class Main extends Component {
    render() {
        return (
            <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<BarChartOutlined />}>
                            <Link to={`/dashboard`}>Dashboard</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<TeamOutlined />}>
                            Quản lý Khách hàng
        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            Quản lý Sản phẩm
        </Menu.Item>
                        <Menu.Item key="4" icon={<BarChartOutlined />}>
                            Quản lý Danh mục
        </Menu.Item>
                        <Menu.Item key="5" icon={<CloudOutlined />}>
                            Quản lý Thanh toán
        </Menu.Item>
                        <Menu.Item key="6" icon={<AppstoreOutlined />}>
                            Quản lý Thông báo
        </Menu.Item>
                        <Menu.Item key="7" icon={<TeamOutlined />}>
                            nav 7
        </Menu.Item>
                        <Menu.Item key="8" icon={<ShopOutlined />}>
                            nav 8
        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 200 }}>
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                            <Router>
                                <div className="Content">
                                    {/* <Header /> */}
                                    <Switch>
                                        <Route path="/" component={Dashboard} />
                                        <Route path="/dashboard" component={Dashboard} />
                                    </Switch>
                                    {/* <Footer className='Footer' style={{ textAlign: 'center' }}>DAGIA - SYSTEM ©2020 Created by Hung - Hao</Footer> */}
                                </div>
                            </Router>

                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}
export default Main