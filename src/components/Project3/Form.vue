<template>
  <div>
  <my-header :cartItemCount="cartItemCount"></my-header>
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-info">
          <div class="panel-heading">Ваша корзина</div>
          <div class="panel-body">
            <div class="form-group">
              <div class="col-md-12">
                <h4><strong>Введите контактную информацию</strong></h4>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6">
                <strong>Имя:</strong>
                <input v-model.trim="order.firstName" class="form-control" />
              </div>
              <div class="col-md-6">
                <strong>Фамилия:</strong>
                <input v-model.trim="order.lastName" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12"><strong>Адрес склада перевозчика:</strong></div>
              <div class="col-md-12">
                <input v-model.trim="order.address" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12"><strong>Город:</strong></div>
              <div class="col-md-12">
                <input v-model.trim="order.city" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <!--<div class="col-md-2">
                <strong>Область:</strong>
                <select v-model="order.state" class="form-control">
                  <option disabled value="">Область</option>
                  <option v-for="state in states" :key="state" v-bind:value="state">
                  {{state}}
                  </option>
                </select>
              </div>-->
            </div>
            <div class="form-group">
              <div class="col-md-6 col-md-offset-4">
                <strong>Почтовый код:</strong>
                <input v-model.number="order.zip"
                   class="form-control"
                   type="number"/>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6 boxes">
                <input type="checkbox"
                       id="gift" value="true"
                                 v-bind:true-value="order.sendGift"
                                 v-bind:false-value="order.dontSendGift"
                                 v-model="order.gift">
                <label for="gift">Упаковать как хрупкий товар</label>
              </div>
            </div><!-- end of form-group -->
            <div class="form-group">
              <div class="col-md-6 boxes">
                <input type="radio" id="home" v-bind:value="order.home" v-model="order.method">
                    <label for="home">Доставка Новой почтой</label>
                    <br>
                <input type="radio" id="business" v-bind:value="order.business" v-model="order.method">
                    <label for="business">Доставка другим перевозчиком</label>
              </div>
            </div><!-- end of form-group-->
            <div class="form-group">
              <div class="col-md-6">
                <button type="submit" class="btn btn-primary submit" v-on:click="submitForm">Разместить заказ</button>
              </div><!-- end of col-md-6-->
            </div><!-- end of form-group-->
            <div class="col-md-12 verify">
              <pre>
                        Имя: {{order.firstName}}
                        Фамилия: {{order.lastName}}
                        Адрес склада перевозчика: {{order.address}}
                        Город: {{order.city}}
                        <!--Обасть: {{order.state}}-->
                        Доставка: {{order.method}}
                        Упаковка: {{order.gift}}
              </pre>
            </div><!-- end of col-md-12 verify-->
          </div><!--end of panel-body-->
        </div><!--end of panel panel-info-->


      </div><!--end of col-md-10 col-md-offset-1-->
    </div><!--end of row-->
  </div>
</template>
<script>
import MyHeader from './Header.vue';
export default {
  name: 'form-component',
  props: ['cartItemCount'],
  data () {
    return {
      /*states: {
        AL: 'Alabama',
        AK: 'Alaska',
        AR: 'Arizona',
        CA: 'California',
        NV: 'Nevada'
      },*/
      order: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        method: 'Новой почтой',
        business: 'другим перевозчиком',
        home: 'Новой почтой',
        gift:'',
        sendGift: 'Упаковать как хрупкое',
        dontSendGift: 'Не упаковывать как хрупкое'
      }
 
    }
  },
  components: { MyHeader },
  methods: {
    submitForm() {
      alert('Submitted');
    }
  }
}
</script>
<style scoped>
</style>