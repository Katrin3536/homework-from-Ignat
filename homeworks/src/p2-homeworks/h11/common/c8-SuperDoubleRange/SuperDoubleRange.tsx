import React from 'react';
import {Slider} from '@mui/material';
import s from '../c7-SuperRange/SuperRange.module.css';

type SuperDoubleRangePropsType = {
    onChangeRange: (value: number | number []) => void
    value?: [number, number]
    step: number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, step
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const handleChange = (event: Event, elements: number | number[]) => {
        onChangeRange(elements);
    };
    return (
        <div className={s.range}>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                step={step}
            />
        </div>
    );
};

export default SuperDoubleRange;
