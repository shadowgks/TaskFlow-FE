import { createAction } from "@ngrx/store";

//  export const fetchCompetition = createAction("[]");
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');