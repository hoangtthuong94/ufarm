<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="sidebar">
          <div class="widget">
            <div class="search">
              <input type="text" placeholder="Search product" v-model="keySearch">
              <button class="btn-search"><i class="fas fa-search"></i></button>
            </div>
          </div>

          <div class="widget">
            <h3 class="widget-title">Product category</h3>
            <ul class="product-category list-border">
              <li>
                <nuxt-link :to="'/'">
                  <i class="fas fa-long-arrow-alt-right"></i>
                  Fruits <span class="posts-counter">(7)</span></nuxt-link>
              </li>
              <li>
                <nuxt-link :to="'/'">
                  <i class="fas fa-long-arrow-alt-right"></i>
                  Grain <span class="posts-counter">(0)</span></nuxt-link>
              </li>
              <li>
                <nuxt-link :to="'/'">
                  <i class="fas fa-long-arrow-alt-right"></i>
                  Nuts <span class="posts-counter">(4)</span></nuxt-link>
              </li>
              <li>
                <nuxt-link :to="'/'">
                  <i class="fas fa-long-arrow-alt-right"></i>
                  Uncategorized <span class="posts-counter">(9)</span></nuxt-link>
              </li>
            </ul>
          </div>

          <div class="widget">
            <h3 class="widget-title">Top rated products</h3>
            <ul class="product-list list-border">
              <li v-for="item in listProduct">
                <app-product-thumbnail-inline :product="item"></app-product-thumbnail-inline>
              </li>
            </ul>
          </div>

          <div class="widget">
            <h3 class="widget-title">Newest products in our store</h3>
            <ul class="product-list list-border">
              <li v-for="item in listProduct">
                <app-product-thumbnail-inline :product="item"></app-product-thumbnail-inline>
              </li>
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
  import {Product} from '../models/product';
  import AppProductThumbnailInline from '../components/AppProductThumbnailInline';

  export default {
    name: 'products',
    components: {AppProductThumbnailInline},
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
        keySearch: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/variables";

  .container {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .sidebar {
    padding-bottom: 50px;

    .search {
      border: 1px solid #DDD9D9;

      input {
        border: 0;
        width: calc(100% - 30px);
        padding: 3px 10px;

        &:focus {
          outline: none;
        }
      }

      button {
        color: $gray;
        background: transparent;
        width: 25px;
        border: 0;
      }
    }

    .widget {
      padding: 10px 0;
    }

    .widget-title {
      font-size: 17px;
      margin: 12px 0 0;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(148, 122, 153, .3);
    }

    .list-border {
      list-style: none;
      margin: 0;
      padding: 0;

      a {
        display: block;
        padding: 10px 0;
        color: $word-pink-gray-color;
        border-bottom: 1px solid rgba(148, 122, 153, .3);


        &:hover {
          color: $word-pink-gray-hover-color;
        }


      }
    }

    .product-category {
      a {
        i {
          font-size: 13px;
          margin-right: 5px;
        }

        .posts-counter {
          color: $bold-color;
        }
      }
    }
  }
</style>
