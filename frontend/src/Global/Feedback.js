export const UpdateFeedback = (type, val) => {
    let errors = [];
    switch(type) {
        case "email":
            if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val?.toLowerCase()))) {
                errors.push("Invalid email.");
            }
            if(val.length > 255) {
                errors.push("Email can not be longer than 255 characters.");
            }
            return errors;
        case "password":
            let strength = 4;
            //^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$
            // /^[(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[`~!@#$%^&*()_-+={[}]:;\|\\'"?\/>.<,]).*]/.test(val);
            //`~!@#$%^&*()_-+={[}\]:;|\\'"?/>.<,
            if(!(/[^a-zA-Z0-9]/.test(val))) {
                strength--;
                //errors.push("You might want to consider using at least one special character in your password.");
                errors.push("You must use at least one special character in your password.");
            }
            if(!(/[0-9]/.test(val))) {
                strength--;
                //errors.push("You might want to consider using at least one digit in your password.");
                errors.push("You must use at least one digit in your password.");
            }
            if(!(/[a-zA-Z]/.test(val))) {
                strength--;
                //errors.push("You might want to consider using at least one letter in your password.");
                errors.push("You must use at least one letter in your password.");
            }
            if((val.length < 8) || (val.length > 30)) {
                strength--;
                errors.push("Your password must be between 8 and 30 characters.");
            }
            return errors;
        case "dropdown":
            return errors;
        default:
            if((val.length > 0) && (val.length > 255)) {
                errors.push(`Invalid ${type}.`);
            }
            return errors; 
    }

}