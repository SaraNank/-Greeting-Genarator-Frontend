import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import ListButtons from "./Components/ListButtons"
import counterSlice from "./slices/counterSlice"

const myStore =configureStore({
  reducer:{
    counterSlice,
  }
})

export type RootState =ReturnType<typeof myStore.getState>
function App() {
 
  return (
    <>
    <h1>Hello world</h1>
    <Provider store={myStore}>
     <ListButtons/>
     </Provider>
     </>
  )
}

export default App
