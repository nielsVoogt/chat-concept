<template>
  <fragment>
    <div class="message">
      <div class="message-details">
        <div class="message-sender">
          <div class="message-sender-avatar">
            <img src="https://placeimg.com/50/50/people" />
          </div>
          <strong>
            Niels
            <small>{{ date }}</small>
          </strong>
        </div>
        <div class="message-options">
          <div class="message-option">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.08008 13.3333H14.0801"
                stroke="#888888"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.0801 2.33333C11.3453 2.06812 11.705 1.91912 12.0801 1.91912C12.2658 1.91912 12.4497 1.9557 12.6213 2.02677C12.7929 2.09784 12.9488 2.20201 13.0801 2.33333C13.2114 2.46466 13.3156 2.62056 13.3866 2.79214C13.4577 2.96372 13.4943 3.14762 13.4943 3.33333C13.4943 3.51905 13.4577 3.70295 13.3866 3.87453C13.3156 4.04611 13.2114 4.20201 13.0801 4.33333L4.74674 12.6667L2.08008 13.3333L2.74674 10.6667L11.0801 2.33333Z"
                stroke="#888888"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="message-option">
            <button @click="showDeleteMessageModal">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.08008 4H3.41341H14.0801"
                  stroke="#C90000"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.41333 4V2.66667C5.41333 2.31305 5.55381 1.97391 5.80385 1.72386C6.0539 1.47381 6.39304 1.33334 6.74666 1.33334H9.41333C9.76695 1.33334 10.1061 1.47381 10.3561 1.72386C10.6062 1.97391 10.7467 2.31305 10.7467 2.66667V4M12.7467 4V13.3333C12.7467 13.687 12.6062 14.0261 12.3561 14.2761C12.1061 14.5262 11.767 14.6667 11.4133 14.6667H4.74666C4.39304 14.6667 4.0539 14.5262 3.80385 14.2761C3.55381 14.0261 3.41333 13.687 3.41333 13.3333V4H12.7467Z"
                  stroke="#C90000"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.74683 7.33333V11.3333"
                  stroke="#C90000"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.41333 7.33333V11.3333"
                  stroke="#C90000"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div class="message-option">
            <button class="btn btn--primary btn--small" @click="showAddTopicModal">New topic</button>
          </div>
        </div>
      </div>
      <div class="message-content">
        <p>{{ message }}</p>
      </div>
      <div class="message-attatchments">
        <template v-if="images.length">
          <ChatImages :images="images" />
        </template>
        <template v-if="files.length">
          <DownloadFile
            v-for="(file, index) in files"
            :key="index"
            :name="file.name"
            :size="file.size"
            :path="file.path"
          />
        </template>
      </div>
    </div>
  </fragment>
</template>

<script>
import DownloadFile from "@/components/DownloadFile";
import ChatImages from "@/components/ChatImages";

export default {
  name: "message",
  props: ["date", "message", "images", "files", "userId"],
  components: {
    DownloadFile,
    ChatImages
  },
  methods: {
    showDeleteMessageModal() {
      this.$emit("delete-message");
    },
    showAddTopicModal() {
      this.$emit("add-topic");
    }
  }
};
</script>

<style lang="scss">
.message {
  padding: 1.5em;
  border-bottom: 1px solid #f4f4f4;

  .message-sender {
    display: flex;
    align-items: center;
    line-height: 1;

    small {
      color: #9a9a9a;
      font-weight: 300;
      margin-left: 0.25em;
    }
  }

  .message-details {
    display: flex;
    margin-bottom: 0.5em;

    .message-options {
      margin-left: auto;
      align-items: center;
      opacity: 0;
      display: flex;
    }

    .message-sender-avatar {
      margin-right: 0.75em;

      img {
        width: 30px;
        height: 30px;
        border-radius: 30px;
      }
    }

    .message-option {
      margin-left: 0.5em;

      .btn {
        margin-left: 0.5em;
      }
    }
  }

  &:hover {
    background: #f9f9f9;

    .message-options {
      opacity: 1;
    }
  }
}
</style>