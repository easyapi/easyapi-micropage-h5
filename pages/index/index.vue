<template>
  <view class="container-view">
    <block v-for="item in pageComponents" v-key="index">
      <tabNav v-if="item.type==='图文导航'" :component="item"></tabNav>
      <imageAd v-if="item.type==='图片广告'" :component="item"></imageAd>
      <titleText v-if="item.type==='标题文本'" :component="item"></titleText>
      <cube v-if="item.type==='魔方'" :component="item"></cube>
      <videoComponent v-if="item.type==='视频'" :component="item" style="width:100%;height:150px"></videoComponent>
      <productList v-if="item.type==='商品'" :component="item" :url="true"></productList>
      <richText v-if="item.type==='富文本'" :component="item"></richText>
    </block>
  </view>
</template>

<script>
  import {
    getMicroPageDetail
  } from "./@/api/micro-page.js"

  import {
    formatComponent
  } from "./@/utils/micro-page.js"

  import cube from "../../components/cube/index.vue"
  import tabNav from "../../components/tab-nav/index.vue"
  import imageAd from "../../components/image-ad/index.vue"
  import titleText from "../../components/title-text/index.vue"
  import videoComponent from "../../components/video/index.vue"
  import productList from "../../components/product-list/index.vue"
  import richText from "../../components/rich-text/index.vue"

  export default {
    components: {
      cube,
      tabNav,
      imageAd,
      titleText,
      videoComponent,
      productList,
      richText
    },
    data() {
      return {
        pageComponents: []
      }
    },
    methods: {
      getMicroPage(options) {
        var that = this
        let params = {
          accessToken: options.accessToken
        }
        getMicroPageDetail(params, options.id).then(res => {
          uni.setNavigationBarTitle({
            title: res.data.content.title
          })
          let pageComponents = []
          for (let pageComponent of res.data.content.pageComponents) {
            pageComponents.push(JSON.parse(pageComponent.data));
          }
          pageComponents = formatComponent(pageComponents)
          console.log(pageComponents)
          that.pageComponents = pageComponents

        })
      },
    },
    onLoad: function(options) {
      this.getMicroPage(options)
    },
  }
</script>

<style lang="scss" scoped>
  .container-view {
    background-color: #f4f4f4;
    height: auto;
  }
</style>
