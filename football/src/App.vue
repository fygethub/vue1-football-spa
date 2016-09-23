<template>
  <div id="app">
      <p v-if="$authenticating">加载中。。。</p>
      <router-view v-if="!$authenticating"></router-view>
  </div>
</template>

<script></script>

<style></style>
