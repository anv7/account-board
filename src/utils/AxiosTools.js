/**
 * @Description:
 * @author RainGorr
 * @date 2020/6/5
*/
import axios from 'axios'
import qs from 'qs'

class AxiosTools {
     static AxiosPost(urlKey, paramData = {}) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: 'http://192.168.0.104:8080/demo/add',
                data: qs.stringify(paramData)
            }).then(res => {
                console.info(res)
                resolve(res.data)
            }).catch(error => {
                console.warning('当前网络异常，请检查网络设置后再提交')
                reject(error)
            })
        })
    }

}
export default AxiosTools
