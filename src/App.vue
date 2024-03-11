<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: calc(
    100% - constant(safe-area-inset-top) - constant(safe-area-inset-bottom)
  );
  height: calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));
  margin: 0px;
  padding: 0px;
  background: #f3f4f6;
  overflow: hidden;
}
#app {
  font-size: 14px;
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
