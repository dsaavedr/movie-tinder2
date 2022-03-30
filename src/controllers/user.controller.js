import { userConstants } from "../constants";
import { UserService } from "../services";

const userService = new UserService();

export class UserController {
    login(data, callback = null) {
        const { email, password } = data;
        return dispatch => {
            dispatch(request({ email }));

            userService.login(email, password).then(
                user => {
                    dispatch(success(user));
                    if (callback && typeof callback === "function") callback();
                },
                err => {
                    dispatch(failure(err.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );

            function request(user) {
                return { type: `authentication/${userConstants.LOGIN_REQUEST}`, user };
            }
            function success(user) {
                return { type: `authentication/${userConstants.LOGIN_SUCCESS}`, user };
            }
            function failure(error) {
                return { type: `authentication/${userConstants.LOGIN_FAILURE}`, error };
            }
        };
    }

    logout() {
        userService.logout();
        return { type: userConstants.LOGOUT };
    }

    register(user, callback = null) {
        return dispatch => {
            dispatch(request(user));

            userService.register(user).then(
                user => {
                    dispatch(success(user));
                    // dispatch(alertActions.success('Registration successful'));
                    if (callback && typeof callback === "function") callback();
                },
                err => {
                    dispatch(failure(err.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
        };

        function request(user) {
            return { type: `register/${userConstants.REGISTER_REQUEST}`, user };
        }
        function success(user) {
            return { type: `register/${userConstants.REGISTER_SUCCESS}`, user };
        }
        function failure(error) {
            return { type: `register/${userConstants.REGISTER_FAILURE}`, error };
        }
    }

    getAll() {
        return dispatch => {
            dispatch(request());

            userService.getAll().then(
                users => dispatch(success(users)),
                err => dispatch(failure(err.toString()))
            );
        };

        function request() {
            return { type: `users/${userConstants.GETALL_REQUEST}` };
        }
        function success(users) {
            return { type: `users/${userConstants.GETALL_SUCCESS}`, users };
        }
        function failure(error) {
            return { type: `users/${userConstants.GETALL_FAILURE}`, error };
        }
    }

    // prefixed function name with underscore because delete is a reserved word in javascript
    _delete(id) {
        return dispatch => {
            dispatch(request(id));

            userService.delete(id).then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
        };

        function request(id) {
            return { type: `users/userConstants.DELETE_REQUEST`, id };
        }
        function success(id) {
            return { type: `users/userConstants.DELETE_SUCCESS`, id };
        }
        function failure(id, error) {
            return { type: `users/userConstants.DELETE_FAILURE`, id, error };
        }
    }

    isAuthenticated() {
        return localStorage.getItem("user") !== null;
    }
}
