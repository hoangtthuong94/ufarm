<template>
  <nuxt-link :to="''" class="product d-flex align-items-center">
    <div class="thumbnail" :style="{backgroundImage: product.thumbnail ? `url(${product.thumbnail})`: null,}"></div>
    <div>
      <h2 class="product-name">{{product.name}}</h2>
      <div class="price">
        <span class="price-old">$12.00</span>
        {{product.price}}
      </div>
    </div>
  </nuxt-link>

</template>

<script>
  import {Product} from '../models/product';

  export default {
    name: 'AppProductThumbnailInline',
    props: {
      product: {
        type: Product
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/variables";

  .product {
    .thumbnail {
      width: 60px;
      height: 60px;
      background-position: center;
      background-size: cover;
      margin-right: 5px;
    }

    .product-name {
      color: $word-pink-gray-color;
      font-size: 14px;
      margin-bottom: 0;
    }

    .price {
      color: $word-main-color;
    }

    .price-old {
      text-decoration: line-through;
    }

    &:hover {
      .product-name {
        color: $word-pink-gray-hover-color;
      }
    }
  }
</style>
