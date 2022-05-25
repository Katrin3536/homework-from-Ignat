import React from 'react';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import s from './HW12.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeC, StateType} from './bll/themeReducer';

const themes: Array<string> = ['dark', 'red', 'some', 'picture', 'sea'];

function HW12() {
    const theme = useSelector<AppStoreType, StateType>(state => state.theme); // useSelector
    const dispatch = useDispatch();

    const onChangeCallback = (themeName: string) => {
      dispatch(changeThemeC(themeName))
    }
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme.theme]}>
            <hr/>
            <span className={s[theme.theme + '-text']}>
                homeworks 12
            </span>
            {/*should work (должно работать)*/}
            <SuperSelect options={themes} onChangeOption={onChangeCallback}/>
            <hr/>
        </div>
    );
}

export default HW12;
