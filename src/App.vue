<template>
  <div id="app">
    <Header />
    <main>
      <Table />
      <ListHeader />
      <CommentsList :list="getComments" />
    </main>
    <Form @submitForm="onFormSubmit" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Table from "@/components/Table";
import Form from "@/components/Form";
import CommentsList from "@/components/CommentsList";
import ListHeader from "@/components/ListHeader";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Table,
    Form,
    CommentsList,
    ListHeader,
  },
  computed: {
    ...mapGetters("comments", ["getComments"]),
  },
  methods: {
    ...mapActions("comments", ["addComment"]),
    onFormSubmit(data) {
      const newObj = {
        ...data,
        date: new Date(),
        id: Date.now(),
      };
      this.addComment(newObj);
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 720px;
  min-width: 360px;
  margin: 0 auto;
}
</style>
