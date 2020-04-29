<template>
  <div class="comment-wrap">
    <span class="name">{{ name }}</span>
    <span class="date">{{ date }}</span>
    <p class="comment">{{ comment }}</p>
  </div>
</template>

<script>
export default {
  name: "CommentTemplate",
  props: {
    comment: {
      type: String,
      default: "No comment",
    },
    name: {
      type: String,
    },
    date: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.comment-wrap {
  margin: 0 10px;

  .name {
    font-weight: bold;
    margin-right: 10px;
    font-size: 14px;
  }

  .date {
    font-size: 12px;
    color: #808080;
  }

  .comment {
    border: 1px solid #c4cbcf;
    border-radius: 2px;
    padding: 10px 20px;
    position: relative;
    background: #f2fbff;
    margin-top: 13px;

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 20px;
      top: -21px;
      border: 6px solid transparent;
      border-bottom: 15px solid #c4cbcf;
    }

    &::after {
      border-bottom: 15px solid #f2fbff;
      top: -20px;
    }
  }
}
</style>
