import { getBannerData } from "../../util/http/ApiRequest";

export default{
    namespace:true,
    state:()=>({
        banner:[],
        recommend:[]
    }),
    mutations:{
        getBanner(state:any,data:[]){
            state.banner=data
        },
        getRecommend(state:any,data:[]){
            state.recommend=data
        }
    },
    actions:{
        async setHomeData({commit}:any){
            const res = await getBannerData();
            const {banner,recommend}=res.data
            commit('getBanner', banner.list);
            commit('getRecommend',recommend.list);
        }
    }
}