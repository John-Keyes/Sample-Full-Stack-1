import Authorization from "./Auth/reducer";

const reducer = {
    auth: Authorization.reducer,
};



export const {LogOut} = Authorization.actions;
export default reducer;
