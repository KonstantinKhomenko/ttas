<template>
  <header class="header">
    <img class="photo" src="../assets/photo.png" alt="avatar" />
    <div class="wrap-pers-info">
      <p class="name">Вероника Ростова</p>
      <p class="profession">Менеджер по продажам</p>
    </div>
    <div class="info-wrap">
      <p class="info-text">
        Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны
      </p>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  padding-top: 20px;

  .photo {
    position: absolute;
    left: 5px;
    top: 12px;
    z-index: 99;
  }

  .wrap-pers-info {
    margin-left: 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .name {
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
    }

    .profession {
      font-size: 12px;
      line-height: 20px;
      color: #808080;
    }
  }

  .info-wrap {
    background: #fffbc8;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 5px;
    margin-left: 80px;
    margin-right: 20px;

    .info-text {
      font-size: 14px;
      line-height: 20px;
      color: #333333;
      padding-left: 70px;
      padding-top: 5px;
    }
  }

  p {
    margin-bottom: 5px;
  }
}
</style>
