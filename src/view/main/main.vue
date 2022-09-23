<template>
  <div class="main">
    <div class="main-title">
      <div class="title-content">广武街</div>
    </div>
    <div>
      <div class="main-context">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <transition name="fade" mode="out-in">
              <div :key="route.path">
                <component :is="Component" />
              </div>
            </transition>
          </keep-alive>
        </router-view>
      </div>
    </div>
    <div class="main-tabbar">
      <Tarbar />
    </div>
  </div>
</template>
          
<script lang='ts' setup>
import { useRoute } from "vue-router";
import Tarbar from "../../components/tarbar/tarbar.vue";
const route = useRoute();
</script>
          
<style lang='less' scoped>
.main {
  position: relative;
  height: 100%;
  margin-top: 49px;
  .main-title {
    height: 49px;
    background-color: rgb(232, 55, 117);
    display: flex;
    justify-content: center;
    align-content: center;
    box-shadow: 0 1px 3px #a49f9f;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 99;
    .title-content {
      font-size: 16px;
      line-height: 49px;
    }
  }

  .main-tabbar {
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: 0 -1px 3px #dadada;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>