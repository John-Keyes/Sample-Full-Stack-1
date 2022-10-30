export const setToken = (authToken) => {
    localStorage.setItem("token", authToken);
    localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
};
  
export const getToken = () => {
    const currentTime = new Date(Date.now()).getTime();
    const timeAllowed = 1000 * 60 * 30;
    if ((currentTime - localStorage.getItem("lastLoginTime")) < timeAllowed) {
        return localStorage.getItem("token");
    }
};

export const deleteToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("lastLoginTime");
}

//export {setToken, getToken, deleteToken};