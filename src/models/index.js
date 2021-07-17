import myAxios from '../http/request'

export function getcate() {
    return new Promise((resolve, reject) => {
        myAxios({
            url:'/getCate',
            success: function(res) {
                resolve(res)
            },
            error: function(err) {
                reject(err)
            }
        })
    })
}

export {
    getcate
}