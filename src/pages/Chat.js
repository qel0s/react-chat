import React from 'react'
import { WechatOutlined , BellOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import MainChat from '../components/MainChat';

import userImg from '../assets/img/user.jpg'

const Chat = () => {
    return (
        <div className="chat">


            <nav className="navbar"> 

                <div className="nav-left">
                    <div className="nav-icon"><WechatOutlined /></div>
                    <div className="nav-header"><h1>Messaging</h1></div>
                </div>

                <div className="nav-right">
                    <div className="nav-notification">
                                <BellOutlined />
                    </div>
                    <div className="nav-pp-container">
                        <img className="nav-pp" alt="profilephoto" src="https://images.pexels.com/photos/7210262/pexels-photo-7210262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=187&w=187"></img>
                    </div>
                </div>
            </nav>

            <div className="container">
                <Row>
                    <Col span={8}> 
                        <div className="chat-list-container">
                           <div className="chat-list-header">
                              <h2>Chats</h2>
                           </div>
                           <div className="chat-list">



                            <div className="chat-list-item">
                                <Row style={{flexFlow:"row"}}>
                                    <Col span={6}>
                                        <img className="chat-list-item-img" src={userImg}></img>
                                    </Col>
                                    <Col span={20}>
                                        <p className="chat-list-item-uname">User Name</p>
                                        <div className="chat-list-item-bottom">
                                            <small className="chat-list-item-lastMessage">Last message from chat</small>
                                            <small className="chat-list-item-lastMessage">2H</small>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="chat-list-item">
                                <Row style={{flexFlow:"row"}}>
                                    <Col span={6}>
                                        <img className="chat-list-item-img" src={userImg}></img>
                                    </Col>
                                    <Col span={20}>
                                        <p className="chat-list-item-uname">User Name</p>
                                        <div className="chat-list-item-bottom">
                                            <small className="chat-list-item-lastMessage">Last message from chat</small>
                                            <small className="chat-list-item-lastMessage">2H</small>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="chat-list-item">
                                <Row style={{flexFlow:"row"}}>
                                    <Col span={6}>
                                        <img className="chat-list-item-img" src={userImg}></img>
                                    </Col>
                                    <Col span={20}>
                                        <p className="chat-list-item-uname">User Name</p>
                                        <div className="chat-list-item-bottom">
                                            <small className="chat-list-item-lastMessage">Last message from chat</small>
                                            <small className="chat-list-item-lastMessage">2H</small>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="chat-list-item">
                                <Row style={{flexFlow:"row"}}>
                                    <Col span={6}>
                                        <img className="chat-list-item-img" src={userImg}></img>
                                    </Col>
                                    <Col span={20}>
                                        <p className="chat-list-item-uname">User Name</p>
                                        <div className="chat-list-item-bottom">
                                            <small className="chat-list-item-lastMessage">Last message from chat</small>
                                            <small className="chat-list-item-lastMessage">2H</small>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="chat-list-item">
                                <Row style={{flexFlow:"row"}}>
                                    <Col span={6}>
                                        <img className="chat-list-item-img" src={userImg}></img>
                                    </Col>
                                    <Col span={20}>
                                        <p className="chat-list-item-uname">User Name</p>
                                        <div className="chat-list-item-bottom">
                                            <small className="chat-list-item-lastMessage">Last message from chat</small>
                                            <small className="chat-list-item-lastMessage">2H</small>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="chat-list-item">
                                <Row style={{flexFlow:"row"}}>
                                    <Col span={6}>
                                        <img className="chat-list-item-img" src={userImg}></img>
                                    </Col>
                                    <Col span={20}>
                                        <p className="chat-list-item-uname">User Name</p>
                                        <div className="chat-list-item-bottom">
                                            <small className="chat-list-item-lastMessage">Last message from chat</small>
                                            <small className="chat-list-item-lastMessage">2H</small>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="chat-list-item">
                                <Row style={{flexFlow:"row"}}>
                                    <Col span={6}>
                                        <img className="chat-list-item-img" src={userImg}></img>
                                    </Col>
                                    <Col span={20}>
                                        <p className="chat-list-item-uname">User Name</p>
                                        <div className="chat-list-item-bottom">
                                            <small className="chat-list-item-lastMessage">Last message from chat</small>
                                            <small className="chat-list-item-lastMessage">2H</small>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="chat-list-item">
                                <Row style={{flexFlow:"row"}}>
                                    <Col span={6}>
                                        <img className="chat-list-item-img" src={userImg}></img>
                                    </Col>
                                    <Col span={20}>
                                        <p className="chat-list-item-uname">User Name</p>
                                        <div className="chat-list-item-bottom">
                                            <small className="chat-list-item-lastMessage">Last message from chat</small>
                                            <small className="chat-list-item-lastMessage">2H</small>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="chat-list-item">
                                <Row style={{flexFlow:"row"}}>
                                    <Col span={6}>
                                        <img className="chat-list-item-img" src={userImg}></img>
                                    </Col>
                                    <Col span={20}>
                                        <p className="chat-list-item-uname">User Name</p>
                                        <div className="chat-list-item-bottom">
                                            <small className="chat-list-item-lastMessage">Last message from chat</small>
                                            <small className="chat-list-item-lastMessage">2H</small>
                                        </div>
                                    </Col>
                                </Row>
                            </div>


                             
                           </div>
                        </div>  
                    </Col>
                    <Col span={16}>   
                        <div className="chat-main-container">
                        <h2>Main Chat</h2>
                        <MainChat/>
                        </div>
                    </Col>
                </Row>
                
            </div>

        </div>
    )
}

export default Chat
