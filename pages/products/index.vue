<template>
  <div>
    <div class="d-flex align-items-center justify-content-between mb-4">
      <div>Showing 1–12 of 24 results</div>
      <app-form-select
          :options="sortData"
          :placeholder="'Default search'"
          :tabIndex="4"
          key="sort"
          name="sort"
          v-model="sort"/>
    </div>
    <div class="row">
      <div class="col-lg-3 col-6" v-for="item in listProduct">
        <app-product :product="item"></app-product>
      </div>

      <div class="col-12">
      </div>
    </div>
  </div>
</template>

<script>
  import AppProduct from '../../components/AppProduct';
  import {Product} from '../../models/product';
  import AppFormSelect from '../../components/AppFormSelect';

  export default {
    name: 'products',
    components: {AppFormSelect, AppProduct},
    data() {
      return {
        listProduct: [
          new Product({
            id: 1,
            thumbnail: '/images/ustorebg44.jpg',
            name: 'Nectarines',
            price: '4'
          }),
          new Product({
            id: 2,
            thumbnail: '/images/ustorebg22.jpg',
            name: 'Nectarines',
            price: '4'
          }),
          new Product({
            id: 3,
            thumbnail: '/images/ustorebg11.jpg',
            name: 'Nectarines',
            price: '4'
          }),
          new Product({
            id: 4,
            thumbnail: '/images/ustorebg25.jpg',
            name: 'Nectarines',
            price: '4'
          }),
          new Product({
            id: 5,
            thumbnail: '/images/ustorebg11.jpg',
            name: 'Nectarines',
            price: '4'
          }),
          new Product({
            thumbnail: '/images/ustorebg22.jpg',
            name: 'Nectarines',
            price: '4'
          }),
        ],
        sort: null,
        sortData: ['1', '2', '3'],
        sortData2: [
          {
            id: 0,
            text: 'hello',
            value: 'hihi'
          },
          {
            id: 1,
            text: 'hello',
            value: 'hihi'
          },
          {
            id: 2,
            text: 'hello',
            value: 'hihi'
          },
          {
            id: 3,
            text: 'hello',
            value: 'hihi'
          }
        ]
      }
    },
    created() {

    },
    mounted: function () {
      setTimeout(() => {
        console.log($('#demoSelect'));
        // $('#demoSelect').select2();
      }, 1000)
    }
  }
</script>

<style scoped>

</style>
