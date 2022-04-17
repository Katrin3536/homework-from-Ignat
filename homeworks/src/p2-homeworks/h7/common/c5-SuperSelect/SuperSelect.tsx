import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react';
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: JSX.Element[] | undefined = options?.map((el, i) => (
        <option key={i}>{el}</option>)
    );
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value);
        onChange?.(e);
        // onChange, onChangeOption
    };

    return (
        <select className={s.select} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    );
};

export default SuperSelect;
