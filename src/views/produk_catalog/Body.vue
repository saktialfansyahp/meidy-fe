<template>
  <div class="fashion_section">
      <div id="main_slider" class="carousel slide" data-ride="carousel">
         <div class="carousel-inner">
            <div class="carousel-item active">
               <div class="container mt-5">
                  <h1 class="fashion_taital">Meidy Busana Muslim</h1>
                  <div class="fashion_section_2">
                     <div class="row mb-4" >
                      <div class="col-lg-4 col-sm-4" v-for="(prdk, index) in produk" :key="index" >
                           <div class="box_main" >
                              <div class="tshirt_img"><img :src="prdk.gambar"></div>
                              <h4 class="shirt_text">{{ prdk.nama_produk }}</h4>
                              <p class="price_text"><span style="color: #262626;">{{ prdk.harga }}</span></p>
                              <div class="btn_main">
                                 <div class="buy_bt"><a href="#">Buy Now</a></div>
                                 <div class="buy_bt"><router-link :to="{name: 'produk.Detailproduk', params: {produkid: prdk.id}}">Detail</router-link></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
         <i class="fa fa-angle-left"></i>
         </a>
         <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
         <i class="fa fa-angle-right"></i>
         </a>
      </div>
   </div>
  </template>
  <script setup>
  import axios from 'axios'
  import { onMounted, ref } from 'vue'
  
  const produk = ref([])
  
          //mounted
  onMounted(() => {
  
      //get API from Laravel Backend
      axios.get('http://127.0.0.1:8000/api/produkapi')
      .then(response => {
          
          //assign state posts with response data
          produk.value = response.data.data
          console.log(produk.value);
  
      }).catch(error => {
          console.log(error.response.data)
      })
  
  })
  </script>