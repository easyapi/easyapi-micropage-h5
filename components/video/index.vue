<template>
  <view class="video-container">
    <view v-if="component.type === '视频'" class="nav-tw">
      <video v-if="component.sourceFrom == 1" class="avatar" :src="component.video.url" controls autoplay loop></video>
      <video v-if="component.sourceFrom == 2" class="avatar" :src="component.customUrl" controls autoplay loop></video>
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
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .video-container {
    margin: 5px 0 5px 0;
    width: 100%;
  }

  .avatar {
    width: 100%;
    height: 150px;
    border-radius: 5px;
  }
</style>
