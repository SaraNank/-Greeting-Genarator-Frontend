import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ButtonState {
    button1?: boolean;
    button2?: boolean;
    button3?: boolean;
}

const initState: ButtonState[] = [
    { button1: true },
    { button2: false },
    { button3: false }
];

const counterSlice = createSlice({
    name: 'counter',
    initialState: initState,
    reducers: {
        changeCounter: (state, action: PayloadAction<keyof ButtonState>) => { // טיפוס חזוי עבור המפתח
            const buttonName = action.payload; 

            
            const button = state.find(obj => obj.hasOwnProperty(buttonName));

            if (button) {
                
                button[buttonName] = !button[buttonName]; 
            }
        },
    }
});

export const { changeCounter } = counterSlice.actions;
export default counterSlice.reducer;
