<template>
  <div class="main">
    <input id="input" value="" name="" />
    <button>你好</button>
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
    input{
      width:100px;
    }
  }
</style>
