import React from 'react';
import HW7 from '../../../h7/HW7';
import HW8 from '../../../h8/HW8';
import s from './Junour.module.css';

function Junior() {
    return (
        <div>
            <div className={s.junior}>Junior</div>
            <HW7/>
            <HW8/>
            {/*<HW9/>*/}
            {/*<HW10/>*/}
            {/*<HW11/>*/}
        </div>
    );
}

export default Junior;