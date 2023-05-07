let initialState = {
    count: 0,
}
function reducer(state = initialState, action) {
    console.log("액션은 dispatch에서 자동으로 들어옴", action);
     if (action.type === "INCREMENT") {
        return {...state, count: state.count + 1}
    }
    return {...state};  /* 변하지 않았더라도 일단 return은 필요하다 */

    /* switch의 경우 */
    /* switch (action.type) {
        case "INCREMENT":
            return {...state, count: state.count + 1};
        default:
            return {...state};    
    }; */
};

export default reducer;