import React, {useState} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'
import { List, Icon, Row, Col } from 'antd'
import Header from '../components/Header/header'
import Author from '../components/Author/author'
import Advert from '../components/Advert/advert'
import Footer from '../components/Footer/foot'
import '../static/style/pages/common.less'
import '../static/style/pages/index.less'

import servicePath from '../config/apiUrl'

const Home = (list) => {

    const [myList, setMyList] = useState(list.data)

    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                    <List
                        header={<div>最新日志</div>}
                        itemLayout="vertical"
                        dataSource={myList}
                        renderItem={item => (
                          <List.Item>
                            <div className="list-title">
                              <Link href={{pathname: '/detail', query: {id: item.id}}}>
                                <a>{ item.title }</a>
                              </Link>
                            </div>
                            <div className="list-icon">
                              <span>
                                <Icon type="calendar"></Icon>
                                {item.addTime}
                              </span>
                              <span>
                                <Icon type="calendar"></Icon>
                                {item.type}
                              </span>
                            </div>
                            <div className="list-context">
                              { item.introduce }
                            </div>
                          </List.Item>
                        )}
                    />
                </Col>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                  <Author />
                  <Advert />
                </Col>
            </Row>
            <Footer/>
        </div>
    )
}

Home.getInitialProps = async () => {

  const promise = new Promise(resolve => {
    axios(servicePath.getArticleList).then(res => {
      resolve(res.data)
    })
  })
  return await promise
}

export default Home
