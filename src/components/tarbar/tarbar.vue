<template>
  <div class="tarbar" @click="changeIndex">
    <div
      class="tarbar__item"
      v-for="(item, index) in tarbarItemName"
      :key="item.title"
    >
      <img
        :data-path="item.path"
        :data-index="index"
        :src="currentIndex == index ? item.Aurl : item.url"
        alt=""
        width="25"
        height="25"
      />
      <div
        :data-path="item.path"
        :data-index="index"
        :style="currentIndex == index ? styleL : AstyleL"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>
          
<script lang='ts' setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import imgs from "../../util/imgs";
import Imgs from "../../util/imgs";
type TarbarItemType = {
  title: string;
  url: string;
  Aurl: string;
  path:string
};
const tarbarItemName: TarbarItemType[] = [
  {
    title: "首页",
    url: Imgs.home,
    Aurl: Imgs.homeA,
    path:'/home'
  },
  {
    title: "分类",
    url: Imgs.category,
    Aurl: Imgs.categoryA,
    path:'/category'
  },
  {
    title: "商城",
    url: Imgs.shop,
    Aurl: Imgs.shopA,
    path:'/shop'
  },
  {
    title: "我的",
    url: imgs.my,
    Aurl: Imgs.myA,
    path:'/my'
  },
];
const styleL={
    color:"#f0478ae6"
}
const AstyleL={
    color:"black"
}
const currentIndex=ref<number>(0)
const router=useRouter()
const changeIndex=(e:any)=>{
    e.target.dataset.index? currentIndex.value=e.target.dataset.index:'';
    sessionStorage.setItem("currentPath",JSON.stringify(currentIndex.value))
    router.replace(e.target.dataset.path)
}

onMounted(()=>{
  if(JSON.parse(sessionStorage.getItem("currentPath") as string)){
    currentIndex.value=JSON.parse(sessionStorage.getItem("currentPath") as string)
  }
})

</script>
          
<style lang='less' scoped>
.tarbar {
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  .tarbar__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2px;
    height: 100%;
    flex: 1;
    div {
      margin-top: 2px;
    }
  }
}
</style>