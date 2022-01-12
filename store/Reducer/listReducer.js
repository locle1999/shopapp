
let appState = {
    username: "",
    token: "",
    dataProduct: [],
    quality: 0,
    active: false,
    dataCart: []
}
const listReducer = (state = appState, action) => {
    switch (action.type) {
        case "Login":
            console.log("check username", action.payload.data.token)
            return {
                ...state,
                token: action.payload.data.token,
                username: action.payload.data.username
            };
            break;
        case "ADD_PRODUCT":
            console.log("product is : ", action)
            return {
                ...state,
                dataProduct: [...state.dataProduct, action.payload],
            }
            break;
        case "Load_Data":
            console.log("data cart is : ", action)
            return {
                ...state,
                dataCart: [action.payload],
                quality: action.payload.length

            }
            break;

        default:
            return state;
    }
}

export default listReducer;   