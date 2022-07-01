<template>
  <div class="postlist p-2">
    <!-- postlist -->
    <div>
      <div>
        <div>
          <div class="posts">
            <h3>{{ $t("PostlistVue.Postlist") }}</h3>
          </div>
          <ul class="post">
            <li v-for="post in displayedPosts" :key="post.id">
              <router-link
                :to="{
                  name: 'PostId',
                  params: { id: post.id, currentPage: this.userStore.currentPage },
                }"
              >
                {{ post.id }}. {{ post.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- pagination -->
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <button
            type="button"
            class="page-link"
            style="color: #4caf50"
            v-if="this.userStore.currentPage != 1"
            @click="this.userStore.currentPage--"
          >
            {{ $t("PostlistVue.Previous") }}
          </button>
        </li>
        <li class="page-item">
          <button
            type="button"
            class="page-link"
            v-for="pageNumber in pages.slice(
              this.userStore.currentPage - 1,
              this.userStore.currentPage + 5
            )"
            :key="pageNumber"
            @click="this.userStore.currentPage = pageNumber"
          >
            {{ pageNumber }}
          </button>
        </li>
        <li class="page-item">
          <button
            type="button"
            @click="this.userStore.currentPage++"
            style="color: #4caf50"
            v-if="this.userStore.currentPage < pages.length"
            class="page-link"
          >
            {{ $t("PostlistVue.Next") }}
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import getApi from "../../mixins/getApiForProject2";
import getPosts from "../../mixins/getPostsForProject2";
import { UserStore } from "@/stores/UserStore";
export default {
  name: "PostList",
  mixins: [getApi, getPosts],
  setup() {
    const userStore = UserStore();
    return {
      userStore,
    };
  },
  data() {
    return {
      path: "posts",
      posts: [],
      perPage: 10,
      pages: [],
    };
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(posts) {
      let page = this.userStore.currentPage;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return posts.slice(from, to);
    },
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.posts);
    },
  },
  watch: {
    posts() {
      this.setPages();
    },
  },
  filters: {
    trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + "...";
    },
  },
};
</script>
<style scoped>
.post {
  margin-left: 2em;
  list-style: none;
}

h3 {
  text-align: center;
  color: black;
}

span {
  margin: 15px;
}

.modal {
  display: block;
  height: 500px;
  width: 80%;
}

a {
  color: black;
}

button.page-link {
  display: inline-block;
}

button.page-link {
  font-size: 15px;
  color: #0b34caba;
  font-weight: 500;
  padding: 0.2rem 0.5rem;
  border: 1px dotted;
  border-radius: 2px;
}

.offset {
  width: 500px !important;
  margin: 20px auto;
}

.pagination {
  align-items: center;
  justify-content: center;
  padding-left: 0;
}
</style>
