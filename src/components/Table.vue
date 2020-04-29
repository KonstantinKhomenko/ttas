<template>
  <table class="table">
    <thead class="header">
      <tr>
        <td colspan="2">Услуг</td>
      </tr>
    </thead>
    <tbody>
      <tr class="tb-border">
        <td class="ta-left pos-rel pt-30">
          Ручное бронирование
          <div class="back-color-size back-color-green"></div>
        </td>
        <td class="fw-bold pt-30">11</td>
      </tr>
      <tr>
        <td class="ta-left pos-rel">
          Пакетные туры
          <div class="back-color-size back-color-blue-long"></div>
        </td>
        <td class="fw-bold">3</td>
      </tr>
      <tr>
        <td class="ta-left pos-rel pb-30">
          Отели
          <div class="back-color-size back-color-blue-short"></div>
        </td>
        <td class="fw-bold">1</td>
      </tr>
    </tbody>
    <tfoot class="fw-bold">
      <tr class="tb-border footer">
        <td class="ta-left">Всего</td>
        <td>15</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  name: "Table",
};
</script>

<style lang="scss" scoped>
.table {
  margin: 15px 20px 0 auto;
  width: 320px;
  height: 165px;
  text-align: center;
  font-size: 13px;

  .fw-bold {
    font-weight: bold;
  }

  .header {
    text-align: end;
  }

  .ta-left {
    text-align: left;
  }

  td {
    border-top: none;
    padding: 7px;
  }

  .tb-border {
    border-top: 1px solid #dadada;
  }

  .footer {
    font-size: 16px;
  }

  .back-color-size {
    height: 30px;
    position: absolute;
    top: 3px;
    left: 0;
    z-index: -99;
    border-radius: 0px 3px 3px 0px;
  }

  .back-color-green {
    background: #b1e19b;
    width: 220px;
    top: 25px;
  }

  .back-color-blue-long {
    background: #ace2f8;
    width: 55px;
  }

  .back-color-blue-short {
    width: 35px;
    background: #ace2f8;
  }

  .pos-rel {
    position: relative;
  }

  .pt-30 {
    padding-top: 30px;
  }

  .pb-30 {
    padding-bottom: 30px;
  }
}
</style>
