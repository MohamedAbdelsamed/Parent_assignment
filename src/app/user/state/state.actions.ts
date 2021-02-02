import { Action } from "@ngrx/store"
import { User } from "src/app/interfaces/interface"
import { getUserState, UsersState } from "./state.reducer"

export enum UserActoinTypes{
    LoadAllUsers =  '[user] load All User ',
    LoadAllUsersSuccess = '[user] load all users Success',
    LoadAllUsersFail = '[user] load all users Fail'
}
 
export class LoadAllUsers implements Action{
    readonly type = UserActoinTypes.LoadAllUsers
}


export class LoadAllUsersSuccess implements Action{
    readonly type = UserActoinTypes.LoadAllUsersSuccess

    constructor(public payload : UsersState){}
}

export class LoadAllUsersFail implements Action{
    readonly type = UserActoinTypes.LoadAllUsersFail

    constructor(public payload : string){}
}


export type UserActions  = LoadAllUsers | LoadAllUsersSuccess | LoadAllUsersFail