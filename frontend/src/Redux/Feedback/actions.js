export const UpdateFeedback = (state, type, val) => {
    switch(type) {
        case "email":
            if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val?.toLowerCase())) {
                state.email.push("Invalid email.");
            }
            if(val.length > 255) {
                state.email.push("Email can not be longer than 255 characters.");
            }
            break;
        case "password":
            let specialChars = "`~!@#$%^&*()_-+={[}]:;|\\'\"?/>.<,";
            let digits = "0123456789";
            let letters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVN";
            if(!val.includes(specialChars)) {
                state.password.push("You might want to consider using at least one special character in your password.");
            }
            if(!val.includes(digits)) {
                state.password.push("You might want to consider using at least one digit in your password.");
            }
            if(!val.includes(letters)) {
                state.password.push("You might want to consider using at least one letter in your password.");
            }
            if((val.length < 8) || (val.length > 30)) {
                state.password.push("Your password must be between 8 and 30 characters.");
            }
            break;
        default:
            if((val.length > 0) && (val.length > 255)) {
                state[type].push(`Invalid ${type}.`);
            }
            break; 
    }

}


export const ClearFeedback = (state, specifiedKeys = null) => {
    if(specifiedKeys) {
        DeleteKeys(specifiedKeys);
        return;
    }
    DeleteKeys(state);
}

const DeleteKeys = obj => {
    for (const key in obj) {
        delete obj[key];
    }
}