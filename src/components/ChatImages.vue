<template>
  <div>
    <div class="message-image" v-for="image in images" :key="image.id" @click="showLightbox()">
      <div class="message-hover">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0801 19.5C15.4984 19.5 19.0801 15.9183 19.0801 11.5C19.0801 7.08172 15.4984 3.5 11.0801 3.5C6.6618 3.5 3.08008 7.08172 3.08008 11.5C3.08008 15.9183 6.6618 19.5 11.0801 19.5Z"
            stroke="#B4B4B4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.08 21.5L16.73 17.15"
            stroke="#B4B4B4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <img :src="image.path" />
    </div>

    <template v-if="lightboxShown">
      <ImageLightbox :images="images" @close-lightbox="hideLightbox" />
    </template>
  </div>
</template>

<script>
import ImageLightbox from "@/components/ImageLightbox";

export default {
  name: "ChatImages",
  props: ["images"],
  components: {
    ImageLightbox
  },
  data() {
    return {
      lightboxShown: false
    };
  },
  methods: {
    showLightbox() {
      this.lightboxShown = true;
    },
    hideLightbox() {
      this.lightboxShown = false;
    }
  }
};
</script>

<style lang="scss">
.message-image {
  display: inline-block;
  margin: 1em 0.5em 0 0;
  border: 3px solid #ffffff;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 0.583932px 0.996119px rgba(0, 0, 0, 0.0441126),
    0px 1.47681px 2.51926px rgba(0, 0, 0, 0.0529148),
    0px 3.01255px 5.13905px rgba(0, 0, 0, 0.0550934),
    0px 6.20528px 10.5855px rgba(0, 0, 0, 0.0562822),
    0px 17px 29px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  width: 50px;
  height: 50px;

  img {
    display: block;
    max-width: 100%;
  }

  .message-hover {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: all 0.2s ease-out;

    svg path {
      stroke: white;
    }
  }

  &:hover {
    .message-hover {
      opacity: 1;
    }
  }
}
</style>