export const AddFeedBack = (feedBack, error) => {
    if(error) {
        feedBack += error;
    }
    return feedBack;
}