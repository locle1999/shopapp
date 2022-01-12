import axios from "axios";
import deviceInfoModule from 'react-native-device-info';
import { Platform } from "react-native";


export const Login = (username, password) => {

    let uniqueId = deviceInfoModule.getUniqueId()
    const user = JSON.stringify({
        username: username,
        password: password,
        os: Platform.OS,
        deviceid: uniqueId,
    })
    return dispatch => {
        return axios({
            method: 'post',
            url: 'http://nrms.ipicorp.co:10003/userservice/user/login_s2',
            data: user,
            headers: {
                "content-type": "application/json",
            }
        })
            .then(response => {
                let userToken = response.data
                console.log("check data  and user:", response.data, user)
                if (userToken.data.username) {
                    alert("Đăng nhập thành công")
                    dispatch(loginSucess(response.data))
                }
                else {
                    alert("sai mật khẩu")
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
}
const loginSucess = (data) => ({
    type: "Login",
    payload: data
})
export const cartProduct = (username, token) => {
    let uniqueId = deviceInfoModule.getUniqueId()
    return dispatch => {
        return axios({
            method: 'get',
            url: 'http://nrms.ipicorp.co:10003/orderservice/order/get_cart_3_one_attribute',
            params: {
                username: username,
                token: token,
                deviceid: uniqueId,
                os: Platform.OS,
            },
            headers: {
                "content-type": "application/json",
            }
        })
            .then(response => {
                console.log("check res giỏ hàng :", response.data.data.cart_info[0].items);
                console.log("check dât giỏ :", username, token,);
                dispatch(setData(response.data.data.cart_info[0].items))
            })
            .catch(error => {
                console.log(error);
            })
    }
}
const setData = (data) => ({
    type: "Load_Data",
    payload: data
})