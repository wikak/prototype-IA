<template>
  <div id="qr-code">
    <label class="qrcode-text-btn">
      <qrcode-capture @decode="onDecode"></qrcode-capture>
    </label>
  </div>
</template>

<script>
/* eslint-disable */
import router from "vue-router";
export default {
  name: "qr-code",
  methods: {
    onDecode(decodedString) {
      console.log(decodedString);
      //router.push({name: decodedString})
      //window.location.replace(decodedString)
      window.location.replace(decodedString);
      //(window.location.href = decodedString), true;
    }
  }
};
</script>

<style>
.qrcode-text-btn {
  display: inline-block;
  height: 3em;
  width: 5em;
  background: url(/img/capture.004dc5b6.png) no-repeat;
  cursor: pointer;
  background-size: contain;
  top: -5px;
  position: relative;
}
.qrcode-text-btn > input[type="file"] {
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  opacity: 0;
}
</style>
