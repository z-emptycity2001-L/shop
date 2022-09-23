<template>
  <div class="goods" ref="vimNode">
    <div class="goodsItem" v-for="(item,index) in goods" :key="`item.shopId${index}`">
      <img :data-src="item.show.img" alt="" style="width: 100%; height: 100%" />
      <div class="goodsInfo"></div>
    </div>
  </div>
</template>
          
<script lang='ts' setup>
import { computed, onMounted } from "@vue/runtime-core";
import { ref } from "vue";
import { useStore } from "vuex";

type GoodsItemType = {
  goods: any[];
  sort: string;
};
// const 
const props=defineProps<GoodsItemType>();
const vimNode = ref<any>(null);
const store = useStore();
const imageLoad = (domNode: any) => {
  const innerHeight = window.innerHeight;
  for (let i = 0; i < domNode.value!.children.length; i++) {
    let imgNode = domNode.value!.children[i]!.children[0];
    let imgTop = imgNode.getBoundingClientRect().top;
    if (imgTop < innerHeight) {
      const data_src = imgNode.getAttribute("data-src"); //将img节点的src设置为指定的图片链接
      imgNode.setAttribute("src", data_src);
    }
  }
  const scrollHeight =
    document.body.scrollTop || document.documentElement.scrollTop;
  const bodyHeight = document.body.scrollHeight;
  if (bodyHeight - scrollHeight <= 1000 && scrollHeight >= innerHeight) {
    store.dispatch("setGoodsData", { type: props.sort, page: Math.floor(props.goods.length/30)*1+1 });
  }
};
function throttle(fn: Function, delay: number, context?: any) {
  let flag = true;
  return function () {
    if (flag) {
      flag = false;
      setTimeout(() => {
        flag = true;
        fn(context);
      }, delay);
    }
  };
}
window.addEventListener(
  "scroll",
  throttle(imageLoad, 200, vimNode) //dom为节点标签
);
const computeData=computed(()=>{

})
</script>
          
<style lang='less' scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px 5px;
  gap: 5px;
  .goodsItem {
    width: calc(50% - 5px);
  }
}
</style>