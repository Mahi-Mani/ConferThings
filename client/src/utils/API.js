import axios from "axios";

export default {
    createUser: async function (user) {
        return await axios.post("/api/user", user);
    },
    login: function (login) {
        return axios.post("/api/user/login", login);
    },
    logout: function () {
        return axios.get("/api/user/logout");
    },
    createThings: function (thingsDetails) {
        return axios.post("/api/thing", thingsDetails);
    },
    getThingsOfUser: function(id) {
        return axios.get("/api/thing/user/" + id);
    }
};