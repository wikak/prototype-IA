<template>
  <div id="app">
    <qrcode-capture @decode="onDecode"></qrcode-capture>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  methods: {
    onDecode(decodedString) {
      window.location.href = decodedString;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
