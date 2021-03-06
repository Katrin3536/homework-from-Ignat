import axios from "axios"

type ResponseType = {
    errorText:string
    info: string,
    yourBody:{success:boolean},
    yourQuery:{}

}
export const RequestsAPI = {
    createObj(checboxValue:boolean) {
        return axios.post<ResponseType>('https://neko-cafe-back.herokuapp.com/auth/test', {success: checboxValue})
    }
}