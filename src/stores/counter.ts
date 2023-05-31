import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    counter: number;
}

const initialState: CounterState = {
    counter: 0,
};

const couterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.counter += action.payload;
        },
    },
});

const { reducer, actions } = couterSlice;

export const { increment, decrement, incrementByAmount } = actions;

export default reducer;
