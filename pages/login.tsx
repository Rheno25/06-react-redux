import "bootstrap/dist/css/bootstrap.min.css";
import { setLogin } from "@/redux/auth/authSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import parse from 'html-react-parser';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";

export default function LoginCheck() {
    const { isLogin } = useSelector((state) => state.auth.isLogin);
    const dispatch = useDispatch();

    function handleAuth(type = 'logout') {
        if (type === 'logout' || type === 'login') {
            dispatch(setLogin({ isLogin: type === 'login' ? true : false }));
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card mt-3">
                        <div className="card-header">Status Login</div>
                        <div className="card-body">
                            {isLogin ?
                                [
                                    parse('<div class="alert alert-success">Yay, login successfully!!!</div>'),
                                    <button className="btn btn-md btn-danger" onClick={() => handleAuth('logout')}>Log out</button>
                                ]
                                :
                                [
                                    parse('<div class="alert alert-dark">You have logged out!<div>'),
                                    <button className="btn btn-md btn-primary" onClick={() => handleAuth('login')}>Log in</button>
                                ]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
