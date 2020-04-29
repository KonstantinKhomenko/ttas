<template>
  <div class="wrap">
    <div>
      <a href="#" class="last-comment">Последние отзывы</a>
      <a href="#" class="all-comment">Все отзывы</a>
    </div>
    <div class="counters">
      <span class="num"> <img src="../assets/like.png" alt="like" />131</span>
      <span class="num num-comment">
        <img src="../assets/comment.png" alt="comment" />14</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ListHeader",
};
</script>

<style lang="scss" scoped>
.wrap {
  margin: 0 10px 5px 10px;
  display: flex;
  justify-content: space-between;

  .last-comment {
    font-weight: bold;
    font-size: 16px;
    color: #333333;
    margin-right: 8px;
  }

  .all-comment {
    font-size: 14px;
    text-decoration-line: underline;
    color: #005da1;
  }

  .counters {
    display: inline-block;

    img {
      margin: 3px;
    }

    .num {
      font-size: 12px;
    }

    .num-comment {
      margin-left: 15px;
    }
  }
}
</style>
