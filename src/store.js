import {configureStore} from "@reduxjs/toolkit"
import storeUsernameSlice from "./features/username/storeUsernameSlice"

export default configureStore({
    reducer: {
        storeUsername: storeUsernameSlice,
    },
})