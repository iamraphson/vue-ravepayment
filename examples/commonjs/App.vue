<template>
    <div class="App">
        <p class="App-intro">
            <Rave
                :is-production="false"
                :text="raveBtnText"
                style-class="paymentbtn"
                :email="email"
                :amount="amount"
                :reference="reference"
                :rave-key="raveKey"
                :callback="callback"
                :close="close"
                currency="NGN"
            ></Rave>
        </p>
    </div>
</template>

<script type="text/javascript">
import Rave from '../../src';
export default {
    components: {
        Rave
    },
    data(){
        return{
          raveBtnText: "Pay Me, My Money",
          raveKey: "FLWPUBK-xxxxxxxxxxxxx-X",
          email: "foobar@example.com",
          amount: 10000
        }
    },
    computed: {
      reference(){
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( let i=0; i < 10; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
      }
    },
    methods: {
      callback: function(response){
        console.log(response)
      },
      close: function(){
        console.log("Payment closed")
      }
    }
}
</script>
<style>
    .App {
        text-align: center;
    }

    .App-intro {
        font-size: large;
    }
    .paymentbtn{
        color: #04193d;
        width: 250px;
        height: 50px;
        font-weight: 800;
    }
</style>
