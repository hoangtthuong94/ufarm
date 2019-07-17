<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <a href="" class="logo-footer"></a>
          <h5 class="sub-title">ORGANIC. FRESH. LOCAL.</h5>
          <div>Lorem ipsum dolor sit amet nec, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
            massa. Cum sociis natoque. Ipsum dolor sit amet nec, consectetuer adipiscing elit. Aenean commodo ligula
            eget dolor. Aenean massa. Cum sociis natoque.
          </div>

          <div class="list-social">
            <a href="" target="_blank" title="twitter">
              <i class="fab fa-twitter-square"></i>
            </a>
            <a href="" target="_blank" title="facebook">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="" target="_blank" title="instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" target="_blank" title="youtube">
              <i class="fab fa-youtube-square"></i>
            </a>
            <a href="" target="_blank" title="pinterest">
              <i class="fab fa-pinterest-square"></i>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <h5 class="text-uppercase mt-4 mb-4">JOIN OUR NEWSLETTER</h5>
          <div class="mb-4">
            Sign up to receive news about new services, promotions, products and more.
          </div>
          <form>
            <app-form-input
                placeholder="Email"
                name="subscribe"
                v-model="subscribe"/>
            <button class="btn btn-pink-gray text-uppercase">Sign up</button>
          </form>
        </div>
        <div class="col-md-4">
          <h5 class="text-uppercase mt-4 mb-4">LOCATION</h5>

          <div class="contact">
            <div><i class="fas fa-map-marker-alt"></i>Forest Rte 5N28 • Santa Clarita, CA</div>
            <div><i class="fas fa-phone"></i>716.987.6543</div>
          </div>
          <div id="map"></div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="container">
        © 2019 <b>UFarm</b> | <a href="">Privacy Policy</a> | Designed with U-Design Theme
      </div>
    </div>
  </footer>
</template>

<script>
  import AppFormInput from './AppFormInput';

  export default {
    name: 'AppFooter',
    components: {AppFormInput},
    data() {
      return {
        subscribe: ''
      }
    },
    mounted: function () {
      console.log('map: ', google.maps);
      let positionStore = {lat: 10.774008, lng: 106.671531};

      let map = new google.maps.Map(document.getElementById('map'), {
        center: positionStore,
        zoom: 16,
      });

      let marker = new google.maps.Marker({position: positionStore, map: map});
    }
  }
</script>

<style lang="scss" scoped>
  #map {
    height: 250px;
    width: 100%;
    margin: 15px 0 30px;
  }
</style>
