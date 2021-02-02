import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { User } from "src/app/interfaces/interface";
import { userService } from "../service.service";
import { LoadAllUsers, LoadAllUsersFail, LoadAllUsersSuccess, UserActoinTypes } from "./state.actions";

@Injectable()

export class UserEffects{
    constructor(private  actions$: Actions, private userService: userService){}

    @Effect()
    LoadUsers$ = this.actions$.pipe(
        ofType(UserActoinTypes.LoadAllUsers),
        mergeMap((actions: LoadAllUsers)=> this.userService.getUserList().pipe(
            map((users: User[]) => new LoadAllUsersSuccess(
                {users,
                currentUser: null,
                error: ''
                }
                )),
            catchError(error => of(new LoadAllUsersFail(error)))
        ))
    )

    // @Effect()
    // UpdateProducts$ = this.actions$.pipe(
    //     ofType(ProductActions.productActionsTypes.Update),
    //     map((action: ProductActions.Update)=> action.payload),
    //     mergeMap((product: Product)=> this.productsService.updateProduct(product).pipe(
    //         map((updatedProduct: Product) => new ProductActions.UpdateSuccess(updatedProduct)),
    //         catchError(error => of(new ProductActions.UpdateFail(error)))
    //     ))
    // )
}