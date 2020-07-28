import axios from "axios";

export default {
    createUser: function (user) {
        return axios.post("/api/user", user);
    }
};