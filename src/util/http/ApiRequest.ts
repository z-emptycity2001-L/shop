import {request} from './request';
export const getBannerData=()=>{
    return request({
        url:'/home/multidata'
    })
}
export const getHomeShopData=(type:string,page=1)=>{
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}