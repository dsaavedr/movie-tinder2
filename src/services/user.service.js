import { axios, authHeader } from "../helpers";

export class UserService {
    login(email, password) {
        return axios
            .post("/users/authenticate", { email, password })
            .then(response => {
                const user = response.data;

                localStorage.setItem("user", JSON.stringify(user));
                return user;
            })
            .catch(err => {
                console.error(err.toJSON());
                return Promise.reject(err);
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    getAll() {
        return axios
            .get("/users", { headers: authHeader() })
            .then(response => response.data)
            .catch(err => {
                console.error(err.toJSON());
                return Promise.reject(err);
            });
    }

    getById(id) {
        return axios
            .get(`/users/${id}`, { headers: authHeader() })
            .then(response => response.data)
            .catch(err => {
                console.error(err.toJSON());
                return Promise.reject(err);
            });
    }

    register(user) {
        return axios
            .post("users/register", { user }, { headers: authHeader() })
            .then(response => response.data)
            .catch(err => {
                console.error(err.toJSON());
                return Promise.reject(err);
            });
    }

    update(user) {
        return axios
            .put(`/users/${user.id}`, { user }, { headers: authHeader() })
            .then(response => response.data)
            .catch(err => {
                console.error(err.toJSON());
                return Promise.reject(err);
            });
    }

    // prefixed function name with underscore because delete is a reserved word in javascript
    _delete(id) {
        return axios
            .delete(`/users/${id}`, { headers: authHeader() })
            .then(response => response.data)
            .catch(err => {
                console.error(err.toJSON());
                return Promise.reject(err);
            });
    }
}
