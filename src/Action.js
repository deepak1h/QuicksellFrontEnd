import axios from 'axios';
import { configureStore ,createReducer } from "@reduxjs/toolkit";

const api = "https://api.quicksell.co/v1/internal/frontend-assignment";
let priority_list = ["No priority", "Low", "Medium", "High", "Urgent"];

export const dataReducer = createReducer({}, {
    D200 : (state, action) => {
        state.loading = false;
        state.Tickets = action.payload.tickets;
        state.allUser = action.payload.users;
    },
    D300 : (state) => {
        state.loading = true;
    },
    D400 : (state) => {
        state.Tickets = []
        state.loading = false;
        state.allUser = [];
    },
});

export const fetchData = () => async (dispatch) =>{
    try {
        dispatch({type : 'D300'})
    
        const {data} = await axios.get(api);

        dispatch({type : 'D200', payload : data});

    } catch (error) {
        dispatch({type : 'D400'})
    }
}

export const selectDataReducer = createReducer({}, {

    S200 : (state, action) => {
        state.loading = false;
        state.selectedData = action.payload.selectedData;
        state.user = action.payload.user
    },
    S300 : (state) => {
        state.loading = true;
        state.selectedData = [];
    },
    S400 : (state, action) => {
        state.loading = false;
        state.selectedData = []
        state.message = action.payload.message
    },
});

export const selectData = (group, Tickets, order) => async (dispatch) =>{
    try {
       dispatch({type : 'S300'})

        let user = false;
        let selectedData = [];
        
        if (group === 'status') {
        const uniqueStatuses = Array.from(new Set(Tickets.map(elem => elem.status)));

        uniqueStatuses.forEach((elem, index) => {
            const filteredData = Tickets.filter(e => elem === e.status);
            selectedData.push({ [index]: { title: elem, value: filteredData } });
        });
        } else if (group === 'user') {
        user = true;
        Tickets?.allUser?.forEach((elem, index) => {
            const filteredData = Tickets?.Tickets?.filter(e => elem.id === e.userId);
            selectedData.push({ [index]: { title: elem.name, value: filteredData } });
        });
        } else {

        priority_list.forEach((elem, index) => {
            const filteredData = Tickets.filter(e => index === e.priority);
            selectedData.push({ [index]: { title: elem, value: filteredData } });
        });
        }
        selectedData.forEach((elem, index) => {
            elem[index]?.value?.sort((a, b) => {
              return order === "title" ? a.id.localeCompare(b.id) : b.priority - a.priority;
            });
          });
        
        dispatch({type : 'S200', payload : {selectedData, user}});

    } catch (error) {
        dispatch({type : 'S400', payload : error.message})
    }
}

const storage = configureStore({
    reducer: {
        data: dataReducer,
        selectedData: selectDataReducer
    }
});

export default storage;