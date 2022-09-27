import { Link } from "react-router-dom";

function Login(){
    return (
        <div id="login">
            <form name="login">
                <table>
                    <caption>Đăng nhập</caption>
                    <tr>
                        <td>username:</td>
                        <td>
                            <input type="text" name="uname" autoComplete="off"/>
                        </td>
                    </tr>
                    <tr>
                        <td>password:</td>
                        <td>
                            <input type="password" name="pwd" autoComplete="off"/>
                        </td>
                    </tr>
                </table>
                <Link to={`mainpage`}><input type="button" value="login" /></Link>
            </form>
        </div>
    );
}

export default Login;