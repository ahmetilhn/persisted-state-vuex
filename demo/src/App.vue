<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <button @click="setStore">Set store</button>
  <button @click="setTestData">Set test data</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    setStore() {
      this.$store.commit("setExampleData", { name: "ahmet" });
    },
    setTestData() {
      this.$store.commit("setTestData", { name: "test" });
    },
  },
  mounted() {
    console.log(this.$store.state);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  width: 100px;
}
</style>
