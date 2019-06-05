<template>
  <div id="home">
      <qrcode />
  </div>
</template>

<script>
/* eslint-disable */
import qrcode from '@/qr-code'
export default {
  name: "Home",
  components: {
    'qrcode': qrcode,
  },
};
</script>

<style>
#home {
    margin: 50px 0;
    text-align: center
}
</style>
