# Rave Payment Component for Vue 2.x
A Vue Plugin for RavePay Payment Gateway.

### Demo

![Demo Image](rave-demo.png?raw=true "Demo Image")

### Install

##### NPM
```
npm install vue vue-ravepayment --save 
``` 

##### Javascript via CDN
```javascript
<!-- Vue -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<!-- Vue-Paystack -->
<script src="https://unpkg.com/vue-ravepayment/dist/rave.min.js"></script>
```

### Usage

##### Via NPM

###### my-compnent.vue sample
```vue
<template>
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
</template>
<script type="text/javascript">
import Rave from 'vue-ravepayment';
export default {
    components: {
        Rave
    },
    data(){
        return{
          raveBtnText: "Pay Me, My Money",
          raveKey: "FLWPUBK-xxxxxxxxxxxxxxxx-X",
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
    .paymentbtn{
        color: #04193d;
        width: 250px;
        height: 50px;
        font-weight: 800;
    }
</style>
```
[Usage Example via NPM or Yarn](examples/commonjs/App.vue)
#### via CDN
```javascript
new Vue({
    el: '#app',
    components:{
      'Rave': VueRavePayment.default
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
    },
    data: {
      raveBtnText: "Pay Me, My Money",
      raveKey: "FLWPUBK-xxxxxxxxxxxxxxxxx-X",
      email: "foobar@example.com",
      amount: 10000
    }
});
```
[Usage Example via CDN](examples/index.html)

Please checkout [Rave Documentation](https://flutterwavedevelopers.readme.io/docs/rave-inline-js#section-parameter-reference) for other available options you can add to the tag

## Deployment
WHEN DEPLOYING TO PRODUCTION/LIVE SYSTEM, take note of the following;
1) Change `is-production` attribute in the component tag to `true` i.e `:is-production="false"`
2) Change RavePay PUBLIC KEY 

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Some commit message'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request 😉😉

## How can I thank you?

Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter or Any Social Media? Spread the word!

Don't forget to [follow me on twitter](https://twitter.com/iamraphson)!

Thanks!
Ayeni Olusegun.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
