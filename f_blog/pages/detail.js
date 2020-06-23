import React,{useState,useEffect} from 'react'
import Head from 'next/head'
import axios from 'axios'
import {Row, Col , Icon ,Breadcrumb, Affix } from 'antd'

import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

import Header from '../components/Header/header'
import Author from '../components/Author/author'
import Advert from '../components/Advert/advert'
import Footer from '../components/Footer/foot'

import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css';

import '../static/style/pages/detail.less'

import Tocify from '../components/Tocify.tsx'

import servicePath from '../config/apiUrl'

const Detail = (props) => {

  const tocify = new Tocify()
  const renderer = new marked.Renderer()

  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level)
    return `<a id=${anchor} href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
  }

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    highlight: function(code) {
      return hljs.highlightAuto(code).value
    }
  })
  const html = marked(props.article_content)
  return (
    <div>
      <Head>
        <title>文章</title>
      </Head>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <span>首页</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <span>列表</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <span>xxx</span>
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          <div className="detailed-title">
            文章名
          </div>
          <div className="list-icon center">
            <span>
              <Icon type="calendar" />2020-01-01
            </span>
            <span>
              <Icon type="folder" />文章列表
            </span>
            <span>
              <Icon type="fire" />100人
            </span>
          </div>
          <div className="detailed-content"
            dangerouslySetInnerHTML={{__html: html}}
          >
            
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              {/* <MarkNav
                className="article-menu"
                source={html}
                ordered={false}
              /> */}
              {tocify && tocify.render()}
          </div>
          </Affix>
        </Col>
      </Row>
    </div>
  )
}

Detail.getInitialProps = async (context) => {
  const id = context.query.id;
  const res = await axios({url: servicePath.getArticleById, params: {id}})
  console.log(res);
  return res.data.data
}

export default Detail
