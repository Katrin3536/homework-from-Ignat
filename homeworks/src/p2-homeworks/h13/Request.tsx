import {ChangeEvent, useState} from 'react';
import {RequestsAPI} from './api';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import style from './Reguest.module.css';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

type ResponseStateType = {
    success: null | string,
    error: null | string
}
export const Request = () => {
    const [checboxValue, setChecboxValue] = useState<boolean>(true);
    const [response, setResponse] = useState<ResponseStateType>({
        success: null,
        error: null
    });
    const setValueCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setChecboxValue(e.currentTarget.checked);
    };
    const getRequest = () => {
        RequestsAPI.createObj(checboxValue)
            .then(res => {
                setResponse({success: res.data.errorText, error: null});
            })
            .catch(error => {
                    setResponse({success: null, error: error.response.data.errorText});
                }
            );
    };

    return (
        <div>
            <div className={style.buttons}>
                <SuperButton onClick={getRequest}>request</SuperButton>
                <SuperCheckbox type="checkbox" checked={checboxValue} onChange={setValueCheckbox}/>
            </div>
            {response.success
                ? <Alert severity="success" className={style.response}>
                    <AlertTitle>Success</AlertTitle>
                    {response.success}
                </Alert>
                : null}
            {response.error
                ? <Alert severity="error" className={style.response}>
                    <AlertTitle>Error</AlertTitle>
                    {response.error}
                </Alert>
                : null}
        </div>
    );
};