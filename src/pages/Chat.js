import React from 'react'
import { WechatOutlined , BellOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

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
                    <Col span={6}> 
                        <div className="chat-list">
                            Chats
                        </div>
                    </Col>
                    <Col span={18}>   
                        <div className="chat-main">
                            Main Chat
                        </div>
                    </Col>
                </Row>
                
            </div>

        </div>
    )
}

export default Chat
