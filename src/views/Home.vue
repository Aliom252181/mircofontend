<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/image/logo.png" />
    <HelloWorld :msg="msg" :dataFromPortal="dataFromPortal" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/interface/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      dataFromPortal: null,
      msg: ""
    };
  },
  components: {
    HelloWorld
  },
  mounted() {
    try {
      this.dataFromPortal = this.$getUserInfo();
      this.msg = "从注册中心传递来的数据";
    } catch (error) {
      this.dataFromPortal = this.$store.state.userInfo;
      this.msg = "demo子程序自己的数据";
    }
  }
};
</script>
