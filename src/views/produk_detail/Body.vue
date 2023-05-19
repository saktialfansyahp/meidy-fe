<template>
    <div class="container bootdey mt-5">
        <div class="row">
            <div class="col-md-12">
                <section class="panel">
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-6 my-5">
                                <div class="pro-img-details">
                                    <img :src="produk.gambar" alt>
                                </div>
                            </div>
                            <div class="col-6 mt-5">
                                <h4 class="pro-d-title">
                                    <strong>
                                        {{ produk.nama_produk }}
                                    </strong>
                                </h4>
                                <p>
                                    {{ produk.dekripsi }}
                                </p>
                                <div class="m-bot15"> <strong>Deskripsi : </strong><span class="pro-price">
                                        <p>{{ produk.deskripsi }}</p>
                                    </span></div>
                                <div class="m-bot15"> <strong>Warna : </strong><span class="pro-price">{{
                                    produk.warna }}</span></div>
                                <div class="m-bot15"> <strong>Stok : </strong><span class="pro-price">{{
                                    produk.stok }}</span></div>
                                <div class="m-bot15"> <strong>Harga : </strong><span class="pro-price">{{
                                    produk.harga }}</span></div>
                                <div class="form-group">
                                    <label>Quantity</label>
                                    <input type="quantiy" placeholder="1" class="form-control quantity">
                                </div>
                                <div class="form-group">
                                    <button class=" form-control btn btn-round btn-danger" type="button"><i
                                            class="fa fa-shopping-cart"></i> Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const produk = ref([])

//mounted
mounted(() => {

    //get API from Laravel Backend
    axios.get('http://127.0.0.1:8000/api/produkapi/1')
        .then(response => {

            //assign state posts with response data
            produk.value = response.data.data
            console.log(produk.value);
            
        }).catch(error => {
            console.log(error.response.data)
        })
    
})
console.log(this.$route.query.produkid);

</script>