import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.wrapper_error}>
            <div className={s.number}>404</div>
            <div className={s.page}>Page not found!</div>
            <div className={s.picture}></div>
        </div>
    )
}

export default Error404
