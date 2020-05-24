<template>
  <div class="column-content-details" v-if="selectedChatInfo">
    <small>Created at {{ selectedChatInfo.createdAt }} by {{ selectedChatInfo.createdBy }}</small>
    <Dropdown>
      <ul>
        <li>
          <a href="#" @click="showSendTopicModal(true)">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.20662 3.16667H13.8733C14.6066 3.16667 15.2066 3.76667 15.2066 4.50001V12.5C15.2066 13.2333 14.6066 13.8333 13.8733 13.8333H3.20662C2.47329 13.8333 1.87329 13.2333 1.87329 12.5V4.50001C1.87329 3.76667 2.47329 3.16667 3.20662 3.16667Z"
                stroke="#505050"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.2066 4.5L8.53996 9.16667L1.87329 4.5"
                stroke="#505050"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Send topic as email
          </a>
        </li>
        <li>
          <a href="#" @click="showArchiveTopicModal(true)">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M14.54 5.83333V14.5H2.54004V5.83333"
                  stroke="#505050"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.8735 2.5H1.20679V5.83333H15.8735V2.5Z"
                  stroke="#505050"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.20679 8.5H9.87345"
                  stroke="#505050"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <path d="M0.540039 0.5H16.54V16.5H0.540039V0.5Z" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Archive topic
          </a>
        </li>
      </ul>
    </Dropdown>

    <!-- ARCHIVE TOPIC MODAL -->
    <Modal
      title="Archive topic"
      :showModal="archiveTopicModalShown"
      @close-modal="showArchiveTopicModal(false)"
    >
      <template v-slot:modal-body>
        <p>Are you sure you want to archive {{ selectedChatTitle }}</p>
      </template>
      <template v-slot:modal-footer-buttons>
        <button type="submit" class="btn btn--primary" @click="archiveTopicSubmit">Archive topic</button>
      </template>
    </Modal>

    <!-- ARCHIVE TOPIC MODAL -->
    <Modal
      title="Send topic"
      :showModal="sendTopicModalShown"
      @close-modal="showSendTopicModal(false)"
    >
      <template v-slot:modal-body>
        <p>Please fill in the email-adress of your desired recipients and click 'Send topic'</p>
        <label :class="['form-group', { 'form-group--has-error': topicRecipientFieldError}]">
          <div class="form-group__label">Target email*</div>
          <div class="form-group__input-container">
            <input
              type="email"
              required
              placeholder="E.g. niels@chatconcept.nl"
              v-model="topicRecipient"
            />
            <small
              class="form-group__error"
              v-if="topicRecipientFieldError"
            >Target email is required</small>
          </div>
        </label>
      </template>
      <template v-slot:modal-footer-buttons>
        <button type="submit" class="btn btn--primary" @click="sendTopicSubmit">Send topic</button>
      </template>
    </Modal>
  </div>
</template>

<script>
import Dropdown from "@/components/Dropdown";
import Modal from "@/components/Modal";

export default {
  name: "ColumnContentDetails",
  components: { Dropdown, Modal },
  props: ["selectedChatInfo", "selectedChatTitle"],
  data() {
    return {
      archiveTopicModalShown: false,
      sendTopicModalShown: false,
      topicRecipient: "",
      topicRecipientFieldError: false
    };
  },
  methods: {
    showSendTopicModal(state) {
      if (state === true) {
        this.sendTopicModalShown = true;
      } else {
        this.topicRecipient = "";
        this.topicRecipientFieldError = false;
        this.sendTopicModalShown = false;
      }
    },
    sendTopicSubmit() {
      if (this.topicRecipient !== "") {
        console.log("Topic sent via email");
        this.showSendTopicModal(false);
      } else {
        this.topicRecipientFieldError = true;
      }
    },

    // ---- ARCHIVE
    archiveTopicSubmit() {
      console.log("archived");
      this.archiveTopicModalShown = false;
    },
    showArchiveTopicModal(state) {
      this.archiveTopicModalShown = state;
    }
  }
};
</script>

<style lang="scss">
.column-content-details {
  border-bottom: 1px solid var(--border-color);
  padding: 0.5em 1.5em;
  display: flex;
  align-items: center;

  .dropdown-container {
    margin-left: auto;
    position: relative;
    z-index: 10;
  }

  small {
    opacity: 0.75;
  }
}
</style>