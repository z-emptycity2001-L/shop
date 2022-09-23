<template>
  <div class="home">
    <div class="banner">
      <Swiper :banner-list="store.state.main.banner"></Swiper>
    </div>
    <div class="recommend">
      <div
        class="recommend__item"
        v-for="item in store.state.main.recommend"
        :key="item.acm"
      >
        <img :src="item.image" alt="" style="width: 100%; height: 100%" />
        <div class="title">{{ item.title }}</div>
      </div>
    </div>
    <div class="prevalent" style="height: 250px">
      <img
        src="../../../../assets/images/home/recommend.jpg"
        alt=""
        style="width: 100%; height: 100%"
      />
    </div>
    <div class="tabControl" @click="changeIndex">
      <div
        class="tabControl__item"
        v-for="(item, index) in store.state.main.filters.list"
        :key="index"
        :class="currentIndex == index ? 'activeItem' : ''"
        :data-index="index"
        :data-sort="item.sort"
      >
        {{ item.title }}
      </div>
    </div>
    <GoodsItem
      :goods="store.state.main.goodsItem[sortTab]"
      :sort="sortTab"
    ></GoodsItem>
  </div>
</template>
          
<script lang='ts' setup>
import { onMounted, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
import { ref } from "vue";
import Swiper from "../../../../components/swiper/swiper.vue";
import GoodsItem from "../../../../components/goodsItem/goodsItem.vue";
import { height } from "dom7";
const store = useStore();
const currentIndex = ref<number>(0);
const sortTab = ref<string>("pop");
  const goodList=ref<any[]>([])
onMounted(() => {
  store.dispatch("setHomeData");
  store.dispatch("setGoodsData", { type: "pop", page: 1 });
});
const changeIndex = (e: any) => {
  const { index, sort } = e.target.dataset;
  currentIndex.value = index;
  sortTab.value = sort;
  console.log(document.documentElement.scrollTop);
  
  window.scrollTo({
    top: store.state.main.goodsScrollHeight[sort],
    behavior: "smooth"
})
};
watch(()=>sortTab.value,(newVal,oldVal)=>{
  console.log(newVal);
  store.commit('getGoodsScrollHeight',{type:oldVal,height: document.body.scrollTop || document.documentElement.scrollTop})
  if(store.state.main.goodsItem[newVal].length===0){
    store.dispatch("setGoodsData", { type: newVal, page: 1 });
  }
},{deep:true})
</script>
          
<style lang='less' scoped>
.home {
  .recommend {
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
    height: 120px;
    border-bottom: 8px solid #e2e2e2;
    .recommend__item {
      height: 80px;
      width: 80px;
      border-radius: 80px;
      .title {
        height: 20px;
        font-size: 14px;
        text-align: center;
        color: var(--font-color-S-H);
        text-shadow: var(--font-shadow-S-H);
      }
    }
  }
  .tabControl {
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-content: center;
    position: sticky;
    top: 49px;
    .tabControl__item {
      height: 40px;
      line-height: 40px;
      flex: 1;
      text-align: center;
      position: relative;
    }
    .activeItem:after {
      content: "";
      position: absolute;
      bottom: 0%;
      left: 50%;
      transform: translateX(-50%);
      width: 40%;
      height: 2px;
      background-color: var(--theme-color);
      animation: indexChange 0.3s ease-in-out;
    }
    @keyframes indexChange {
      50% {
        left: 60%;
      }
      75% {
        left: 40%;
      }
      100% {
        left: 50%;
      }
    }
  }
}
</style>