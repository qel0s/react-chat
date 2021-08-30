import React from 'react'

import userImg from '../assets/img/user.jpg'

const MainChat = () => {
    return (
        <div className="main-chat">


            <div className="chat-item chat-item-interlocutor">
                <div>
                    <img src={userImg}></img>
                </div>
                <div>
                    <div className="message-box message-box-interlocutor"> Hi how are you ? </div>
                    <div className="message-box message-box-interlocutor"> We cant see you for a  while. </div>
                </div>
            </div>

            <div className="chat-item chat-item-me">
                <div  className="chat-item-me-box">
                    <div className="message-box message-box-me"> Im fine thanks</div>
                    <div className="message-box message-box-me"> How are you ? </div>
                    <div className="message-box message-box-me"> How are you ? </div>
                    <div className="message-box message-box-me"> How are you ? </div>
                </div>

                <div>   
                    <img src={userImg}></img>
                </div>
            </div>

            <div className="chat-item chat-item-interlocutor">
                <div>
                    <img src={userImg}></img>
                </div>
                <div>
                    <div className="message-box message-box-interlocutor"> Hi how are you ? </div>
                    <div className="message-box message-box-interlocutor"> Reprehenderit aute laborum sint ex proident voluptate Lorem ea excepteur consectetur. Cupidatat qui eiusmod officia mollit ipsum ex culpa fugiat eiusmod ullamco magna esse anim occaecat. Nulla ex anim sunt do velit velit. Ullamco sunt ea ullamco laborum et cillum nulla.  </div>
                </div>
            </div>

            <div className="chat-item chat-item-me">
                <div className="chat-item-me-box">
                    <div className="message-box message-box-me"> Im fine thanks</div>
                    <div className="message-box message-box-me"> How are you ? </div>
                    <div className="message-box message-box-me"> Mollit incididunt ex ut aliqua amet nisi velit aliquip irure fugiat sit sit duis nulla. Magna ex cillum laboris aliquip ipsum laboris magna incididunt ex. Aliqua adipisicing magna veniam laborum laborum sunt fugiat eiusmod officia sunt eiusmod aliquip. Fugiat ex laboris anim labore quis nostrud eu irure laborum sit eiusmod laboris nostrud velit. Aliquip occaecat eu dolor ex deserunt sit mollit reprehenderit deserunt do cillum do irure duis. are you ? </div>
                    <div className="message-box message-box-me"> How are you ? </div>
                    <div className="message-box message-box-me"> asdasd </div>
                </div>

                <div>
                    <img src={userImg}></img>
                </div>
            </div>



        </div>
    )
}

export default MainChat
