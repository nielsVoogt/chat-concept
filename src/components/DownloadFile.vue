<template>
  <div class="download-file">
    <div class="download-file__name">{{ name }} | {{ size }}</div>
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.8301 11.5972V14.5972C15.8301 14.995 15.672 15.3765 15.3907 15.6578C15.1094 15.9391 14.7279 16.0972 14.3301 16.0972H3.83008C3.43225 16.0972 3.05072 15.9391 2.76942 15.6578C2.48811 15.3765 2.33008 14.995 2.33008 14.5972V11.5972"
        stroke="#848484"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.33008 7.84717L9.08008 11.5972L12.8301 7.84717"
        stroke="#848484"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.08008 11.5972V2.59717"
        stroke="#848484"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "DownloadFile",
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.download-file {
  margin-top: 1em;
  display: flex;
  align-items: center;
  background: #efefef;
  border: 1px dashed #afafaf;
  border-radius: 5px;
  width: fit-content;
  padding: 0.25em 0.5em;
  font-weight: 400;
  color: #848484;

  svg {
    margin-left: 1em;
  }

  &:hover {
    cursor: pointer;
    svg path {
      stroke: green;
    }
  }
}
</style>