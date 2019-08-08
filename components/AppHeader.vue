<template>
  <header>
    <div class="collapse-menu">
      <div class="text-right">
        <b-button v-b-toggle.collapse-main-top-menu class="btn-collapse">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </b-button>
      </div>
      <b-collapse id="collapse-main-top-menu">
        <ul class="main-top-menu">
          <li class="menu-item"><a href=""><span>HOME</span></a></li>
          <li class="menu-item"><a href=""><span>SHOP</span></a></li>
          <li class="menu-item"><a href=""><span>BLOG</span></a></li>
          <li class="menu-item"><a href=""><span>CART</span></a></li>
          <li class="menu-item"><a href=""><span>CHECKOUT</span></a></li>
          <li class="menu-item"><a href=""><span>CONTACT</span></a></li>
        </ul>
      </b-collapse>
    </div>

    <div class="secondary-navigation-bar-wrapper">
      <div class="secondary-navigation-bar container">
        <div class="secondary-navigation-bar-content row align-content-center">
          <div class="col-12 col-md-6">
            <ul class="social-icons text-center text-md-left">
              <li>
                <a title="Twitter" href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
              </li>
              <li>
                <a title="Facebook" href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
              </li>
              <li>
                <a title="Mail" href=""><i class="fa fa-envelope"></i></a>
              </li>
              <li>
                <a href="tel:+0009876543"><i class="fa fa-phone"></i> Questions? +(000) 987-6543</a>
              </li>
            </ul>
          </div>
          <div class="secondary-nav-bar-location-3 col-12 col-md-6">
            <div class="secondary-menu-header">
              <ul class="menu text-center text-md-right">
                <li class="menu-item">
                  <a href="">Shop <i class="fa fa-shopping-cart"></i></a>
                </li>
                <li class="menu-item">
                  <a href="">Wishlist <i class="fa fa-heart"></i></a>
                </li>
                <li class="menu-item">
                  <a href="">My account <i class="fas fa-sign-out-alt"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-navigation">
      <div class="container">
        <div class="row align-items-stretch">
          <div class="col-12 col-md-3 logo">
            <h1 class="m-0">
              <nuxt-link :to="localePath('index')" title="UStore"></nuxt-link>
            </h1>
          </div>
          <div class="col-12 col-md-9">
            <div class="nav-cart">
              <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
              <nuxt-link :to="switchLocalePath('vi')">Vietnam</nuxt-link>
              <router-link to="login" class="login">Login |</router-link>
              <div class="my-cart">
                <i class="fas fa-shopping-basket"></i>
                Cart: $129.39 (8)
                <!--<div>
                  <h3>Cart</h3>
                  <ul class="list-product-selected"></ul>
                  <div class="total"></div>
                  <div class="btn-action-cart">
                    <a href="" class="btn btn-gray-transparent">View Cart</a>
                    <a href="" class="btn btn-black">Check out</a>
                  </div>
                </div>-->
                <div v-for="myProduct in cart">
                  {{myProduct.id}}
                </div>
              </div>
            </div>
            <ul class="main-top-menu hide-md">
              <li class="menu-item"><a href=""><span>{{ $t('questions') }}</span></a></li>
              <li class="menu-item"><a href=""><span>SHOP</span></a></li>
              <li class="menu-item"><a href=""><span>BLOG</span></a></li>
              <li class="menu-item"><a href=""><span>CART</span></a></li>
              <li class="menu-item"><a href=""><span>CHECKOUT</span></a></li>
              <li class="menu-item"><a href=""><span>CONTACT</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'Header',
    head () {
      return { title: this.$t('questions') }
    },
    computed: mapGetters({
      cart: 'cart/get'
    }),
  }
</script>
