<template>
  <div class="homepage">
    <div class="highlight">
      <div class="container">
        <div class="row align-items-stretch">
          <div class="col-lg-8">
            <div class="item item-1">
              <div class="title">Fall harvest</div>
              <div class="description">Always organic and fresh</div>
            </div>

            <div class="row align-items-stretch">
              <div class="col-lg-6 d-flex align-items-stretch">
                <div class="item item-2">
                  <div class="title">CSA Farm</div>
                  <div class="description">Weekly, freshly picked food boxes</div>
                  <nuxt-link :to="'/'" class="btn btn-warning">Our service</nuxt-link>
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-stretch">
                <div class="item item-3">
                  <div class="title">Homemade food</div>
                  <div class="description">since 1973</div>
                  <nuxt-link :to="'/'" class="btn btn-warning">Our service</nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 d-flex align-items-stretch">
            <div class="item item-4 text-center">
              <div class="title">Beyond organic</div>
              <div class="description">UFarm is a family owned permaculture farm growing fresh and nutritious produce
                and herbs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="introduce">
      <div class="container">
        <ul class="introduce-tab list-unstyled d-flex flex-wrap justify-content-center">
          <li>Story</li>
          <li class="active">Mission</li>
          <li>Vission</li>
          <li>Brand</li>
        </ul>

        <div class="introduce-content">
          <div class="row">
            <div class="col-lg-6 d-flex align-items-stretch">
              <div class="thumbnail"></div>
            </div>
            <div class="col-lg-6">
              <h2 class="title">Our mission!</h2>
              <div class="sub-title">100% Organic. Local. Sustainable.</div>
              <div class="description">
                An summo homero expetendis mel. Ius iisque iracundia cu, duo eius mazim omnium in. In discere oportere
                cum, elit eloquentiam ex eam. Ei dicat scaevola duo. Et mea possim persecuti omittantur, cibo dicat
                molestie ea eos. Nec copiosae sapientem et, vivendum insolens in est, has timeam detraxit id. Delenit
                verterem scriptorem has in, nisl quodsi epicurei no sea, eam at magna vocibus offendit. Ei dicat
                scaevola duo. Et mea possim persecuti omittantur, cibo dicat molestie ea eos. Nec copiosae sapientem et,
                vivendum insolens in est, has timeam detraxit id.
              </div>
              <nuxt-link :to="'/'" class="btn btn-gray-transparent">Learn more</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="top-products">
      <div class="container">
        <h2 class="title">OUR TOP SELLING PRODUCTS</h2>
        <div class="sub-title">100% Organic. Local. Sustainable.</div>
        <div class="description">An summo homero expetendis mel. Ius iisque iracundia cu, duo mazim omnium in.<br>
          In discere oportere cum, elit eloquentiam ex scaevola duo.
        </div>

        <div class="top-products-list row">
          <div class="col-lg-3 col-md-6">
            <div class="item">
              <div class="info">
                <a class="name">Name</a>
                <div class="price">$1.50</div>
                <div class="category">
                  <a href="">Vegetables</a>
                </div>
              </div>
              <div class="thumbnail">
                <button>Add to card</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="item">
              <div class="info">
                <a class="name">Name</a>
                <div class="price">$1.50</div>
                <div class="category">
                  <a href="">Vegetables</a>
                </div>
              </div>
              <div class="thumbnail">
                <button>Add to card</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="item">
              <div class="info">
                <a class="name">Spice mix</a>
                <div class="price">$1.50</div>
                <div class="category">
                  <a href="">Vegetables</a>
                </div>
              </div>
              <div class="thumbnail">
                <button>Add to card</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="item">
              <div class="info">
                <a class="name">Flavored salt</a>
                <div class="price">$12.00 $9.99</div>
                <div class="category">
                  <a href="">Vegetables</a>
                </div>
              </div>
              <div class="thumbnail">
                <button>Add to card</button>
              </div>
            </div>
          </div>

        </div>

        <div class="text-center">
          <a href="" class="btn btn-gray-transparent">See all products</a>
        </div>

        <div class="box text-center">
          <h2 class="title">We offer next day delivery and free shipping on orders over $50.00!</h2>
          <div>I am promo text. Click edit button to change this text. Lorem ipsum dolor sit amet consectetur.<br>
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </div>
        </div>
      </div>
    </section>

    <section class="newsletter">
      <div class="container">
        <h4>Join our newsletter</h4>
        <div>Sign up to receive news about new services, promotions, products and more.</div>
        <form>
          <div class="d-flex flex-wrap">
            <app-form-input
                :required="true"
                :type="'text'"
                :placeholder="'Your First Name'"
                v-model="firstName"/>
            <app-form-input
                :required="true"
                :type="'email'"
                :placeholder="'Your email'"
                v-model="email"/>
            <div class="btn-submit-newsletter">
              <button class="btn btn-warning">Subscribe</button>
            </div>
          </div>
        </form>
      </div>
    </section>

    <section class="more-product">
      <div class="container">
        <h2 class="title">WE ARE MORE THAN AN ORGANIC FARM</h2>
        <div class="description">Lorem ipsum dolor sit amet nec, consectetuer adipiscing elit. Aenean commodo ligula
          eget dolor. Aenean massa. Cum sociis natoque. Ipsum dolor sit amet nec, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque.
        </div>

        <div class="list-more-product"></div>
        <div class="owl-carousel owl-theme">
          <div class="item">
            <div class="thumbnail"></div>
            <div class="info">
              <nuxt-link :to="''" class="name">Name</nuxt-link>
              <div class="category">
                <nuxt-link :to="''">Vegetables</nuxt-link>
              </div>
              <div class="description-product">Lorem ipsum dolor sit amet nec, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </div>
            </div>
          </div>

          <div class="item">
            <div class="thumbnail"></div>
            <div class="info">
              <nuxt-link :to="''" class="name">Name</nuxt-link>
              <div class="category">
                <nuxt-link :to="''">Vegetables</nuxt-link>
              </div>
              <div class="description-product">Lorem ipsum dolor sit amet nec, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </div>
            </div>
          </div>

          <div class="item">
            <div class="thumbnail"></div>
            <div class="info">
              <nuxt-link :to="''" class="name">Name</nuxt-link>
              <div class="category">
                <nuxt-link :to="''">Vegetables</nuxt-link>
              </div>
              <div class="description-product">Lorem ipsum dolor sit amet nec, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </div>
            </div>
          </div>

          <div class="item">
            <div class="thumbnail"></div>
            <div class="info">
              <nuxt-link :to="''" class="name">Name</nuxt-link>
              <div class="category">
                <nuxt-link :to="''">Vegetables</nuxt-link>
              </div>
              <div class="description-product">Lorem ipsum dolor sit amet nec, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </div>
            </div>
          </div>

          <div class="item">
            <div class="thumbnail"></div>
            <div class="info">
              <nuxt-link :to="''" class="name">Name</nuxt-link>
              <div class="category">
                <nuxt-link :to="''">Vegetables</nuxt-link>
              </div>
              <div class="description-product">Lorem ipsum dolor sit amet nec, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </div>
            </div>
          </div>

          <div class="item">
            <div class="thumbnail"></div>
            <div class="info">
              <nuxt-link :to="''" class="name">Name</nuxt-link>
              <div class="category">
                <nuxt-link :to="''">Vegetables</nuxt-link>
              </div>
              <div class="description-product">Lorem ipsum dolor sit amet nec, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>

  import AppFormInput from '../components/AppFormInput';

  export default {
    name: 'homePage',
    components: {AppFormInput},
    data() {
      return {
        email: '',
        firstName: ''
      }
    },
    mounted() {
      $('.owl-carousel').owlCarousel({
        margin: 20,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3
          }
        }
      });
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/variables";

  .homepage {
    padding-top: 30px;
  }

  section {
    .title {
      font-size: 35px;
      text-transform: uppercase;
      padding: 30px 0 0;
    }

    .sub-title {
      color: $gray-3;
      font-size: 18px;
      margin-top: 5px;
      font-family: 'Pacifico', cursive;
    }
  }

  .highlight {
    .item {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      color: white;
      width: 100%;

      .title {
        font-weight: 700;
      }

      .description {
        font-size: 18px;
        font-family: 'Pacifico', cursive;
      }

      a {
        padding: 8px 20px;
        font-size: 13px;
      }
    }

    .item-1 {
      background-image: url("../static/images/ustorebg11.jpg");
      margin-bottom: 30px;
      text-align: center;
      padding: 120px 0;

      .title {
        font-size: 45px;
      }
    }

    .item-2 {
      background-image: url("../static/images/ustorebg22.jpg");
    }

    .item-3 {
      background-image: url("../static/images/ustorebg25.jpg");
    }

    .item-2, .item-3 {
      padding: 50px 15px;

      .title {
        font-size: 30px;
        margin-bottom: 20px;
      }

      .description {
        margin-bottom: 20px;
      }
    }

    .item-4 {
      background-image: url("../static/images/ustorebg44.jpg");
      padding: 35px 15px;

      .title {
        font-size: 40px;
        margin: 30px 0 10px;
      }
    }
  }

  .introduce-tab {
    background: $gray-4;
    padding: 35px 0;
    font-weight: bold;
    margin: 30px 0;

    li {
      padding: 0 12px;
      font-size: 18px;
      text-transform: uppercase;
      cursor: pointer;

      &:hover {
        color: $yellow;
      }

      &.active {
        color: $yellow;
      }
    }
  }

  .introduce-content {
    margin-bottom: 30px;

    .thumbnail {
      background-image: url("../static/images/ustorebg25.jpg");
      background-position: center;
      background-size: cover;
      width: 100%;
    }

    .description {
      margin: 10px 0 30px;
    }

    .btn-gray-transparent {
      margin-bottom: 30px;
    }
  }

  .top-products {
    text-align: center;
    background-color: $gray-5;
    padding: 30px 0;

    .description {
      margin: 10px 0;
    }
  }

  .top-products-list {
    margin-top: 30px;

    .item {
      margin-bottom: 30px;

      .info {
        padding: 30px 15px;
        text-align: center;
        background: rgba(234, 235, 239, 0.75);
        border: 1px solid $gray-4;
      }

      .name {
        font-size: 17px;
        font-weight: 700;
        display: block;
      }

      .price {
        background: $yellow;
        font-size: 17px;
        padding: 2px 11px;
        display: inline-block;
        color: white;
        font-weight: 700;
        margin: 5px 0;
      }

      .category {
        a {
          color: #777777;
          font-size: 12px;

          &:hover {
            text-decoration: none;
            color: black;
          }
        }
      }

      .thumbnail {
        width: 100%;
        padding-bottom: 100%;
        position: relative;
        background-size: cover;
        background-position: center;
        background-image: url("../static/images/mix-1.jpg");

        &:before {
          background: rgba(0, 0, 0, 0.5);
          content: '';
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          transition: all 0.5s;
          position: absolute;
          opacity: 0;
        }

        button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border: 0;
          padding: 5px 10px;
          transition: all 0.5s;
          opacity: 0;

          &:hover {
            background: rgba(255, 255, 255, 0.2);
          }
        }

      }

      &:hover {
        .thumbnail {
          &:before {
            opacity: 1;
          }

          button {
            opacity: 1;
          }
        }
      }
    }
  }

  .box {
    background: $pink-gray;
    padding: 28px;
    border-radius: 5px;
    color: white;
    margin-top: 60px;

    .title {
      color: white;
      font-size: 23px;
      margin: 0 0 20px 0;
    }
  }

  .newsletter {
    background-image: url("../static/images/foodbg24.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 70px 0;
    color: white;

    h4 {
      font-size: 26px;
      margin: 15px 0 5px;
      color: white;
    }

    form {
      padding: 70px 0 0;
    }

    .btn {
      padding: 7px 15px;
    }

    .form-group {
      width: 300px;
      margin-right: 15px;
    }
  }

  .more-product {
    background-image: url("../static/images/food-sacred-bg07.jpg");
    background-position: center;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 30px;

    h2 {
      margin-bottom: 30px;
    }

    .description {
      margin-bottom: 40px;
    }

    .owl-carousel {
      .item {
        .thumbnail {
          padding-bottom: 75%;
          background-size: cover;
          background-image: url("../static/images/ustorebg25.jpg");
        }

        .info {
          background: $gray-5;
          padding: 30px;
        }

        .name {
          font-size: 20px;
          line-height: 25px;
          font-weight: bold;
          color: $word-main-color;

          &:hover {
            color: $yellow;
          }
        }

        .category {
          margin-bottom: 15px;

          a {
            color: $gray;
            font-size: 12px;

            &:hover {
              color: $word-main-color;
            }
          }
        }

        .description-product {
          font-size: 13px;
          line-height: 22px;
        }

      }
    }

  }


  @media (max-width: $breakpoint-lg) {
    .highlight {
      .item {
        margin-bottom: 15px;

        .title {
          font-size: 30px;
        }
      }
    }

    .newsletter {
      .btn-submit-newsletter {
        width: 100%;
        text-align: center;
      }

      form > div {
        justify-content: center;
      }
    }

    .more-product {
      padding-top: 30px;
      padding-bottom: 20px;

      h2 {
        font-size: 26px;
        margin-bottom: 15px;
      }

      .description {
        margin-bottom: 20px;
      }
    }
  }
</style>
