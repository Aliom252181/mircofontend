<template>
  <div class="hello1">
    <p>vue version: {{ vueVersion }}, element version: {{ elementVersion }}</p>
    <h2>{{msg}}</h2>
    {{JSON.stringify(dataFromPortal)}}
  </div>
</template>

<script>
import ElementUI from "element-ui";
import Vue from "vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
    dataFromPortal: undefined
  },
  data() {
    return {
      vueVersion: Vue.version,
      elementVersion: ElementUI.version
    };
  }
};
</script>

<style lang="less" scoped>
.hello1 {
  h1 {
    color: aqua;
  }
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
