import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value);
        onChange?.(e);
        // onChange, onChangeOption
    };

    const mappedOptions: JSX.Element[] = options ? options.map((o, i) => (
        <label className={s.radio} key={name + '-' + i}>
            <input
                type={'radio'}
                name={name}
                checked={value === o}
                value={o}
                onChange={onChangeCallback}
            />
            {o}
        </label>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
};

export default SuperRadio;
