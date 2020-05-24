<template>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <button class="modal-close" @click="closeModal">
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
      </button>
      <div class="modal-header">
        <h2>{{ title }}</h2>
      </div>
      <div class="modal-body">
        <slot name="modal-body" />
      </div>
      <div class="modal-footer">
        <button @click="closeModal" class="btn btn--secondary">Cancel</button>
        <div class="modal-footer-buttons">
          <slot name="modal-footer-buttons" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    hasError: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    }
  }
};
</script>

<style lang="scss">
$modal-padding: 1.5em;

.modal {
  position: relative;
  z-index: 40;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  bottom: 0;
}

.modal-content {
  max-width: 450px;
  width: 100%;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  left: 50%;
  transform: translate(-50%, 5em);
}

.modal-header {
  padding: $modal-padding $modal-padding 0 $modal-padding;

  h2 {
    max-width: 90%;
    font-size: 1.25rem;
    line-height: normal;
  }
}

.modal-body {
  padding: $modal-padding $modal-padding 2em;
}

.modal-footer {
  /* border-top: 1px solid grey; */
  background: #ececec;
  padding: $modal-padding $modal-padding $modal-padding;
  display: flex;
  align-items: center;

  .modal-footer-buttons {
    margin-left: auto;
  }
}

.modal-close {
  position: absolute;
  right: 1.75em;
  top: 1.75em;
}
</style>