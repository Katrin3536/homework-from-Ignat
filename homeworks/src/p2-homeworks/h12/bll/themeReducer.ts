export type StateType = {
    theme: string
}

const initState = {
    theme: 'dark'
};

export const themeReducer = (state: StateType = initState, action: ChangeThemeType): StateType => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {...state, theme: action.value};
        }
        default:
            return state;
    }
};

export type ChangeThemeType = {
    type: string,
    value: string
}

export const changeThemeC = (value: string): ChangeThemeType => {
    return {
        type: 'CHANGE-THEME',
        value
    } as const;
}; // fix any