<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/a852c3e5f2a4001dcf26ac9eaac185c9.png" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/0cd9a071a1ed04c821c7463e9fb60451.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/951dcd36e278f1e0242a0ab0ce913f51.jpeg" alt />
      </swiper-slide>
      <div class="swiper-pagination home-pagination text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!-- swiper end -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 tetx-drak-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item my-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="pt-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end nav icons -->

    <my-card icon="cc-menu-circle" title="新闻资讯">
      <div class="nav jc-between">
        <div class="nav-item active">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">新闻</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">公告</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">活动</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">赛事</div>
        </div>
      </div>
      <div class="pt-3">
        <swiper>
          <swiper-slide v-for="m in 5" :key="m">
            <div class="py-2" v-for="n in 5" :key="n">
              <span>[公告]</span>
              <span>|</span>
              <span>7月23日全服不停机更新公告</span>
              <span>06/02</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </my-card>
    <my-card icon="toukui" title="英雄列表"></my-card>
    <my-card icon="video" title="精彩视频"></my-card>
    <my-card icon="book" title="图文攻略"></my-card>
  </div>
</template>

<script>
import MyCard from "../components/Card";

export default {
  name: "home",
  components: {
    MyCard
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".home-pagination"
        },
        loop: true
      }
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_variables";

.home-pagination {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>
