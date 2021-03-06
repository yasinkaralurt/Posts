/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetTranslation, TranslationKey } from '../../utils/helpers/TranslateHelper';
import { ApplicationState } from '../index'
import Api from "../services/Api";


export const signinAsync = createAsyncThunk(
    'signin',
    async (username: string) => {
        return await Api.getUserByUsername(username)
            .then(response => {
                var data = response.data
                if (Array.isArray(data) && data.length > 0)
                    return data[0]
                throw new Error(GetTranslation(TranslationKey.Error.NotFound));
            })
            .catch(e => console.log(e))
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

