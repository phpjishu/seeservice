<template>
  <section class="xinyi-container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>文章</span>
        <el-button style="float: right; padding: 3px 0" type="text">详细统计</el-button>
      </div>
      <div>
        <el-row :gutter="20">
          <el-col :xs="12" :span="6" class="countup">
            <div class="countupttle">
              <ICountUp
                :startVal="0"
                :endVal="1222"
                :decimals="decimals"
                :duration="duration"
                :options="options"
                @ready="onReady"
              />
            </div>
            <div class="countuplabel">
              文章总数
            </div>
          </el-col>
          <el-col :xs="12" :span="6" class="countup">
            <div class="countupttle">
              <ICountUp
                :startVal="0"
                :endVal="1222"
                :decimals="decimals"
                :duration="duration"
                :options="options"
                @ready="onReady"
              />
            </div>
            <div class="countuplabel">
              今日新增
            </div>
          </el-col>
          <el-col :xs="12" :span="6" class="countup">
            <div class="countupttle">
              <ICountUp
                :startVal="0"
                :endVal="1222"
                :decimals="decimals"
                :duration="duration"
                :options="options"
                @ready="onReady"
              />
            </div>
            <div class="countuplabel">
              今日访问
            </div>
          </el-col>
          <el-col :xs="12" :span="6" class="countup">
            <div class="countupttle">
              <ICountUp
                :startVal="0"
                :endVal="1222"
                :decimals="decimals"
                :duration="duration"
                :options="options"
                @ready="onReady"
              />
            </div>
            <div class="countuplabel">
              今日收藏
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card class="box-card" shadow="hover" style="margin-top: 10px;">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </el-card>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        decimals: 0,
        duration: 2.5,
        options: {}
      };
    },
    methods: {
      onReady: function (instance, CountUp) {
        const that = this;
        console.log(' onReady: function (instance, CountUp) ', instance, CountUp)
        instance.update(that.endVal + 100);
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>

<style lang="less">
  .iCountUp {
    font-size: 12em;
    margin: 0;
    color: #4d63bc;
  }
</style>

