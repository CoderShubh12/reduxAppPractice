import { ADD_TODO , DELETE_TODO} from "../action"

const initialState=[
    {  id: 1,
        todo: "buy lapyy",
        completed: false},
    {  id: 2,
        todo: "buy mango",
        completed: false},
    {  id: 3,
        todo: "buy khasii",
        completed: true},

]


export const todoReducer=(state= initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            return [...state,action.payload];

        case DELETE_TODO:
              return state="";
        default: return state
    }
    
}