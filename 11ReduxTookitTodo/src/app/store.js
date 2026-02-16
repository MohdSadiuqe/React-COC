import {configureStore} from '@reduxjs/toolkit'
import todoReduces from '../feature/todo/todoSlice';

export const store=configureStore({
    reducer:todoReduces
})