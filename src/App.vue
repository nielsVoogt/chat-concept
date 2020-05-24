<template>
  <div class="app">
    <Navigation />
    <Chat v-if="selectedUser" :selectedUser="selectedUser" :users="users" />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Chat from "@/components/Chat";
import axios from "axios";

export default {
  name: "App",
  components: {
    Chat,
    Navigation
  },
  data() {
    return {
      users: null,
      selectedUser: null,
      selectedChat: null
    };
  },
  mounted() {
    axios.get("http://localhost:3000/users").then(response => {
      this.users = response.data;
      this.selectedUser = this.users[0];
      this.selectedChat = this.users[0].main;
    });
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap");
@import "@/style/app";

:root {
  --border-color: #dadada;
  --divider-background-color: #f3f3f3;
  --notification-background-color: #42b271;
  --navigation-background-color: #131313;
}

.app {
  display: grid;
  height: 100%;
  grid-template-columns: 280px 280px auto 280px;
}

.column {
  &--border-left {
    border-left: 2px solid var(--border-color);
  }
  &--border-right {
    border-right: 2px solid var(--border-color);
  }
}

.amount-number {
  margin-left: 0.25em;
  font-weight: 400;
  color: #979797;
}

.column-header {
  border-bottom: 1px solid var(--border-color);
  display: flex;
  height: 65px;
  align-items: center;
  padding: 0 1.5em;

  .column-header-options {
    margin-left: auto;
    display: flex;
    align-items: center;

    .column-header-option {
      margin-left: 1em;
    }
  }
}

small {
  font-size: 0.785rem;
}

.notification-label {
  background: var(--notification-background-color);
  color: #ffffff;
  font-size: 0.75rem;
  padding: 0.125rem 0.35rem;
  border-radius: 5px;
}

p {
  font-weight: 300;
}

svg {
  display: block;
}

.column-content {
  height: calc(100vh - 65px);
  display: flex;
  flex-direction: column;
}

.btn {
  appearance: none;
  border: 0;
  height: 35px;
  border-radius: 5px;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 1em;
  cursor: pointer;

  &--small {
    height: 25px;
    padding: 0 0.5em;
  }

  &--primary {
    background: #42b271;
  }

  &--secondary {
    background: #b1b1b1;
  }
}

.form-group {
  margin-top: 1em;
  display: block;

  &__label {
    margin-bottom: 0.5em;
  }

  input {
    padding: 0 0.75em;
    height: 40px;
    font-size: 0.9rem;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #cccccc;
    background: #f5f5f5;
  }

  &__error {
    color: red;
  }

  &--has-error {
    input {
      border-color: red;
    }
  }
}

.navigation-search {
  margin: 1em;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: 0.5em;
    transform: translateY(-50%);
  }

  input[type="text"] {
    width: 100%;
    height: 40px;
    border: 0;
    border-radius: 5px;
    padding: 0 1em 0 3em;
    box-sizing: border-box;
    font-size: 12px;
    background: rgba(255, 255, 255, 0.1);

    &:focus {
      background: rgba(255, 255, 255, 1);
    }

    ::-webkit-input-placeholder {
      color: #dadada;
    }

    :-ms-input-placeholder {
      color: #dadada;
    }

    ::placeholder {
      color: #dadada;
    }
  }
}

.navigation-section-header {
  padding: 0.5em 1.5em 0.75em;
  display: flex;
  align-items: center;
  color: #ffffff;

  small {
    font-weight: 400;
    margin-left: 0.5em;
    opacity: 0.7;
  }

  &__end {
    margin-left: auto;
  }
}

.navigation {
  display: flex;
  flex-direction: column;

  .navigation-bottom {
    margin-top: auto;

    .contact-link {
      border-bottom: 1px solid rgba(#ffffff, 0.3);

      &:hover {
        background: var(--navigation-background-color);
      }
    }

    .logout {
      padding: 1.5em;
      color: #ffffff;
      font-weight: 300;
      font-size: 14px;

      svg {
        margin-right: 0.75em;
      }
    }
  }
}
</style>