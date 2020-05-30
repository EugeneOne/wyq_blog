import React, {useState, useEffect} from 'react'
import './style.less'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../../config/apiUrl'

import { Row, Col, Menu, Icon } from 'antd'

const Header = () => {
        const [navArray, setNavArray] = useState([])
        useEffect(() => {
            const fetchData = async () => {
                const result = await axios(servicePath.getTypeInfo)
                .then(res => {
                    return res.data.data
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
                <Row type='flex' justify='center'>
                    <Col xs={24} sm={24} md={16} lg={18} xl={14}>
                        <span className='header-logo'>万郁青</span>
                        <span className='header-txt'>的博客</span>
                    </Col>
                    <Col xs={0} sm={0} md={8} lg={6} xl={4}>
                        <Menu mode='horizontal' onClick={hanleClick}>
                            {/* <Menu.Item key='0'>
                                <Icon type='home'/>
                                首页
                            </Menu.Item> */}
                            {
                                navArray.map((item) => {
                                    return (
                                        <Menu.Item key={item.id}>
                                            <Icon type='article'/>
                                            {item.typeName}
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