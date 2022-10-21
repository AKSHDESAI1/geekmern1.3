const storeToken = (value) => {
    return localStorage.setItem("token", value);
}

const getToken = () => {
    return localStorage.getItem("token");
}

const removeToken = (value) => {
    return localStorage.removeItem(value);
}

export {storeToken, getToken, removeToken};