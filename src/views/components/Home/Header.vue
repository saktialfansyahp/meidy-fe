<template>
   <!-- banner bg main start -->
   <div class="banner_bg_main">
      <!-- header top section start -->
      <div class="container">
         <div class="header_section_top">
            <div class="row">
               <div class="col-sm-12  ">
                  <div class="custom_menu mx-10">
                     <ul>
                        <li><a href="/aboutmeidy">About</a></li>
                        <li><a href="/catalogproduk">Catalog</a></li>
                        <li><a href="#my_footer">Customer Service</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- header top section start -->
      <!-- logo section start -->
      <div class="logo_section">
         <div class="container">
            <div class="row mt-5">
            </div>
         </div>
      </div>
      <!-- logo section end -->
      <!-- header section start -->
      <div class="header_section">
         <div class="container">
            <div class="containt_main">
               <div id="mySidenav" class="sidenav">
                  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                  <a href="index.html">Home</a>
                  <a href="fashion.html">Fashion</a>
                  <a href="electronic.html">Electronic</a>
                  <a href="jewellery.html">Jewellery</a>
               </div>
               <span class="toggle_icon" onclick="openNav()"><img url="images/toggle-icon.png"></span>
               <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Category
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                     <a class="dropdown-item" href="#">Action</a>
                     <a class="dropdown-item" href="#">Another action</a>
                     <a class="dropdown-item" href="#">Something else here</a>
                  </div>
               </div>
               <div class="main">
                  <!-- Another variation with a button -->
                  <div class="input-group">
                     <input type="text" class="form-control" placeholder="Search">
                     <div class="input-group-append">
                        <button class="btn btn-secondary" type="button"
                           style="background-color: #f26522; border-color:#f26522 ">
                           <i class="fa fa-search"></i>
                        </button>
                     </div>
                  </div>
               </div>
               <div class="header_box">
                  <div class="login_menu">
                     <ul>
                        <li v-if="user != null">
                           <a href="/cart">
                              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                              <span class="padding_10">Cart</span>
                           </a>
                        </li>
                        <li v-if="user != null">
                           <div class="dropdown">
                              <a class="dropdown-toggle" href="#" role="button" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 <i class="fa fa-user" aria-hidden="true"></i>
                                 <span class="padding_10">{{ user.name }}</span>
                              </a>
                              <div class="dropdown-menu" aria-labelledby="userDropdown">
                                 <a class="dropdown-item" href="#" @click="handleLogout">Logout</a>
                              </div>
                           </div>
                        </li>
                        <li v-else>
                           <a href="/login">
                              <i class="fa fa-user" aria-hidden="true"></i>
                              <span class="padding_10">Login</span>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- header section end -->
      <!-- banner section start -->
      <div class="banner_section layout_padding">
         <div class="container">
            <div id="my_slider" class="carousel slide" data-ride="carousel">
               <div class="carousel-inner" h-scroll="handleScroll">
                  <div class="carousel-item active">
                     <div class="row">
                        <div class="col-sm-12">
                           <h1 class="banner_taital">Get Start <br>Your favriot shoping</h1>
                           <div class="buynow_bt"><a href="#">Buy Now</a></div>
                        </div>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <div class="row">
                        <div class="col-sm-12">
                           <h1 class="banner_taital">Get Start <br>Your favriot shoping</h1>
                           <div class="buynow_bt"><a href="#">Buy Now</a></div>
                        </div>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <div class="row">
                        <div class="col-sm-12">
                           <h1 class="banner_taital">Get Start <br>Your favriot shoping</h1>
                           <div class="buynow_bt"><a href="#">Buy Now</a></div>
                        </div>
                     </div>
                  </div>
               </div>
               <a class="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                  <i class="fa fa-angle-left"></i>
               </a>
               <a class="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                  <i class="fa fa-angle-right"></i>
               </a>
            </div>
         </div>
      </div>
      <!-- banner section end -->
   </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';


export default {
  data() {
    return {
      user: null,
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    ...mapGetters(['getUser'])
  },
  async created() {
    this.minNav;
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.user = user;
    }
    console.log(user);
    // this.fetchData()
  },
  methods: {
    ...mapActions(['logout']),
    handleLogout() {
      this.logout()
        .then(() => {
            this.$store.commit('setUser', null);
        })
        .catch(error => {
          // Tangani kesalahan saat logout
          console.error(error);
        });
    }
  },
};
</script>