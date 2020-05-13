import * as axios from "axios";
const GET_ITEMS = "GET_ITEMS";
const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const ITEMS_LOADING = "ITEMS_LOADING";


const initialState = {
    items: [],
    loading: true
};


export const item = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case DELETE_ITEM:
            debugger
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }

};

const setItems = (items) => ({ type: GET_ITEMS, payload: items });
const addItem = (item) => ({ type: ADD_ITEM, payload: item });
const setItemsLoading = (bool) => ({ type: ITEMS_LOADING, payload: bool });
const removeItem = (id) => ({ type: DELETE_ITEM, payload: id });


export const getItems = () => async (dispatch) => {
    dispatch(setItemsLoading(true));
    const res = await axios.get("/api/items");
    dispatch(setItems(res.data));
    dispatch(setItemsLoading(false));
};

export const setItem = (name) => async (dispatch) => {
    dispatch(setItemsLoading(true));
    const res = await axios.post("/api/items", { name });
    dispatch(addItem(res.data));
    dispatch(setItemsLoading(false));
};

export const deleteItem = (id) => async (dispatch) => {
    dispatch(setItemsLoading(true));
    await axios.delete("/api/items/" + id);
    dispatch(removeItem(id));
    dispatch(setItemsLoading(false));
};

















