<template>
  <button :class="``" @click="payWithRave">
    <slot>Make Payment</slot>
  </button>
</template>

<script type="text/javascript">
export default {
  props: {
    isProduction: {
      type: Boolean,
      required: false,
      default: false
    },
    styleClass: {
      type: String,
      default: "payButton"
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
      default: response => {}
    },
    close: {
      type: Function,
      required: true,
      default: () => {}
    },
    metadata: {
      type: Object,
      default: () => {
        return {};
      }
    },
    currency: {
      type: String,
      default: "NGN"
    },
    country: {
      type: String,
      default: "NG"
    },
    customerFirstname: {
      type: String,
      default: ""
    },
    customerLastname: {
      type: String,
      default: ""
    },
    customerPhone: {
      type: String,
      required: true
    },
    customTitle: {
      type: String,
      default: ""
    },
    customLogo: {
      type: String,
      default: ""
    },
    redirectUrl: {
      type: String,
      default: ""
    },
    paymentMethod: {
      type: String,
      default: "both"
    },
    paymentPlan: {
      type: String,
      default: ""
    },
    hostedPayment: {
      type: Number,
      default: 0
    },
    subaccounts: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  created() {
    const script = document.createElement("script");
    script.src = !this.isProduction
      ? "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js"
      : "https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  },
  methods: {
    payWithRave() {
      window.addEventListener("load", function(event) {
        // here is the Vue code
        window.getpaidSetup({
        customer_email: this.email,
        customer_phone: this.customerPhone,
        amount: this.amount,
        txref: this.reference,
        PBFPubKey: this.raveKey,
        onclose: () => this.close(),
        callback: response => this.callback(response),
        meta: this.metadata,
        currency: this.currency,
        country: this.country,
        customer_firstname: this.customerFirstname,
        customer_lastname: this.customerLastname,
        custom_title: this.customTitle,
        custom_logo: this.customLogo,
        redirect_url: this.redirectUrl,
        payment_plan: this.paymentPlan,
        payment_methods: this.paymentMethod,
        subaccounts: this.subaccounts,
        hosted_payment: this.hostedPayment
      });
      });
      
    }
  }
};
</script>
<style>
.payButton {
  color: #61dafb;
  width: 250px;
  height: 50px;
  font-weight: 800;
}
</style>
