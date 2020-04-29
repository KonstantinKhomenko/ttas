<template>
  <ul class="comments-list-wrap">
    <li v-for="(item, prop) in list" :key="prop">
      <CommentTemplate
        :comment="item.comment"
        :name="item.name"
        :date="item.date | dateFilter"
      />
    </li>
  </ul>
</template>

<script>
import CommentTemplate from "@/components/CommentTemplate";

export default {
  name: "CommentsList",
  components: {
    CommentTemplate,
  },
  props: {
    list: {
      type: Array,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.comments-list-wrap {
  max-height: 450px;
  overflow: auto;
  margin-bottom: 20px;
}
</style>
