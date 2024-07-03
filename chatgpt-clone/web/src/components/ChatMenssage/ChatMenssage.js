import React from 'react'
import './ChatMenssage.css'
import Avatar from '../../assets/avatar'

//user (user | chatgpt)
//

//{
//    user: 'gpt'
//    message: 'crie um nome de artigo'
//}

export const ChatMenssage = ({ message }) => {
  return(
    <div className ={`chat-message ${message.user === 'gpt'} && "chatgpt"`}>
        <div className="chat-message-center">
            <div className={`avatar ${message.user === 'gpt' && "chatgpt"}`}>
                {message.user === 'gpt' && (<Avatar/>)}
            </div>
            <div className="message">
                {message.message}
            </div>
        </div>
    </div>
  )
}