import React, {useRef, useEffect} from 'react'

import userImg from '../assets/img/user.jpg'

const MainChat = () => {
    let chatInput = useRef()

    useEffect(() => {
        chatInput.current.focus();
    }, [])

    return (
        <div className="main-chat">


                <div className="chat-area">

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
                            <div className="message-box message-box-interlocutor">😀 😃 😄 😁 😆 😅 😂 🤣</div>
                            <div className="message-box message-box-interlocutor"> Reprehenderit aute laborum sint ex proident voluptate Lorem ea excepteur consectetur. Cupidatat qui eiusmod officia mollit ipsum ex culpa fugiat eiusmod ullamco magna esse anim occaecat. Nulla ex anim sunt do velit velit. Ullamco sunt ea ullamco laborum et cillum nulla.  </div>
                        </div>
                    </div>

                    <div className="chat-item chat-item-me">
                        <div className="chat-item-me-box">
                            <div className="message-box message-box-me"> Im fine thanks 🎉 🥳</div>
                            <div className="message-box message-box-me"> How are you ? </div>
                            <div className="message-box message-box-me"> Mollit incididunt ex ut aliqua amet nisi velit aliquip irure fugiat sit sit duis nulla. Magna ex cillum laboris aliquip ipsum laboris magna incididunt ex. Aliqua adipisicing magna veniam laborum laborum sunt fugiat eiusmod officia sunt eiusmod aliquip. Fugiat ex laboris anim labore quis nostrud eu irure laborum sit eiusmod laboris nostrud velit. Aliquip occaecat eu dolor ex deserunt sit mollit reprehenderit deserunt do cillum do irure duis. are you ? </div>
                            <div className="message-box message-box-me"> How are you ? </div>
                            <div className="message-box message-box-me"> asdasd 😊 </div>
                            <div className="message-box message-box-me">😇</div>

                        </div>

                        <div>
                            <img src={userImg}></img>
                        </div>
                    </div>
                    
                </div>

                <div className="chat-input">
                    <input ref={chatInput} type="text" className="main-chat-input"></input>
                    <div className="chat-input-buttons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#20182b" className="cursor-pointer poi bi bi-arrow-return-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                    </div>
                </div>

        </div>
        
    )
}

export default MainChat
