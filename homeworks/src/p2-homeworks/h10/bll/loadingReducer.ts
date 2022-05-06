export type StateType = {
    loading: boolean
}

const initState = {
    loading: false
};

export const loadingReducer = (state: StateType = initState, action: LoadingActionType): StateType => { // fix any
    switch (action.type) {
        case 'SET-LOADING': {
            return {...state, loading: action.value};
        }
        default:
            return state;
    }
};
export type LoadingActionType = {
    type: string,
    value: boolean
}

export const loadingAC = (value: boolean): LoadingActionType => {
    return {
        type: 'SET-LOADING',
        value,
    } as const;
}; // fix any