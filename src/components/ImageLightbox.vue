<template>
  <fragment>
    <div class="close-lightbox" @click="closeLightbox">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-x"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </div>
    <VueSlickCarousel :arrows="true" :dots="false">
      <div v-for="image in images" :key="image.id" class="image-ligthbox-container">
        <div>
          <img :src="image.path" />
          <div class="image-details">
            <div>
              <div>{{ image.name }}</div>
              <small>{{ image.size }} Bytes</small>
            </div>
            <button class>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-download"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </fragment>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  name: "ImageLightbox",
  props: ["images"],
  components: {
    VueSlickCarousel
  },
  methods: {
    closeLightbox() {
      this.$emit("close-lightbox");
    }
  }
};
</script>

<style lang="scss">
.close-lightbox {
  position: absolute;
  right: 2em;
  top: 2em;
  color: white;
  z-index: 2;
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
}

.image-details {
  color: white;
  background: white;
  border-radius: 10px;
  padding: 1em;
  color: black;
  line-height: 1;
  display: flex;
  align-items: center;
  margin-top: 1em;

  p {
    margin-bottom: 0.5em;
  }

  small {
    opacity: 0.7;
    margin-top: 0.5em;
    display: block;
  }

  button {
    margin-left: auto;
  }
}

.image-ligthbox-container {
  display: inline-flex !important;
  justify-content: center;
  align-items: center;
}

.slick-slider {
  position: fixed !important;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 10;
  display: flex !important;
  align-items: center;
  justify-content: center;

  .slick-slide {
    img {
      border-radius: 10px;
    }
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>