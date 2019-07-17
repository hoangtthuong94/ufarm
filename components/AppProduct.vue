<template>
  <div class="product">
    <nuxt-link :to="''">
      <div class="thumbnail"></div>
      <h2 class="product-name">hihi</h2>
      <div class="price">
        <span class="price-old">$12.00</span>
        $17.50
      </div>
    </nuxt-link>

    <button class="btn btn-pink-gray">Add to card</button>
    <br>
    <button class="add-wish-list"><i class="far fa-heart"></i> Add to Wishlist</button>
  </div>
</template>

<script>
  export default {
    name: 'AppProduct',
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
      background: $gray-3;
      margin-bottom: 15px;
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
