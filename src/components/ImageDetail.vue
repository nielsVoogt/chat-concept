<template>
  <div class="image-detail">
    <div class="image-detail__image">
      <img :src="path" />
    </div>
    <div class="image-detail__details">
      <strong class="image-detail__name">{{ name }}</strong>
      <span class="image-detail__specs">{{ type }} | {{ size }}</span>
      <a href="#" class="image-detail__download flex">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.79 9.25V11.5833C12.79 11.8928 12.6671 12.1895 12.4483 12.4083C12.2295 12.6271 11.9328 12.75 11.6234 12.75H3.45671C3.14729 12.75 2.85054 12.6271 2.63175 12.4083C2.41296 12.1895 2.29004 11.8928 2.29004 11.5833V9.25"
            stroke="#365A9E"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.62329 6.33334L7.53996 9.25L10.4566 6.33334"
            stroke="#365A9E"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.54004 9.25V2.25"
            stroke="#365A9E"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Download
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageDetail",
  props: ["type", "name", "path", "size"]
};
</script>

<style lang="scss">
.image-detail {
  font-size: 14px;
  display: flex;
  margin: 1.5em;

  + #{&} {
    margin-top: 1em;
  }

  &__image {
    width: 50px;
    height: 50px;
    border: 2px solid #ffffff;
    box-shadow: 0px 1.47681px 2.51926px rgba(0, 0, 0, 0.0529148),
      0px 6.20528px 10.5855px rgba(0, 0, 0, 0.0562822);
    border-radius: 5px;
    overflow: hidden;
  }

  &__details {
    padding-left: 0.75em;
  }

  &__download {
    color: #365a9e;
    font-size: 0.75rem;
    margin-top: 0.25em;

    svg {
      margin-right: 0.5em;
    }
  }

  &__name {
    display: block;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 170px;
  }

  &__specs {
    color: #848484;
    font-size: 12px;
  }
}
</style>