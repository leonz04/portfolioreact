import { configureStore } from "@reduxjs/toolkit";
import modeView from "./states/modeView.state";
import modeLanguage from "./states/modeLanguage";




const store= configureStore({
    reducer:{
        
        modeView,
        modeLanguage

    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store