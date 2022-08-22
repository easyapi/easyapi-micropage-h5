<template>
  <view class="nav-container"
    :style="{padding:component.padding,borderRadius:component.borderRadius,backgroundColor:component.bgColor}">
    <view v-for="(item,index) in component.items" :style="{width:width}">
      <view class="nav-item">
        <image v-if="item.model !== 'KeFu'" :src="item.img" mode="widthFix"></image>
        <button open-type="contact" class="button_img" v-if="item.model === 'KeFu'">
          <image :src="item.img" mode="widthFix"></image>
        </button>
        <view class="text" :style="{color:component.fontColor}">{{item.name}}</view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: ["component"],
    data() {
      return {
        Active: 0,
        width: ""
      }
    },
    methods: {},
    created() {
      this.width = Math.floor(100 / this.component.size) + "%"
      this.component.padding = this.component.padding.replace(/px/g, "rpx")
      this.component.borderRadius = this.component.borderRadius.replace(/px/g, "rpx")
    }
  }
</script>

<style lang="scss" scoped>
  .nav-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .nav-item {
    text-align: center;
    margin-top: 20rpx;
  }

  image {
    text-align: center;
    width: 80%;
    padding: 0;
    margin: 0;
    vertical-align: top;
  }

  .button_img {
    padding: 0;
    margin: 0;
    background-color: #fff;
  }

  .button_img::after {
    border: none;
  }

  .text {
    margin-top: 5px;
  }
</style>
