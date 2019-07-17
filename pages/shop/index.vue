<template>
  <div>
    <div class="row">
      <div class="col-lg-3 col-6" v-for="product in listProduct">
        <app-product></app-product>
      </div>
    </div>
  </div>
</template>

<script>
  import AppProduct from '../../components/AppProduct';

  export default {
    name: 'shop',
    components: {AppProduct},
    data() {
      return {
        listProduct: [
          {
            thumbnail: '../static/images/ustorebg44.jpg',
            title: 'Nectarines',
            rating: 4,
            price: '4'
          },
          {
            thumbnail: '../static/images/ustorebg25.jpg',
            title: 'Almonds',
            rating: 4,
            price: '4'
          },
          {
            thumbnail: '../static/images/ustorebg22.jpg',
            title: 'Apples',
            rating: 4,
            price: '4'
          },
          {
            thumbnail: '../static/images/ustorebg11.jpg',
            title: 'Bananas',
            rating: 4,
            price: '4'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
