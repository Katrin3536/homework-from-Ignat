import React from 'react';
import s from './Message.module.css';


type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.message}>

            <img className={s.img} src={props.avatar}/>
            <section className={s.text}>
                <article className={s.name}>
                    <p style={{color: '#df9cf0'}}>{props.name}</p>
                    <p style={{color: '#9cf0cd'}}>{props.message}</p>
                </article>
                <article className={s.time}>
                    <p style={{color: '#16382a'}}>{props.time}</p>
                </article>
            </section>

        </div>
    );
}

export default Message;
