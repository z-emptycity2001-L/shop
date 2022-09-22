import {request} from './request';
export const getBannerData=()=>{
    return request({
        url:'/home/multidata'
    })
}