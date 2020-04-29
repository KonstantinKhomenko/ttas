<template>
  <footer>
    <form class="form" ref="commentArea">
      <textarea
        name="comment"
        cols="30"
        rows="10"
        class="area"
        v-model.trim="formData.comment"
        @keyup.ctrl.enter="onSubmit"
      ></textarea>
      <button @click.prevent="onSubmit" class="btn">
        <span class="btn-text">Написать консультанту</span>
      </button>
    </form>
  </footer>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
    formData: {
      comment: "",
      name: "Гость",
    },
  }),
  methods: {
    onSubmit() {
      if (this.formData.comment) {
        this.$emit("submitForm", { ...this.formData });
        this.$refs.commentArea.reset();
      } else {
        alert("Поле не дожно быть пустым!!!");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;

  .area {
    background: #ffffff;
    border: 1px solid #000000;
    width: 90%;
    height: 65px;
    margin-top: 30px;
    border-radius: 1px;
    resize: none;
  }

  .btn {
    background: #fdd639;
    border-radius: 23px;
    margin-top: 20px;
    margin-bottom: 30px;
    width: 280px;
    height: 45px;

    .btn-text {
      font-weight: bold;
      font-size: 16px;
      line-height: 21px;
    }
  }
}
</style>
