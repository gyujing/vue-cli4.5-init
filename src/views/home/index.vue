<template>
  <div class="main">
    首页
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },

  mounted() {
    console.log(process.env.NODE_ENV)
    console.log(process.env.VUE_APP_API_URL)
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
  .main{
    color:red;
  }
</style>
