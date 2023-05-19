<template>
    <div class="container">
        <table id="cart" class="table table-hover table-condensed">
            <thead>
                <tr>
                    <th style="width:50%">Nama Produk</th>
                    <th style="width:10%">Harga</th>
                    <th style="width:8%">Quantity</th>
                    <th style="width:22%" class="text-center">Subtotal</th>
                    <th style="width:10%"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(prdk, index) in produk" :key="index">
                    <td data-th="Product">
                        <div class="row">
                            <div class="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..."
                                    class="img-responsive" /></div>
                            <div class="col-sm-8">
                               <span>{{ prdk.produk.nama_produk }}</span>
                            </div>
                        </div>
                    </td>
                    <td data-th="Price">Rp {{ prdk.produk.harga}}</td>
                    <td data-th="Quantity">
                        <input type="number" class="form-control text-center" @change="addQuantity(index, prdk.jumlah)" v-model="prdk.jumlah">
                    </td>
                    <td data-th="Subtotal" class="text-center">Rp {{ subtotal[index] }}</td>
                    <td class="actions" data-th="">
                        <button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td><a href="/" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</a></td>
                    <td colspan="2" class="hidden-xs"></td>
                    <td class="hidden-xs text-center"><strong>Total {{ hargaTotal }}</strong></td>
                    <td><a href="#" @click="addPesanan" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></td>
                </tr>
            </tfoot>
        </table>
    </div>
</template> 

<script>
import axios from 'axios'

export default {
  data() {
    return {
      user: null,
      produk: null,
      quantity: [],
      subtotal: [],
      total: 0,
    };
  },
  computed: {
    hargaTotal() {
        return this.subtotal.reduce((total, sub) => total + sub, 0);
    }
  },
  async created() {
    this.minNav;
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.user = user;
    }
    console.log(user);
    this.fetchData()
  },
  methods: {
    addQuantity(index, jumlah){
        this.subtotal[index] = this.produk[index].produk.harga * jumlah;
        console.log(index, jumlah)
    }, 
    fetchData(){
        const id = this.user.id
        axios.get(`http://127.0.0.1:8000/api/cartapi/${id}`)
            .then(response => {
                
                //assign state posts with response data
                // produk.value = response.data.data[0].produks;
                this.produk = response.data
                console.log(response.data);
                console.log(this.produk);
                console.log(id)

            }).catch(error => {
                console.log(error.response.data)
            })
    },
    addPesanan(){
        const produks = this.produk;
        const data = {
            user_id: this.user.id,
            produks: [],
            harga_total: this.hargaTotal,
            jumlah: 3,
            status: 'Proses'
        };

        produks.forEach((prdk) => {
            const produkData = {
                produk_id: prdk.produk_id,
                jumlah: prdk.jumlah
            };
            data.produks.push(produkData);
        });
        console.log(data)

        // axios.post(`http://127.0.0.1:8000/api/pesanan`, data)
        // .then(response => {
        //     console.log(response)
        //     this.$router.push('/')
        // })
        // .catch(error => {
        //     console.log(error)
        //     console.log(data)
        // })
    }
  },
};
</script>