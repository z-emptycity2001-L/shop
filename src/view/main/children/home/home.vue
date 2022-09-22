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
    
  </div>
</template>
          
<script lang='ts' setup>
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import { ref } from "vue";
import Swiper from "../../../../components/swiper/swiper.vue";
const store = useStore();
const { banner } = store.state;
onMounted(() => {
  store.dispatch("setHomeData");
  //   console.log(store.state.main.banner);
});
</script>
          
<style lang='less' scoped>
.home {
  .recommend {
    display: flex;
    justify-content: space-around;
    height: 80px;
    margin: 10px;
    .recommend__item {
      height: 100%;
      width: 80px;
      border-radius: 80px;
      .title {
        font-size: 14px;
        text-align: center;
        color: var(--font-color-S-H);
        text-shadow:var(--font-shadow-S-H);
      }
    }
  }
}
</style>