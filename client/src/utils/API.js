import axios from "axios";

export default {
    createUser: function (user) {
        return axios.post("/api/user", user);
    },
    login: function (login) {
        return axios.post("/api/user/login", login);
    },
    logout: function () {
        return axios.get("/api/user/logout");
    },
    createThings: function (thingsDetails) {
        return axios.post("/api/thing", thingsDetails);
    }
};