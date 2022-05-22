import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import {Slider} from '@mui/material';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (elements: number | number[]) => void
    value: number
    step:number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className, value, step,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (event: Event,elements:number | number[]) => {
        onChangeRange?.(elements)
    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    // @ts-ignore
    return (
        <div className={finalRangeClassName}>
            <Slider
                value={value}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
                step = {step}
            />
        </div>
    )
}

export default SuperRange
