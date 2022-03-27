import { axios, authHeader } from "../helpers";

export class UserService {
    login(username, password) {
        return axios
            .post("/users/authenticate", { username, password })
            .then(response => response.data)
            .catch(err => console.error(err.toJSON()));
    }

    logout() {
        localStorage.removeItem("user");
    }

    getAll() {
        return axios
            .get("/users", { headers: authHeader() })
            .then(response => response.data)
            .catch(err => console.error(err.toJSON()));
    }

    getById(id) {
        return axios
            .get(`/users/${id}`, { headers: authHeader() })
            .then(response => response.data)
            .catch(err => console.error(err.toJSON()));
    }

    register(user) {
        return axios
            .post("/users/register", { user }, { headers: authHeader() })
            .then(response => response.data)
            .catch(err => console.error(err.toJSON()));
    }

    update(user) {
        return axios
            .put(`/users/${user.id}`, { user }, { headers: authHeader() })
            .then(response => response.data)
            .catch(err => console.error(err.toJSON()));
    }

    // prefixed function name with underscore because delete is a reserved word in javascript
    _delete(id) {
        return axios
            .delete(`/users/${id}`, { headers: authHeader() })
            .then(response => response.data)
            .catch(err => console.error(err.toJSON()));
    }
}
