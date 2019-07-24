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

    <card-list icon="cc-menu-circle" title="新闻资讯" :categories="cateList">
      <template #items="{category}">
        <div class="py-2" v-for="(item, index) in category.newsList" :key="index">
          <span>[{{item.categoryName}}]</span>
          <span>|</span>
          <span>{{item.title}}</span>
          <span>{{item.date}}</span>
        </div>
      </template>
    </card-list>
    <my-card icon="toukui" title="英雄列表"></my-card>
    <my-card icon="video" title="精彩视频"></my-card>
    <my-card icon="book" title="图文攻略"></my-card>
  </div>
</template>

<script>
import MyCard from "../components/Card";
import CardList from "../components/CardList";

export default {
  name: "home",
  components: {
    MyCard,
    CardList
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".home-pagination"
        },
        loop: true
      },
      cateList: [
        {
          name: '热门',
          newsList: new Array(5).fill(null).map(() => ({
            categoryName: '公告',
            title: '6月2日全服不停机更新公告',
            date: '06/01'
          }))
        },
        {
          name: '新闻',
          newsList: new Array(5).fill(null).map(() => ({
            categoryName: '新闻',
            title: '6月2日全服不停机更新公告',
            date: '06/01'
          }))
        },
        {
          name: '公告',
          newsList: new Array(5).fill(null).map(() => ({
            categoryName: '公告',
            title: '6月2日全服不停机更新公告',
            date: '06/01'
          }))
        },
        {
          name: '活动',
          newsList: new Array(5).fill(null).map(() => ({
            categoryName: '公告',
            title: '6月2日全服不停机更新公告',
            date: '06/01'
          }))
        },
        {
          name: '赛事',
          newsList: new Array(5).fill(null).map(() => ({
            categoryName: '公告',
            title: '6月2日全服不停机更新公告',
            date: '06/01'
          }))
        }
      ]
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
