
export const initialUserState = {
  email :'',
  id: null,
}

export interface User {
  id : number,
  email : string
}
// : User
export function userReducer(state = initialUserState , action)  {
  switch(action.type){
    case 'updateUser' :
    return {...action.payload}
  }
}
