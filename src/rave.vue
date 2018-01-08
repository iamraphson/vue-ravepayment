<template>
    <button v-text="text" :class="styleClass" @click="payWithRave"></button>
</template>

<script type="text/javascript">
  export default {
      props: {
          isProduction: {
              type: Boolean,
              required: false,
              default: false
          },
          text: {
              type: String,
              default: 'Make Payment'
          },
          styleClass: {
              type: String,
              default: 'payButton'
          },
          email: {
              type: String,
              required: true
          },
          amount: {
              type: Number,
              required: true
          },
          raveKey: {
              type: String,
              required: true
          },
          reference: {
              type: String,
              required: true
          },
          callback: {
              type: Function,
              required: true,
              default: (response) => {}
          },
          close: {
              type: Function,
              required: true,
              default: () => {}
          },
          metadata: {
              type: Object,
              default: () => { return {} }
          },
          currency: {
              type: String,
              default: 'NGN'
          },
          country: {
              type: String,
              default: 'NG'
          },
          customer_firstname: {
              type: String,
              default: ''
          },
          customer_lastname: {
              type: String,
              default: ''
          },
          custom_title: {
              type: String,
              default: ''
          },
          custom_description: {
              type: String,
              default: ''
          },
          custom_logo: {
              type: String,
              default: ''
          }
      },
      created() {
          const script = document.createElement('script')
          script.src = (!this.isProduction)
      ? 'http://flw-pms-dev.eu-west-1.elasticbeanstalk.com/flwv3-pug/getpaidx/api/flwpbf-inline.js'
      : 'https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js'
          document.getElementsByTagName('head')[0].appendChild(script)
      },
      methods: {
          payWithRave() {
              window.getpaidSetup({
                  customer_email: this.email,
                  amount: this.amount,
                  txref: this.reference,
                  PBFPubKey: this.raveKey,
                  onclose: () => this.close(),
                  callback: response => this.callback(response),
                  meta: this.metadata,
                  currency: this.currency,
                  country: this.country,
                  customer_firstname: this.customer_firstname,
                  customer_lastname: this.customer_lastname,
                  custom_title: this.custom_title,
                  custom_description: this.custom_description,
                  custom_logo: this.custom_logo
              })
          }
      }
  }
</script>
<style>
    .payButton{
        color: #61DAFB;
        width: 250px;
        height: 50px;
        font-weight: 800;
    }
</style>