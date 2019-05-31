<template>
  <div id="app">
    <b-container class="block__oeuvres">
      <b-row class="vues">
        <b-col>
          <div :key="artefact.id" v-for="artefact in artefacts">
            <img style="
" :src="require(`${artefact}`)">
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col style="background-color: #010E34;">
          <div :key="oeuvre.id" v-for="oeuvre in oeuvres" style="text-align : center">
            <img style="
            width: 245px;
    height: auto;
" :src="require(`${oeuvre}`)">
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div :key="name.id" v-for="name in artist_name">
            <div class="artist_name">{{name}}</div>
          </div>
        </b-col>-
        <b-col>
          <div :key="name.id" v-for="name in art_name">
            <div>{{name}}</div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div :key="description.id" v-for="description in descriptions">
            <div>{{description}}</div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="block__hastag">
      <b-row>
        <b-col class="grey bold" :key="tags.id" v-for="tags in hastags">{{tags}}</b-col>
      </b-row>
    </b-container>
    <b-container class="block__action">
      <b-row>
        <b-col :key="images.id" v-for="(images, index) in icones_bottom">
          <a href="#" v-if="index == 1">
            <label class="qrcode-text-btn">
              <qrcode-capture @decode="onDecode"></qrcode-capture>
            </label>
          </a>
          <a href="#" v-else>
            <img width="52px" :src="require(`${images}`)">
          </a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import data from "./components/data.js";
//console.log(data)
export default {
  computed: {
    icones_bottom() {
      return data.images_bottom.map(item => {
        return item.text;
      });
    },
    hastags() {
      return data.tags.map(item => {
        return item.text;
      });
    },
    artist_name() {
      return data.artist_name.map(item => {
        return item.text;
      });
    },
    art_name() {
      return data.art_name.map(item => {
        return item.text;
      });
    },
    descriptions() {
      return data.description.map(item => {
        return item.text;
      });
    },
    oeuvres() {
      return data.oeuvres.map(item => {
        return item.text;
      });
    },
    artefacts() {
      return data.artefact.map(item => {
        return item.text;
      });
    }
  },
  methods: {
    onDecode(decodedString) {
      (window.location.href = decodedString), true;
    }
  }
};
</script>

<style>
#app {
  font-family: "GT Walsheim Pro", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  font-size: 20px;
}
.block__hastag {
  margin: 15px 0;
}
.grey {
  color: #c7c7c7;
}
.bold {
  font-weight: bold;
  font-size: 15px;
}
/**.block__oeuvres div:nth-child(1),
.block__oeuvres div:nth-child(2) {
  display: inline-block;
}
.block__oeuvres div:nth-child(2) {
  padding-left: 25px;
}
.block__oeuvres div:nth-child(1) .col div {
  
} **/
.artist_name {
  background-color: #e3c4a8;
  color: #fff;
  border-radius: 15px;
  padding: 1px 10px;
  text-align: center;
}

.block__oeuvres div:nth-child(3) {
  margin-top: 25px;
}
.vues {
  position: relative;
}
.vues img {
  padding: 5px 17px;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 99;
}
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
