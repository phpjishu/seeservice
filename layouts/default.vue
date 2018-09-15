<template>
  <div>
    <el-container class="xinyi-window">
      <el-header :style="{padding:0,backgroundColor:'#545c64'}">
        <el-container style="height:60px;">
          <el-aside :width="getMneuWidth" :style="{textAlign:'center'}">
            <img class="logo" src="../static/logo.png"/>
          </el-aside>
          <el-main class="pp-header" >
            这是一个有趣的社区
          </el-main>
        </el-container>
      </el-header>
      <el-container>
        <el-aside class="pp-aside" :width="getMneuWidth" :style="{backgroundColor:'#545c64'}">
          <el-menu default-active="1" class="el-menu-vertical-xinyi" @open="handleOpen" @close="handleClose"
                   @select="handleSelect"
                   :collapse="isCollapse"
                   :router="true"
                   :unique-opened="true"
                   background-color="#545c64"
                   text-color="#fff"
                   active-text-color="#ffd04b">
            <div v-for="(item ,index) in menus.menus" :key="index">
              <el-submenu :index="'menu-'+index" v-if="item.submenu">
                <template slot="title">
                  <i v-if="item.icon" :class="item.icon"></i>
                  <span slot="title">{{item.title}}</span>
                </template>
                <el-menu-item-group :title="item.submenu.title">
                  <el-menu-item :index="menu.path" v-for="(menu,mindex) in item.submenu.items" :key="mindex"  :route="menu.path">
                    <i :class="menu.icon"></i> {{menu.title}}
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="3" v-else :route="item.path">
                <i :class="item.icon"></i>
                <span slot="title">{{item.title}}</span>
              </el-menu-item>
            </div>
          </el-menu>
        </el-aside>
        <el-main>
          <nuxt/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isCollapse: false,
        activeIndex: '1',
        menus: require('@/pages/menu.json')
      };
    },
    computed: {
      getMneuWidth() {
        return this.isCollapse === true ? '64px' : '200px';
      },
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>

</style>

