import { createSlice, configureStore, createReducer, getDefaultMiddleware } from "@reduxjs/toolkit";
import { pokemonApi } from "./services/DataApi";
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { Data, storeData } from "./Types";

const initialState = {
    loading:false,
    data:{
        results:[],
        page:1,
        
    },
    }
const dataSlice = createSlice({
    name: 'data', initialState: initialState, reducers: {
        getData(state, action) {
            state.data = action.payload
            
        },
        removeData(state, action) {
            return initialState
        },
        setLoading(state,action:{payload:boolean}){
             state.loading = action.payload   
        }
    }
})
const { actions, reducer } = dataSlice

export const store :any= configureStore({
    reducer: {
        data:reducer,
        [pokemonApi.reducerPath]:pokemonApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(pokemonApi.middleware)

})
setupListeners(store.dispatch);
export {actions}