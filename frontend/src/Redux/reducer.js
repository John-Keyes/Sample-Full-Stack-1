import Authorization from "./Auth/reducer";
import Feedback from "./Feedback/reducer";

const reducer = {
    auth: Authorization.reducer,
    feedback: Feedback.reducer
};



export const {LogOut} = Authorization.actions;
export const {UpdateFeedback, ClearFeedback} = Feedback.actions;
export default reducer;
