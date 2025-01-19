import { createStore } from "redux";
import initialState from "./initialState";
import shortid from "shortid";

// Action creators
export const addColumn = (payload) => ({ type: "ADD_COLUMN", payload });
export const addCard = (payload) => ({ type: "ADD_CARD", payload });
export const getListById = ({ lists }, listId) => lists.find((list) => list.id === listId);
export const getAllLists = ({ lists }) => lists;
//export const getAllLists = (state) => state.lists;

// Nowy selektor
export const getColumnsByList = ({ columns }, listId) => 
  columns.filter((column) => column.listId === listId);

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COLUMN":
      return {
        ...state,
        columns: [...state.columns, { ...action.payload, id: shortid() }],
      };
    case "ADD_CARD":
      return {
        ...state,
        cards: [...state.cards, { ...action.payload, id: shortid() }],
      };
    default:
      return state;
  }
};

// Store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
