import { getHomeShopData } from './../../util/http/ApiRequest';
import { getBannerData } from "../../util/http/ApiRequest";
type ListType = {
    shopId: number,
    clientUrl: string
}
type GoodItemType = {
    filter: {},
    list: ListType[]
}
type GoodsHeightType={
    type:string
    height:number
}
export default {
    namespace: true,
    state: () => ({
        banner: [],
        recommend: [],
        filters: [],
        goodsItem: {
            "pop": [],
            "sell": [],
            "new": [],
        },
        goodsScrollHeight: {
            "pop": 0,
            "sell": 0,
            "new": 0,
        }
    }),
    mutations: {
        // 轮播图数据
        getBanner(state: any, data: []) {
            state.banner = data
        },
        // 推荐数据
        getRecommend(state: any, data: []) {
            state.recommend = data
        },
        getGoodsData(state: any, data: any) {
            const { filter, sort, list } = data
            state.filters = filter
            state.goodsItem[sort] = [...state.goodsItem[sort], ...list]

        },
        getGoodsScrollHeight(state: any, data: GoodsHeightType){
            const {type,height}=data
            console.log(type,height);
            
            state.goodsScrollHeight[type]=height
        }
    },
    actions: {
        async setHomeData({ commit }: any) {
            const res = await getBannerData();
            const { banner, recommend } = res.data
            commit('getBanner', banner.list);
            commit('getRecommend', recommend.list);
        },
        async setGoodsData({ commit }: any, payload: any) {
            const res = await getHomeShopData(payload.type, payload.page)
            commit('getGoodsData', res.data)
        }
    }
}