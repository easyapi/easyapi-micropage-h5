<template>
  <view class="product flex-r" :style="{padding:component.padding}">
    <view class='product-list flex-r space-between'>
      <view v-if="url==true" class="product-list_item flex-c"
        :style="{width:component.size==2?'calc(50%-10rpx)':'230rpx'}" v-for="item in component.products">
        <image :style="{height:component.size==2?'340rpx':'230rpx'}" lazy-load="true" :src='item.img+"!big.jpg"'
          mode='scaleToFill'></image>
        <view class="product_name multi-omit" v-if="item.grouponState == 1 && item.umpActivity.type == 'groupon'">
          <van-tag type="warning">拼团</van-tag>
          <text class="m-left-20">{{item.name}}</text>
        </view>
        <view class="product_name multi-omit" v-else-if="item.limitDiscountState == 1">
          <van-tag type="warning">折扣</van-tag>
          <text class="m-left-20">{{item.name}}</text>
        </view>
        <view class="product_name multi-omit" v-else-if="item.ifCoupon">
          <van-tag type="warning">领券</van-tag>
          <text class="m-left-20">{{item.name}}</text>
        </view>
        <view class="product_name multi-omit" v-else-if="item.ifReward">
          <van-tag type="warning">满减</van-tag>
          <text class="m-left-20">{{item.name}}</text>
        </view>
        <view class="product_name multi-omit" v-else>
          {{item.name}}
        </view>

        <view class='product_price space-between flex-r'>
          <view class='flex-c'>
            <view class='mid-align flex-r' v-if="item.umpActivity && item.umpActivity.type == 'groupon'">
              <text class="groupon-price">拼团价：</text>
              <text class='info-price'><text style="font-size:30rpx">￥</text>{{item.umpActivity.price}}</text>
            </view>
            <view class='mid-align flex-r' wx:else>
              <text class='info-price' v-if="item.type != '展示商品'"><text
                  style="font-size:30rpx">￥</text>{{item.finalPrice.price}}</text>
              <text class='fz--invalid' v-if="item.type != '展示商品'">
                ¥{{item.finalPrice.linePrice}}</text>
              <text class='fz--invalid' v-if="item.type == '展示商品'"
                style="text-decoration:none;margin-bottom:10px">购买请咨询客服</text>
            </view>
          </view>
        </view>
      </view>
      <view v-if="url==false" class="product-list_item flex-c" style="width:calc(50%-10rpx)"
        v-for="item in component.products">
        <image lazy-load="true" :style="{height:component.size==2?'230rpx':'340rpx'}" :src='item.img+"!big.jpg"'
          mode='scaleToFill'></image>
        <view class="product_name multi-omit" v-if="item.grouponState == 1 && item.umpActivity.type == 'groupon'">
          <van-tag type="warning">拼团</van-tag>
          <text class="m-left-20">{{item.name}}</text>
        </view>
        <view class="product_name multi-omit" v-else-if="item.limitDiscountState == 1">
          <van-tag type="warning">折扣</van-tag>
          <text class="m-left-20">{{item.name}}</text>
        </view>
        <view class="product_name multi-omit" v-else-if="item.ifCoupon">
          <van-tag type="warning">领券</van-tag>
          <text class="m-left-20">{{item.name}}</text>
        </view>
        <view class="product_name multi-omit" v-else-if="item.ifReward">
          <van-tag type="warning">满减</van-tag>
          <text class="m-left-20">{{item.name}}</text>
        </view>
        <view class="product_name multi-omit" v-else>
          {{item.name}}
        </view>

        <view class='product_price space-between flex-r'>
          <view class='flex-c'>
            <view class='mid-align flex-r' v-if="item.umpActivity && item.umpActivity.type == 'groupon'">
              <text class="groupon-price">拼团价：</text>
              <text class='info-price'><text style="font-size:30rpx">￥</text>{{item.umpActivity.price}}</text>
            </view>
            <view class='mid-align flex-r' v-else>
              <text class='info-price' v-if="item.type != '展示商品'"><text
                  style="font-size:30rpx">￥</text>{{item.finalPrice.price}}</text>
              <text class='fz--invalid' v-if="item.type != '展示商品'">
                ¥{{item.finalPrice.linePrice}}</text>
              <text class='fz--invalid' v-if="item.type == '展示商品'"
                style="text-decoration:none;margin-bottom:10px">购买请咨询客服</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: ["component", "url"],
    data() {
      return {

      }
    },
    methods: {},
    created() {
      this.component.padding = this.component.padding.replace(/px/g, "rpx")
    }
  }
</script>

<style lang="scss" scoped>
  .flex-r {
    display: flex;
    flex-direction: row;
  }

  .product-list {
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }

  .product-list_item {
    box-shadow: 0 0px 0px 0 rgb(250, 248, 248);
    transition: 0.3s;
    border-radius: 20rpx;
    background: #fff;
    margin-bottom: 15rpx;
    width: calc(50% - 10rpx);
  }

  .product-list>view:first-child {
    margin-left: 0rpx;
  }

  .product-list>view:nth-child(2n+1) {
    margin-left: 0rpx;
  }

  .product-list_item>image {
    width: 100%;
    border-radius: 15rpx 15rpx 0 0;
  }

  .product_name {
    padding: 0 16rpx;
    box-sizing: border-box;
    height: 66rpx;
    width: 100%;
    margin-top: 16rpx;
    line-height: 33rpx;
  }

  .product_price {
    padding: 0 10rpx;
    margin-top: 12rpx;
  }

  .fz-14 {
    font-size: 28rpx;
  }

  .fz-10 {
    font-size: 20rpx;
  }

  .fz-w {
    font-weight: bold;
  }

  .fz-cl-main {
    color: #e8370d;
  }

  .fz-cl-lg {
    color: #aeaeae;
  }

  .pd-l-5 {
    padding-left: 5px;
  }

  .multi-omit {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .space-between {
    justify-content: space-between;
  }

  .single-omit {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .product_top {
    height: 36rpx;
  }

  .mid-align {
    display: flex;
    align-items: Center;
  }

  .fz--invalid {
    text-decoration: line-through;
  }

  .fz-cl-gray {
    color: #999;
  }

  .info-price {
    color: red;
    font-size: 36rpx;
    font-weight: bold;
    margin-right: 15rpx
  }

  .fz--invalid {
    text-decoration: line-through;
    margin-top: 10rpx;
    color: #b2b2b2;
  }

  .flex-t {
    margin: 5rpx 0 0 10rpx
  }

  .footer {
    padding: 10rpx 0;
  }

  .footer text:first-child {
    padding-left: 0;
  }

  .txt {
    padding: 0 10rpx;
    font-weight: Regular;
    color: var(--theme-color);
    border-right: 2rpx solid var(--theme-color);
  }

  .footer text:last-child {
    border: none;
  }

  .footer-right {
    display: inline-block;
    border: 1px solid #E5003D;
    border-radius: 20rpx;
    padding: 0 5rpx;
  }

  .footer-right .van-tag {
    line-height: 34rpx;
    color: #E5003D;
  }

  .footer-right .diamond {
    text-align: center;
    width: 40rpx;
    height: 100%;
    color: var(--theme-color);
    font-size: 25rpx;
  }

  .me-tao {
    padding: 5rpx 10rpx;
    background: #6E28FF;
    color: #fff;
    font-size: 18rpx !important;
    line-height: 24rpx;
    text-align: center;
    border-radius: 6rpx;
  }

  .m-left-20 {
    margin-left: 20rpx;
  }

  .groupon-price {
    color: #b2b2b2;
    font-size: 26rpx;
  }
</style>
