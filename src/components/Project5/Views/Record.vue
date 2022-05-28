<template>
  <!-- <div id="map" ref="map" style="height: 350px"></div> -->
  <div>
    <div class="page-title">
      <h3>Новая запись</h3>
    </div>
    <form class="form">
      <div class="input-field">
        <select>
          <option>name cat</option>
        </select>
        <label>Выберите категорию</label>
      </div>

      <p>
        <label>
          <input class="with-gap" name="type" type="radio" value="income" />
          <span>Доход</span>
        </label>
      </p>
      <p>
        <label>
          <input class="with-gap" name="type" type="radio" value="outcome" />
          <span>Расход</span>
        </label>
      </p>

      <div class="input-field">
        <input id="amount" type="number" />
        <label for="amount">Сумма</label>
        <span class="helper-text invalid">amount пароль</span>
      </div>

      <div class="input-field">
        <input id="description" type="text" />
        <label for="description">Описание</label>
        <span class="helper-text invalid">description пароль</span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Создать
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: "record-component",
  mounted() {
    // var map = Wrld.map("map", "721e1d835e3d535b646a4aef4d94600d", {
    //     center: [49.9854, 36.2281],
    //     zoom: 16
    //   });
    // setTimeout(function() {
    //   	map.setCameraHeadingDegrees(45).setCameraTiltDegrees(20);
    //   }, 1000);
    //   var mouseDownPoint = null;
    //   function onMouseDown(event) {
    //     mouseDownPoint = event.layerPoint;
    //   }
    //   function onMouseUp(event) {
    //     var mouseUpPoint = event.layerPoint;
    //     var mouseMoved = mouseUpPoint.distanceTo(mouseDownPoint) > 5;
    //     if (!mouseMoved) {
    //       var latlng = event.latlng;
    //       var marker = Wrld.marker(latlng).addTo(map);
    //     }
    //   }
    //   map.on("mousedown", onMouseDown);
    //   map.on("mouseup", onMouseUp);
  },
};
</script>



