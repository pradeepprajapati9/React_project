 

const Reducers = (state, action) => {
    if (action.type === "Home_Update") {
        return {
            ...state,
            name: action.payload.name,
            images: action.payload.images,

        }
    }

    if (action.type === "About_Update") {
        return {
            ...state,
            name: action.payload.name,
            images: action.payload.images,
        }

    }

    return state;
}

export default Reducers;
