<template>
  <div :class="['contact-link', {'contact-link--active': active}]">
    <div class="contact-link__image">
      <div class="new-message-notification" v-if="unread"></div>
      <img src="https://placeimg.com/50/50/people" />
    </div>
    <div class="contact-link__details">
      <strong>{{name}}</strong>
      <small>{{topicCount || 0}} topics</small>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactLink",
  props: ["name", "topics", "topic-count", "unread", "active"]
};
</script>


<style lang="scss">
.contact-link {
  color: #ffffff;
  padding: 0.75em 1.5em;
  line-height: 1;
  align-items: center;
  display: flex;
  border-bottom: 1px solid rgba(#ffffff, 0.1);
  cursor: pointer;

  &__image {
    position: relative;

    img {
      border: 1px solid #ffffff;
      width: 45px;
      height: 45px;
      border-radius: 45px;
    }

    .new-message-notification {
      position: absolute;
      right: 0;
      width: 12px;
      height: 12px;
      border-radius: 12px;
      background: var(--notification-background-color);
    }
  }

  &__details {
    padding-left: 1em;

    strong {
      display: block;
      margin-bottom: 0.25em;
      display: flex;

      svg {
        margin-left: 0.5em;
      }
    }

    small {
      color: #b3b3b3;
    }

    .notification-label {
      font-size: 10px;
      margin-left: 0.5em;
    }
  }

  &--active {
    background: #2b2b2b;
    pointer-events: none;
  }

  &:hover {
    background: #2b2b2b;
  }
}
</style>