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
        <router-link tag="div" :to="`/articles/${news._id}`" class="py-2 fs-lg d-flex" v-for="(news, index) in category.newsList" :key="index">
          <span class="text-info">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{news.title}}</span>
          <span class="text-grey-1 fs-sm">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </card-list>

    <card-list icon="toukui" title="英雄列表" :categories="heroList">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem;">
          <router-link tag="div" :to="`/heroes/${hero._id}`" class="p-2 text-center" style="width: 20%;" v-for="(hero, index) in category.heroList" :key="index">
            <img :src="hero.avatar" class="w-100">
            <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </card-list>

    <my-card icon="video" title="精彩视频"></my-card>
    <my-card icon="book" title="图文攻略"></my-card>
  </div>
</template>

<script>
import MyCard from "../components/Card";
import CardList from "../components/CardList";
import dayjs from "dayjs";

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
      cateList: [],
      heroList: []
    };
  },
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    }
  },
  methods: {
    async fetchCateList() {
      const res = await this.$http.get("news/list");
      this.cateList = res.data;
    },
    async fetchHeroList() {
      const res = await this.$http.get("heroes/list");
      this.heroList = res.data;
    }
  },
  created() {
    this.fetchCateList();
    this.fetchHeroList();
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
