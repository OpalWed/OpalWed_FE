import Account, { AccountInit } from "./Account";

export default interface Profile {
    account: Account,
    address: string,
    description: string,
    fullName: string,
    imageUrl: string,
    phone: string
}

export const ProfileInit: Profile = {
    account: AccountInit,
    address: '',
    description: '',
    fullName: '',
    imageUrl: '',
    phone: ''
}