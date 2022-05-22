import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './common/c7-SuperRange/SuperRange.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const onChangeRange =(elements: number | number[])=> {
        if (Array.isArray(elements)) {
            setValue1(elements[0])
            setValue2(elements[1])
        } else {
            setValue1(elements)
        }
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.main}>
                <span className={s.value}>{value1}</span>
                <SuperRange value = {value1} onChangeRange={onChangeRange} step={5}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={s.main}>
                <div className={s.value}>{value1}</div>
                <SuperDoubleRange value = {[value1,value2]} onChangeRange={onChangeRange} step={5}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <div className={s.value}>{value2}</div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
