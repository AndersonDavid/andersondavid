import { createStore } from 'redux';

const initialState = {
    pageNumber: 1,
}

function store(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_PAGE':
            return { pageNumber: action.pageNumber }
        default:
            return state;
    }
};

export default createStore(store);
