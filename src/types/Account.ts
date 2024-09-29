import { Status } from "./type.enum"

export default interface Account {
    id: number,
    email: string,
    accountRole: string,
    status: Status
}

export const AccountInit: Account = {
    id: 0,
    email: '',
    accountRole: '',
    status: Status.INACTIVE
}