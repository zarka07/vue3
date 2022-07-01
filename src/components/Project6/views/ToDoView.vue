<template>
  <div class="main-container">
    <img class="main__logo" src="/assets/logoCITI.png" alt="Logo" />
    <section class="todo-wrapper">
      <h1 class="username">Thank you, {{ lsUsername || "anonimus" }}!</h1>
      <button class="btn logout" @click="logout()">Tap here to logout</button>
      <h1 class="todo-title">{{ today.day }}<br />{{ today.date }}</h1>
      <form @keydown.enter.prevent="">
        <input
          type="text"
          class="input-todo"
          v-bind:class="{ active: new_todo }"
          placeholder="Enter task"
          v-model="new_todo"
          v-on:keyup.enter="addItem"
        />
        <div class="btn btn-add" v-bind:class="{ active: new_todo }" @click="addItem">
          +
        </div>
      </form>

      <div v-if="pending.length > 0">
        <p class="status busy">
          You have {{ pending.length }} pending item<span v-if="pending.length > 1"
            >s</span
          >
        </p>
        <transition-group name="todo-item" tag="ul" class="todo-list">
          <li v-for="item in pending" v-bind:key="item.title">
            <input
              class="todo-checkbox"
              v-bind:id="'item_' + item.id"
              v-model="item.done"
              type="checkbox"
            />
            <label v-bind:for="'item_' + item.id"></label>
            <button class="btn todo-text" @click="editItem(item)">
              {{ item.title }}
            </button>
            <span class="delete" @click="deleteItem(item)"></span>
          </li>
        </transition-group>
      </div>

      <div v-if="completed.length > 0 && showComplete">
        <p class="status">Completed tasks: {{ completedPercentage }}</p>
        <transition-group name="todo-item" tag="ul" class="todo-list archived">
          <li v-for="item in completed" v-bind:key="item.title">
            <input
              class="todo-checkbox"
              v-bind:id="'item_' + item.id"
              v-model="item.done"
              type="checkbox"
            />
            <label v-bind:for="'item_' + item.id"></label>
            <span class="todo-text">{{ item.title }}</span>
            <span class="edit" @click="editItem(item)"></span>
            <span class="delete" @click="deleteItem(item)"></span>
          </li>
        </transition-group>
      </div>
      <div class="control-buttons">
        <div
          class="btn btn-secondary"
          v-if="completed.length > 0"
          @click="toggleShowComplete"
        >
          <span v-if="!showComplete">Show</span><span v-else>Hide</span> Complete
        </div>
        <div class="btn btn-secondary" v-if="todoList.length > 0" @click="clearAll">
          Clear All
        </div>
      </div>
    </section>
  </div>

  <div class="footer"></div>
</template>

<script>
export default {
  name: "todo-component",

  data() {
    return {
      lsUsername: "",
      username: this.lsUsername ? JSON.parse(this.lsUsername) : {},
      todoList: [],
      indexEditTodo: null,
      new_todo: "",
      showComplete: false,
    };
  },

  mounted() {
    this.lsUsername = localStorage.getItem("username");
    this.getTodos();
  },

  watch: {
    todoList: {
      handler: function (updatedList) {
        localStorage.setItem("todo_list", JSON.stringify(updatedList));
      },
      deep: true,
    },
  },

  methods: {
    getTodos() {
      if (localStorage.getItem("todo_list")) {
        this.todoList = JSON.parse(localStorage.getItem("todo_list"));
      }
    },
    addItem() {
      if (this.indexEditTodo === null) {
        this.todoList.unshift({
          id: this.todoList.length,
          title: this.new_todo,
          done: false,
        });
      } else {
        this.todoList[this.indexEditTodo].title = this.new_todo;
        this.indexEditTodo = null;
      }
      this.new_todo = "";
    },
    editItem(item) {
      let index = this.todoList.indexOf(item);
      this.new_todo = this.todoList[index].title;
      this.indexEditTodo = index;
    },
    deleteItem(item) {
      this.todoList.splice(this.todoList.indexOf(item), 1);
    },
    toggleShowComplete() {
      this.showComplete = !this.showComplete;
    },
    clearAll() {
      this.todoList = [];
    },
    logout() {
      localStorage.removeItem("auth");
      localStorage.removeItem("username");
      localStorage.removeItem("todo_list");
      this.$router.push({ name: "LoginView" });
      location.reload();
    },
  },

  computed: {
    pending: function () {
      return this.todoList.filter(function (item) {
        return !item.done;
      });
    },
    completed: function () {
      return this.todoList.filter(function (item) {
        return item.done;
      });
    },
    completedPercentage: function () {
      return Math.floor((this.completed.length / this.todoList.length) * 100) + "%";
    },
    today: function () {
      var weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      today = {
        day: weekday[today.getDay()],
        date: mm + "-" + dd + "-" + yyyy,
      };
      return today;
    },
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 75vh;
  background: linear-gradient(#00afed 0%, #00569a 100%);
  position: relative;
}

.username {
  font-size: 100%;
}

.logout {
  color: #00569a;
  width: 99%;
}

.main__logo {
  height: auto;
  width: 7vw;
  margin-top: 1.3%;
}

section {
  position: absolute;
  background-color: #fff;
  width: 70vw;
  min-height: 75vh;
  margin-top: 10%;
}

.footer {
  background-color: #e5e5e5;
  height: 25vh;
  width: 100%;
}

.todo-wrapper {
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 20px 10px;
  -webkit-box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
  text-align: center;
}

.todo-title {
  font-size: 3.2vh;
  color: #f65c65;
  font-weight: normal;
}

form {
  overflow: overlay;
}

.btn,
input {
  line-height: 5.7vh;
  border-radius: 3px;
  border: 0;
  display: inline-block;
  margin: 15px 0;
  padding: 0.2em 1em;
  font-size: 1em;
}

input[type="text"] {
  float: left;
  border: 1px solid #ddd;
  width: 50%;
  transition: all ease-in 0.25s;
}

input:focus {
  outline: none;
  border: 1px solid #a3b1ff;
}

input::placeholder {
  color: rgba(0, 0, 0, 0.3);
  font-style: italic;
}

.btn {
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
}

.btn-add {
  background: #ddd;
  color: #fefefe;
  border-color: #ddd;
  pointer-events: none;
  transition: all ease-in 0.25s;
  font-size: 2.2rem;
  line-height: 0.5rem;
  padding: 1rem 0.5rem;
  float: right;
}

.btn-add.active {
  background: #00afed;
  border-color: #00afed;
  pointer-events: visible;
}

.btn-add.active:hover {
  background: #4442f6;
  border-color: #4442f6;
}

.btn-add:active {
  transform: scale(0.95);
}
.control-buttons {
  position: absolute;
  bottom: 3px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
}
.btn-secondary {
  display: inline-block;
  position: relative;
  border: 0;
  padding: 0;
  margin: 0 10px;
  padding: 5px;
}

.btn-secondary:after {
  position: absolute;
  content: "";
  width: 0;
  height: 3px;
  background-color: #f4586e;
  bottom: 0px;
  left: 0;
  transition: all ease-in 0.25s;
}

.btn-secondary:hover:after {
  width: 100%;
}

ul.todo-list {
  padding: 0;
  margin-bottom: 30px;
}

ul.todo-list li {
  position: relative;
  list-style-type: none;
  display: block;
  margin: 10px 0;
  background: #e0e8f5;
  border-radius: 3px;
  padding-left: 38px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 49px;
  overflow: hidden;
}

ul.todo-list.archived li {
  background: #fff;
}

.todo-text {
  position: relative;
  display: inline-block;
  padding: 0 0.5em;
  background-color: #fff;
  border-color: #00afed;
}
ul.todo-list li .delete {
  position: absolute;
  height: 100%;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 0;
  width: 0;
  background-color: #f56468;
  color: #fff;
  transition: all ease-in 0.25s;
}

ul.todo-list li .delete:after {
  position: absolute;
  content: "";
  width: 16px;
  height: 16px;
  top: 50%;
  left: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transform: translate(-50%, -50%) scale(0.5);
  transition: all ease-in 0.25s;
}

ul.todo-list li:hover .delete {
  width: 44px;
  opacity: 1;
}

ul.todo-list li:hover .delete:after {
  transform: translate(-50%, -50%) scale(1);
}

.todo-checkbox {
  position: absolute;
  opacity: 0;
  display: none;
}

.todo-checkbox + label {
  position: absolute;
  cursor: pointer;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 22px;
  height: 22px;
  border-radius: 2px;
  border: 1px solid #cfdcec;
  background-color: #fff;
}

.todo-checkbox:checked + label:after {
  position: absolute;
  content: "";
  top: 30%;
  left: 50%;
  height: 3px;
  width: 6px;
  border: solid #fc6c48;
  border-width: 0 0 2px 2px;
  transform-origin: center center;
  transform: rotate(-45deg) translate(-50%, -50%);
}

.todo-checkbox:checked + label:after {
  display: block;
}

.todo-checkbox:checked ~ .todo-text {
  color: #888;
  text-decoration: line-through;
}

.status.free {
  font-weight: bold;
  text-align: center;
  margin: 40px 0;
}
.status.free img {
  display: block;
  width: 50px;
  margin: 10px auto;
}

.todo-item-enter-active,
.todo-item-leave-active {
  transition: opacity ease 0.25s, transform ease-in-out 0.3s;
  transform-origin: left center;
}

.todo-item-enter,
.todo-item-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: scale(1.1);
  opacity: 0;
}
</style>
