import React, {useState, useEffect} from 'react'
import './style.less'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../../config/apiUrl'
import navList from './nav.config'

import { Row, Col, Menu, Icon, Input } from 'antd'

const { Search } = Input;
const Header = () => {
        const [navArray, setNavArray] = useState([])
        useEffect(() => {
            const fetchData = async () => {
                const result = await axios(servicePath.getTypeInfo)
                .then(res => {
                    console.log(res);
                    return res.data.data.tagList
                })
                setNavArray(result)
            }
            fetchData()
        },[])

        const hanleClick = (e) => {
            if(e.key === 0) {
                Router.push('/index')
            } else {
                Router.push('/list')
            }
        }

        return (
            <div className='header'>
                <Row className='headerRow' type='flex' justify='center' align="center">
                    {/* <Col xs={24} sm={24} md={16} lg={18} xl={14}> */}
                    <Col className="searchCol" xs={24} sm={24} md={4} lg={4} xl={4}>
                        <Search
                            placeholder="搜索"
                            onSearch={value => console.log(value)}
                            allowClear={true}
                            style={{ width: 200 }}
                        />
                    </Col>
                    <Col xs={0} sm={0} md={10} lg={10} xl={10}>
                        <Menu mode='horizontal' onClick={hanleClick}>
                            {/* <Menu.Item key='0'>
                                <Icon type='home'/>
                                首页
                            </Menu.Item> */}
                            {
                                navList.map((item) => {
                                    console.log(item);
                                    return (
                                        <Menu.Item key={item.id}>
                                            <Icon type='article'/>
                                            {item.name}
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    </Col>
                    <Col xs={0} sm={0} md={8} lg={6} xl={4}>
                        <Menu mode='horizontal' onClick={hanleClick}>
                            {/* <Menu.Item key='0'>
                                <Icon type='home'/>
                                首页
                            </Menu.Item> */}
                            {
                                navList.map((item) => {
                                    console.log(item);
                                    return (
                                        <Menu.Item key={item.id}>
                                            <Icon type='article'/>
                                            {item.name}
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    </Col>
                </Row>
            </div>
        )
    }

export default Header