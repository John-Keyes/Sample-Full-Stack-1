const initialPayload = {
    studentID: -1,
    city: "",
    country: "",
    firstName: "",
    lastName: "",
    average: 0,
    grades: [],
    pic: "",
    skill: ""
}

export const Authorization = (action, payload = initialPayload) => {
    return {action: action, payload: payload};
}