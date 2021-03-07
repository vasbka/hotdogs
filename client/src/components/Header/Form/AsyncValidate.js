import * as axios from "axios";

const asyncValidate = (values /*, dispatch */) => {
    return axios
        .post("http://localhost:5000/api/hot-dogs/check-name", {
            name: values.name
        })
        .then(response => {
            if (response.data.isNameExists) {
                throw { name: 'That hot-dog name is taken' }
            }
        })
}

export default asyncValidate;
