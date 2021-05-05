/* eslint-disable no-param-reassign */
import { createAction, createAsyncThunk, createReducer, createSlice, Middleware, PayloadAction } from '@reduxjs/toolkit'
import { GetTranslation, TranslationKey } from '../../utils/TranslateHelper';
import { ApplicationState } from '../index'
// import { createAccount, login } from '../../mock/mockUser'
// import { setRunning } from './appState'
import ApiService from "../services/ApiService";


export const signinAsync = createAsyncThunk(
    'signin',
    async (username: string) => {
        const response = await new ApiService().getUserByUsername(username).catch(e => console.log(e))
        if (response && Array.isArray(response) && response.length > 0)
            return response[0]
        throw new Error(GetTranslation(TranslationKey.Error.NotFound));
    }
);

type UserState = {
    user?: any,
    loading: boolean,
    errorMessage?: string
}

const initialState: UserState = {
    user: null,
    loading: false,
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        signOut: (state) => {
            state.user = null
        },
        setError: (state) => {
            state.errorMessage = null
        }
    },
    extraReducers: builder => {
        builder
            .addCase(signinAsync.pending, state => {
                state.loading = true
            })
            .addCase(signinAsync.rejected, (state, action) => {
                state.errorMessage = action.error.message
                state.loading = false
                state.user = null
            })
            .addCase(signinAsync.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
    }

})

export const getUser = (state: ApplicationState): any => state.auth.user
export const getErrorMessage = (state: ApplicationState): string => state.auth.errorMessage
export const getLoading = (state: ApplicationState): boolean => state.auth.loading
export const { signOut, setError } = userSlice.actions;

export default userSlice.reducer

