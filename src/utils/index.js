// 解析查询参数
export function paramURL (url) {
    const search = url.split('?')[1];
    if (!search) {
        return {};
    }
    return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
}

export function paramBody (body) {
    let arr = body.split('&');
    let param = {};
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i].indexOf('=');
        if (num > 0) {
            param[arr[i].substring(0, num)] = arr[i].substring(num + 1);
        }
    }
    return param;
}

export function getClinetHeight () {
    return document.documentElement.clientHeight || document.body.clientHeight;
}

export function getScreenWidthAndHeight () {
    return {
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    };
};
