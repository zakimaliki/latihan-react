const initialState = {
    month: [],
    monthDetail: []
};

const monthReducer = (state = initialState, action) => {
    if (action.type === "GET_ALL_MONTH") {
        return {
            ...state,
            month: action.payload,
        };
    } else if (action.type === "GET_DETAIL_MONTH") {
        return {
            ...state,
            monthDetail: action.payload,
        };
    } else if (action.type === "CREATE_MONTH") {
        return state;
    } else if (action.type === "UPDATE_MONTH") {
        return state;
    } else if (action.type === "DELETE_MONTH") {
        return state;
    } else {
        return state;
    }
};

export default monthReducer;