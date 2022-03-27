import React, {ChangeEvent} from 'react';
import s from './Greeting.module.css';
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.input; // need to fix with (?:)

    return (
        <div className={s.someClass}>
            <SuperInputText value={name} onChange={setNameCallback} className={inputClass}/>
            <SuperButton onClick={addUser} className={s.button} disabled={!name}>add</SuperButton>
            <span className={s.totalUsers}>{totalUsers}</span>
            <div>{error && <span className={s.errorText}>{error}</span>}</div>
        </div>
    );
};

export default Greeting;
