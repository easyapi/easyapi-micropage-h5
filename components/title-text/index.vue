<template>
  <view class="title-container"
    :style="{padding:component.padding,borderRadius:component.borderRadius,backgroundColor:component.bgColor}">
    <view v-if="component.type === '标题文本'" class="title">
      <view class="title-title">{{ component.title }}</view>
    </view>
  </view>
</template>

<script>
  export default {
    props: ["component"],
    data() {
      return {

      }
    },
    methods: {},
    created() {
      this.component.padding = this.component.padding.replace(/px/g, "rpx")
      this.component.borderRadius = this.component.borderRadius.replace(/px/g, "rpx")
    }
  }
</script>

<style lang="scss" scoped>
  .title-container {
    margin: 5px 0 5px 0;
    width: 100%;
  }


  .title {
    padding: 20rpx 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .title-title {
    padding-left: 20rpx;
    border-left: 4px solid var(--theme-color);
    font-size: 32rpx;
    font-weight: bold;
  }

  .title-more {
    padding-right: 10rpx;
    padding-top: 10rpx;
  }

  .title-more>text {
    color: #A8A8A8;
    font-size: 24rpx;
    margin-right: 10rpx;
  }
</style>
