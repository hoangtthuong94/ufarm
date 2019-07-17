<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="sidebar">
          <div class="widget">
            <div class="search">
              <input type="text">
              <button class="btn-search"><i class="fas fa-search"></i></button>
            </div>
          </div>

          <div class="widget">
            <h3 class="widget-title">Product category</h3>
            <ul class="product-category">
              <li>
                <nuxt-link :to="'/'">Fruits <span>(7)</span></nuxt-link>
              </li>
              <li>
                <nuxt-link :to="'/'">Grain <span>(0)</span></nuxt-link>
              </li>
              <li>
                <nuxt-link :to="'/'">Nuts <span>(4)</span></nuxt-link>
              </li>
              <li>
                <nuxt-link :to="'/'">Uncategorized <span>(9)</span></nuxt-link>
              </li>
            </ul>
          </div>

          <div class="widget">
            <h3 class="widget-title">Top rated products</h3>
            <ul class="product-list">
              <li></li>
            </ul>
          </div>


        </div>
      </div>
      <div class="col-md-8">
        <nuxt-child/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'shop',
    data() {
      return {
        listProductSidebar: [
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
