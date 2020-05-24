<template>
  <div :class="['topic-list-item', { 'topic-list-item--active' : active }]">
    <div class="topic-list-item__start">
      <strong>
        {{name}}
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          v-if="locked"
        >
          <path
            d="M10.8317 6.45833H3.24837C2.65006 6.45833 2.16504 6.94335 2.16504 7.54166V11.3333C2.16504 11.9316 2.65006 12.4167 3.24837 12.4167H10.8317C11.43 12.4167 11.915 11.9316 11.915 11.3333V7.54166C11.915 6.94335 11.43 6.45833 10.8317 6.45833Z"
            stroke="#848484"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.33179 6.45833V4.29166C4.33179 3.57337 4.61713 2.88449 5.12504 2.37658C5.63295 1.86867 6.32183 1.58333 7.04012 1.58333C7.75841 1.58333 8.44729 1.86867 8.9552 2.37658C9.46311 2.88449 9.74845 3.57337 9.74845 4.29166V6.45833"
            stroke="#848484"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </strong>
    </div>
    <div class="topic-list-item__end">
      <span class="notification-label" v-if="messages">{{messages}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopicListItem",
  props: ["name", "messages", "locked", "active"]
};
</script>

<style lang="scss">
.topic-list-item {
  font-size: 0.875rem;
  padding: 0 1.5em;
  align-items: center;
  display: flex;
  height: 50px;
  color: #393939;
  position: relative;

  strong {
    transition: all 0.2s ease-out;
    display: flex;
    align-items: center;
  }

  &:hover {
    strong {
      transform: translateX(3px);
    }
  }

  &::before {
    bottom: 0;
    left: 0;
    top: 0;
    position: absolute;
    background: #0d37cc;
    width: 5px;
  }

  section &:nth-child(odd) {
    background: #fbfbfb;
  }

  &__start {
    display: flex;
    align-items: center;

    svg {
      margin-left: 0.35em;
    }
  }

  &__end {
    margin-left: auto;
  }

  &--active::before {
    content: "";
  }

  &--locked {
    height: 60px;
  }
}
</style>