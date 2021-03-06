import axios from "axios";

const API_URL = "https://plservice.herokuapp.com/"


class UserService {
    getAllUsers () {
        return axios.get(API_URL+"users/");
            // .then(function (response) {
            //     return JSON.stringify(response);
            // })
    }

    getUser (username){
        return axios.get(API_URL+"users/"+username);
    }
}

export default new UserService();
