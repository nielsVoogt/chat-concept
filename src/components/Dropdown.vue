<template>
  <div
    :class="['dropdown-container', { 'dropdown-container--open' : isOpen }]"
    @mouseleave="closeDropdown"
  >
    <button @click="isOpen=!isOpen">
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20.79" cy="12.5" r="2.5" fill="#A8A8A8" />
        <circle cx="12.79" cy="12.5" r="2.5" fill="#A8A8A8" />
        <circle cx="4.79004" cy="12.5" r="2.5" fill="#A8A8A8" />
      </svg>
    </button>
    <div class="dropdown" v-if="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    closeDropdown() {
      this.isOpen = false;
    }
  }
};
</script>

<style lang="scss">
.dropdown-container {
  position: relative;

  button:hover svg circle {
    fill: #0d37cc;
  }

  &--open svg circle {
    fill: #0d37cc;
  }
}

.dropdown {
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 0.583932px 0.996119px rgba(0, 0, 0, 0.0441126),
    0px 1.47681px 2.51926px rgba(0, 0, 0, 0.0529148),
    0px 3.01255px 5.13905px rgba(0, 0, 0, 0.0550934),
    0px 6.20528px 10.5855px rgba(0, 0, 0, 0.0562822),
    0px 0px 29px rgba(0, 0, 0, 0.07);
  border-radius: 5px;
  right: 0;
  overflow: hidden;

  li {
    + li {
      border-top: 1px solid #f7f7f7;
    }

    &:hover {
      background: #f7f7f7;
    }
  }

  a {
    white-space: nowrap;
    padding: 0.75em 1em;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #505050;

    svg {
      margin-right: 0.5em;
    }
  }
}

button {
  appearance: none;
  border: 0;
  margin: 0;
  padding: 0;
  display: flex;
}
</style>
