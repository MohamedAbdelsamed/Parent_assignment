import { createFeatureSelector, createSelector } from "@ngrx/store"
import { Interface } from "readline"
import { User } from "src/app/interfaces/interface"
import { UserActions, UserActoinTypes } from "./state.actions"

// export const UsersState : User [];


export interface UsersState {
  users: User[],
  currentUser: User,
  error: string
}

const initialUsersState: UsersState = {
  users: [],
  currentUser: null,
  error: ''
}

export const getUserState = createFeatureSelector<UsersState>('user')

export const getAllUsersState = createSelector(getUserState, (state)=> state.users)


// : User
export function userReducer(state = initialUsersState , action: UserActions) : UsersState {
  switch(action.type){
    case UserActoinTypes.LoadAllUsersSuccess :
    return {
      ...action.payload,
      error: ''
    }
  }

  switch(action.type){
    case UserActoinTypes.LoadAllUsersFail :
    return {
      users : null,
      currentUser: null,
      error: action.payload
    }

    default : return state
  }
}
