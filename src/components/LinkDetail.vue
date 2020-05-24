<template>
  <div class="link-detail">
    <div class="link-detail__copy">
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.54 7.25008H8.79004C7.96161 7.25008 7.29004 7.92165 7.29004 8.75008V15.5001C7.29004 16.3285 7.96161 17.0001 8.79004 17.0001H15.54C16.3685 17.0001 17.04 16.3285 17.04 15.5001V8.75008C17.04 7.92165 16.3685 7.25008 15.54 7.25008Z"
          stroke="#818181"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.29004 11.7501H3.54004C3.14221 11.7501 2.76068 11.592 2.47938 11.3107C2.19807 11.0294 2.04004 10.6479 2.04004 10.2501V3.50008C2.04004 3.10225 2.19807 2.72072 2.47938 2.43942C2.76068 2.15811 3.14221 2.00008 3.54004 2.00008H10.29C10.6879 2.00008 11.0694 2.15811 11.3507 2.43942C11.632 2.72072 11.79 3.10225 11.79 3.50008V4.25008"
          stroke="#818181"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="link-detail__link">
      <a :href="url">{{ url }}</a>
    </div>
    <div class="link-detail__delete">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.41504 4.25002H3.66504H13.665"
          stroke="#C90000"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.54004 4.25002V3.00002C5.54004 2.66849 5.67174 2.35055 5.90616 2.11613C6.14058 1.88171 6.45852 1.75002 6.79004 1.75002H9.29004C9.62156 1.75002 9.9395 1.88171 10.1739 2.11613C10.4083 2.35055 10.54 2.66849 10.54 3.00002V4.25002M12.415 4.25002V13C12.415 13.3315 12.2833 13.6495 12.0489 13.8839C11.8145 14.1183 11.4966 14.25 11.165 14.25H4.91504C4.58352 14.25 4.26558 14.1183 4.03116 13.8839C3.79674 13.6495 3.66504 13.3315 3.66504 13V4.25002H12.415Z"
          stroke="#C90000"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.79004 7.37502V11.125"
          stroke="#C90000"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.29004 7.37502V11.125"
          stroke="#C90000"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "LinkDetail",
  props: ["url"]
};
</script>

<style lang="scss">
.link-detail {
  display: flex;
  margin: 1em 1.5em;
  font-style: italic;
  align-items: center;
  font-size: 14px;
  position: relative;
  margin-bottom: 1em;
  cursor: pointer;

  section &:first-child {
    margin-top: 1.5em;
  }

  &:before {
    content: "";
    left: -0.5em;
    right: -0.5em;
    top: -0.5em;
    bottom: -0.5em;
    border-radius: 5px;
    position: absolute;
    z-index: -1;
    background: #f9f9f9;
    pointer-events: none;
    opacity: 0;
  }

  &__copy {
    margin-right: 0.75em;
  }

  &__link {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
    flex: 1;
    padding-right: 0.5em;

    a {
      color: #3a6eaa;
    }
  }

  &__delete {
    margin-left: auto;
    opacity: 0;
  }

  $this: &;

  &:hover {
    &:before {
      opacity: 1;
    }
    #{$this}__delete {
      opacity: 1;
    }
  }
}
</style>