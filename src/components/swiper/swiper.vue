<template>
  <div>
    <swiper
      :loop="true"
      :autoplay="{ delay: 2000, disableOnInteraction: false }"
      id="swiper"
      :modules="modules"
      :pagination="{ clickable: true }"
    >
      <swiper-slide v-for="item in bannerList" :key="item.acm">
        <img :src="item.image" alt="" style="width: 100%" />
      </swiper-slide>
    </swiper>
  </div>
</template>
          
<script lang='ts' setup>
import { Swiper, SwiperSlide } from "swiper/vue";
// 引入swiper样式（按需导入）
import "swiper/css";
import "swiper/css/pagination"; // 轮播图底面的小圆点
import "swiper/css/navigation"; // 轮播图两边的左右箭头
import "swiper/css/scrollbar"; // 轮播图的滚动条
// 引入swiper核心和所需模块
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper";
const modules = [Autoplay, Pagination, Navigation, Scrollbar];

type PropsType={
    bannerList:any[]
}
defineProps<PropsType>()
</script>
          
<style lang='less' scoped>
</style>