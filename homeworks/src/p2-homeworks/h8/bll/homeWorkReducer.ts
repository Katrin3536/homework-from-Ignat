import {UserType} from '../HW8';

export type ActionType = {
    type: string,
    payload: number | string
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state];
            if (action.payload === 'up') {
                newState.sort((a, b) => a.name < b.name ? -1 : 1);
            } else if (action.payload === 'down') {
                newState.sort((a, b) => a.name > b.name ? -1 : 1);
            }
            // need to fix
            return newState;
        }
        case 'check': {
            // need to fix
            return state.filter(el => el.age > action.payload);
        }
        default:
            return state;
    }
};