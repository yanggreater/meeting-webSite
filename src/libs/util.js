import axios from 'axios';
import qs from 'qs';
const Util = {
    //apiPath:'http://api.52feidian.com/api',
    //读取cookie
    }
Util.ajax = axios.create({
    //baseURL: Util.apiPath,
    //xhrFields:{'Access-Control-Allow-Origin':'*'},
    headers:{'Content-Type':'application/x-www-form-urlencoded'},
    // transformRequest: [function (data) {
    //     // 对 data 进行任意转换处理
    //     qs.stringify(data);
    //     return data;
    // }],
});
Util.getLastDate = function(time) {
    var date = new Date(time);
    var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return date.getFullYear() + '-' + month + "-" + day;
}
export default Util;