<template>
  <div class="product" v-if="product">
    <nuxt-link :to="''">
      <div class="thumbnail" :style="{backgroundImage: product.thumbnail ? `url(${product.thumbnail})`: null,}"></div>
      <h2 class="product-name">
        {{product.name}}</h2>
      <div class="price">
        <span class="price-old">$12.00</span>
        {{product.price}}
      </div>
    </nuxt-link>

    <button class="btn btn-pink-gray" @click="addToCard(product.id)">Add to card</button>
    <br>
    <button class="add-wish-list"><i class="far fa-heart"></i> Add to Wishlist</button>
  </div>
</template>

<script>
  import {Product} from '../models/product';

  export default {
    name: 'AppProduct',
    props: {
      product: {
        type: Product
      }
    },
    methods: {
      addToCard() {
        this.$store.commit('cart/add', this.product)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/variables";

  .product {
    text-align: center;
    margin-bottom: 30px;

    .thumbnail {
      width: 100%;
      padding-bottom: 80%;
      background-color: $gray-3;
      margin-bottom: 15px;
      background-position: center;
      background-size: cover;
    }

    .product-name {
      font-size: 14px;
    }

    .price {
      color: $orange;
      font-weight: bold;
      font-size: 15px;
      margin-bottom: 10px;
    }

    .price-old {
      color: $yellow;
      font-weight: lighter;
      display: inline-block;
      margin-right: 5px;
      text-decoration: line-through;
    }

    .add-wish-list {
      padding: 10px 0;
      border: 0;
      background: transparent;
      color: $pink-gray;

      &:hover {
        opacity: 0.8;
      }
    }
  }
</style>
