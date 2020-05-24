<template>
  <div>
    <div
      @click="isOpen=!isOpen"
      :class="['section-toggle', { 'section-toggle--open' : isOpen, 'section-toggle--border-top' : borderTop}]"
    >
      <div class="section-toggle__start">
        <strong>
          {{name}}
          <span class="amount-number">({{amount}})</span>
        </strong>
      </div>
      <div class="section-toggle__end">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.0801 15.5L12.0801 9.5L6.08008 15.5"
            stroke="#575757"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <section v-if="isOpen">
      <slot></slot>
    </section>
  </div>
</template>

<script>
export default {
  name: "SectionToggle",
  props: ["name", "amount", "open", "borderTop"],
  data() {
    return {
      isOpen: this.open
    };
  }
};
</script>

<style lang="scss">
.section-toggle {
  font-size: 0.875rem;
  padding: 0 1.5em;
  align-items: center;
  display: flex;
  height: 50px;
  color: #393939;
  position: relative;
  background: var(--divider-background-color);
  color: black;
  border-bottom: 1px solid #dadada;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #ececec;
  }

  &__start {
    display: flex;
    align-items: center;
  }

  &__end {
    margin-left: auto;
  }

  svg {
    transform: rotate(180deg);
    margin-left: 0.35em;
    margin-top: -0.125em;
    margin-bottom: -0.125em;
    display: block;
  }

  &--border-top {
    border-top: 1px solid #dadada;
  }

  &--open {
    svg {
      transform: none;
    }
  }
}
</style>