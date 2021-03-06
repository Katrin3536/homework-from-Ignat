import React, {useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import s from './Clock.module.css';

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId);
        // stop
    };
    const start = () => {
        stop();
        setDate(new Date());
        const id: number = window.setInterval(() => {
            setDate(new Date());
        }, 1000);
        setTimerId(id);
    };

    const onMouseEnter = () => {
        setShow(true);
        // show
    };
    const onMouseLeave = () => {
        setShow(false);
        // close
    };

    const stringTime = date?.toLocaleTimeString();// fix with date
    const stringDate = date?.toLocaleDateString(); // fix with date

    return (
        <div>
            <div className={s.stringTime}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {date ? stringTime : null}
            </div>
            <div className={s.stringDate}>
                {show && (stringDate)}
            </div>

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
