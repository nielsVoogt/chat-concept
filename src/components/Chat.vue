<template>
  <fragment>
    <!-- ADD TOPIC MODAL -->
    <Modal title="Add a new topic" :showModal="showAddTopicModal" @close-modal="hideAddTopicModal">
      <template v-slot:modal-body>
        <p>Fill in a name for your new topic and click 'create topic'</p>
        <label class="form-group">
          <div class="form-group__label">Topic name</div>
          <div class="form-group__input-container">
            <input type="text" placeholder="Eg. opening devops" v-model="topicName" />
          </div>
        </label>
      </template>
      <template v-slot:modal-footer-buttons>
        <button type="submit" class="btn btn--primary" @click="newTopicSubmit">Create topic</button>
      </template>
    </Modal>

    <!-- DELETE MESSAGE MODAL -->
    <Modal
      title="Delete message"
      :showModal="deleteMessageModalShown"
      @close-modal="hideDeleteMessageModal"
    >
      <template v-slot:modal-body>
        <p>Are you sure you want to delete your message?</p>
      </template>
      <template v-slot:modal-footer-buttons>
        <button type="submit" class="btn btn--primary" @click="deleteMessage">Delete message</button>
      </template>
    </Modal>

    <div class="column">
      <div class="column-header">
        <h1>Your topics</h1>
        <div class="column-header-options">
          <div class="column-header-option">
            <button @click="openAddTopicModal">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.0801 3.5H5.08008C3.97551 3.5 3.08008 4.39543 3.08008 5.5V19.5C3.08008 20.6046 3.97551 21.5 5.08008 21.5H19.0801C20.1846 21.5 21.0801 20.6046 21.0801 19.5V5.5C21.0801 4.39543 20.1846 3.5 19.0801 3.5Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.0801 8.5V16.5"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.08008 12.5H16.0801"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="column-content">
        <TopicListItem
          name="Your daily chat"
          messages="23"
          locked="true"
          @click.native="selectMainChat()"
          :active="selectedChatId === null"
        />

        <SectionToggle
          name="Active"
          :amount="selectedUser.topics.length"
          :open="true"
          :border-top="true"
        >
          <template v-if="selectedUser.topics.length">
            <TopicListItem
              v-for="topic in selectedUser.topics"
              :name="topic.title"
              messages="23"
              :key="topic.id"
              @click.native="selectTopic(topic.id)"
              :active="selectedChatId === topic.id"
            />
          </template>
          <EmptyMessage v-else message="No topics found" />
        </SectionToggle>
        <SectionToggle name="Archived topics" amount="0">
          <div class="empty-message">No Archived topics found</div>
        </SectionToggle>
      </div>
    </div>

    <div class="column column--border-left column--border-right">
      <div class="column-header">
        <h1>{{ selectedChatTitle ? selectedChatTitle : "Your daily chat" }}</h1>
        <div class="column-header-options">
          <div class="column-header-option">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0801 19.5C15.4984 19.5 19.0801 15.9183 19.0801 11.5C19.0801 7.08172 15.4984 3.5 11.0801 3.5C6.6618 3.5 3.08008 7.08172 3.08008 11.5C3.08008 15.9183 6.6618 19.5 11.0801 19.5Z"
                stroke="#B4B4B4"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.08 21.5L16.73 17.15"
                stroke="#B4B4B4"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="column-content">
        <ColumnContentDetails
          :selectedChatInfo="selectedChatInfo"
          :selectedChatTitle="selectedChatTitle"
        />
        <div class="chat-messages" v-chat-scroll>
          <div v-for="(message, index) in selectedChat" :key="index">
            <ChatMessage
              :date="message.date"
              :message="message.message"
              :images="message.images"
              :files="message.files"
              :user="users[message.user]"
              @add-topic="openAddTopicModal(message)"
              @delete-message="showDeleteMessageModal(message.id)"
            />
          </div>
        </div>
        <ChatForm />
      </div>
    </div>

    <div class="column">
      <div class="column-header">
        <h1>Chat content</h1>
        <div class="column-header-options">
          <div class="column-header-option">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0801 19.5C15.4984 19.5 19.0801 15.9183 19.0801 11.5C19.0801 7.08172 15.4984 3.5 11.0801 3.5C6.6618 3.5 3.08008 7.08172 3.08008 11.5C3.08008 15.9183 6.6618 19.5 11.0801 19.5Z"
                stroke="#B4B4B4"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.08 21.5L16.73 17.15"
                stroke="#B4B4B4"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="column-content">
        <!-- IMAGES -->
        <SectionToggle :amount="selectedUser.images.length" name="Images" :open="false">
          <template v-if="selectedUser.images.length">
            <ImageDetail
              :name="image.name"
              :type="image.extension"
              :size="image.size"
              path="https://picsum.photos/50"
              v-for="(image, index) in selectedUser.images"
              :key="index"
            />
          </template>
          <EmptyMessage v-else message="No images found" />
        </SectionToggle>

        <!-- FILES -->
        <SectionToggle name="Files" amount="5" :open="false" />

        <!-- LINKS -->
        <SectionToggle name="Links" :amount="selectedUser.links.length" :open="false">
          <template v-if="selectedUser.links.length">
            <linkDetail v-for="(url, index) in selectedUser.links" :key="index" :url="url" />
          </template>
          <EmptyMessage v-else message="No link found" />
        </SectionToggle>
      </div>
    </div>
  </fragment>
</template>

<script>
import LinkDetail from "@/components/LinkDetail";
import ImageDetail from "@/components/ImageDetail";
import ChatMessage from "@/components/ChatMessage";
import ChatForm from "@/components/ChatForm";
import SectionToggle from "@/components/SectionToggle";
import TopicListItem from "@/components/TopicListItem";
import EmptyMessage from "@/components/EmptyMessage";
import Modal from "@/components/Modal";
import ColumnContentDetails from "@/components/ColumnContentDetails";

export default {
  name: "Chat",
  props: ["selectedUser", "users"],
  data() {
    return {
      selectedChat: null,
      selectedChatTitle: null,
      selectedChatId: null,
      selectedChatInfo: null,
      showAddTopicModal: false,
      topicMessage: null,
      topicName: "",
      deleteMessageModalShown: false,
      selectedMessage: null
    };
  },
  components: {
    LinkDetail,
    ImageDetail,
    ChatMessage,
    ChatForm,
    SectionToggle,
    TopicListItem,
    EmptyMessage,
    ColumnContentDetails,
    Modal
  },
  mounted() {
    this.selectedChat = this.selectedUser.main;
  },
  methods: {
    selectMainChat() {
      this.selectedChat = this.selectedUser.main;
      this.selectedChatTitle = null;
      this.selectedChatId = null;
      this.selectedChatInfo = null;
    },
    hideAddTopicModal() {
      this.showAddTopicModal = false;
      this.topicMessage = null;
    },
    openAddTopicModal(message) {
      this.showAddTopicModal = true;
      if (message) {
        this.topicMessage = message;
      }
    },
    newTopicSubmit() {
      console.log("New topic submit");
      this.showAddTopicModal = false;
    },
    showDeleteMessageModal(id) {
      this.deleteMessageModalShown = true;
      if (id) {
        this.selectedMessage = id;
      }
    },
    deleteMessage() {
      console.log(this.selectedMessage);
      this.deleteMessageModalShown = false;
    },
    hideDeleteMessageModal() {
      this.deleteMessageModalShown = false;
    },
    selectTopic(id) {
      var result = this.selectedUser.topics.filter(entry => entry.id === id);
      this.selectedChat = result[0].chat;
      this.selectedChatTitle = result[0].title;
      this.selectedChatId = id;
      this.selectedChatInfo = {
        createdAt: result[0].created_at,
        createdBy: result[0].created_by
      };
    }
  }
};
</script>

<style lang="scss">
.chat-messages {
  overflow-y: auto;
  flex: 1;

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #555;
  }
}
</style>