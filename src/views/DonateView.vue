<template>
  <div class="container">
    <h1 class="mt-5">Support Us!</h1>
    <h2>PAYMENT AMOUNT</h2>
    <p>Please select the amount you wish to donate:</p>
    <div class="row">
      <div class="col-6 mb-3" v-for="voucher in vouchers" :key="voucher.amount">
        <div
          :class="{
            'payment-method': true,
            active: selectedVoucher === voucher,
          }"
          @click="selectedVoucher = voucher"
        >
          <div class="method-text">${{ voucher.amount }}</div>
        </div>
      </div>
    </div>

    <div v-if="selectedVoucher">
      <h2>PAYMENT METHOD</h2>
      <p>Please choose whether you want to pay with fiat or cryptocurrency:</p>

      <div class="row">
        <div class="col-6 mb-3">
          <div
            class="payment-method"
            :class="{ active: paymentType === 'fiat' }"
            @click="paymentType = 'fiat'"
          >
            <div class="method-text">
              <i class="bi bi-currency-dollar"></i> Fiat
            </div>
          </div>
        </div>
        <div class="col-6 mb-3">
          <div
            class="payment-method"
            :class="{ active: paymentType === 'crypto' }"
            @click="paymentType = 'crypto'"
          >
            <div class="method-text">
              <i class="bi bi-currency-bitcoin"></i>Crypto (In Future)
            </div>
          </div>
        </div>
      </div>

      <div v-if="paymentType === 'fiat'">
        <h3>FIAT PAYMENTS</h3>
        <div class="row">
          <div
            class="col-6 mb-3"
            v-for="method in fiatPaymentMethods"
            :key="method"
          >
            <div
              :class="{
                'payment-method': true,
                active: selectedMethod === method,
              }"
              @click="selectedMethod = method"
            >
              <div class="method-text">{{ method }}</div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="paymentType === 'crypto'">
        <h3>CRYPTO PAYMENTS</h3>
        <div class="row">
          <div
            class="col-6 mb-3"
            v-for="method in cryptoPaymentMethods"
            :key="method"
          >
            <div
              :class="{
                'payment-method': true,
                active: selectedMethod === method,
              }"
              @click="selectedMethod = method"
            >
              <div class="method-text">{{ method }}</div>
            </div>
          </div>
        </div>
      </div>

      <button
        class="btn btn-danger"
        :class="{ 'btn-not': !selectedMethod }"
        @click="submitDonation"
      >
        Proceed to checkout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedMethod: null,
      selectedVoucher: null,
      paymentType: null,
      fiatPaymentMethods: ["VISA/MasterCard", "Google Pay", "Apple Pay"],
      cryptoPaymentMethods: [
        "Bitcoin",
        "Litecoin",
        "Ethereum",
        "USDT Tether ERC20",
        "USDT Tether TRC20",
        "BNB",
        "Tron",
      ],
      vouchers: [
        { amount: 1 },
        { amount: 2 },
        { amount: 5 },
        { amount: 10 },
        { amount: 100 },
      ],
    };
  },
  methods: {
    submitDonation() {
      if (
        this.selectedMethod &&
        this.selectedVoucher &&
        this.selectedVoucher.amount &&
        this.selectedVoucher.amount !== 0
      ) {
        console.log(
          `Paid $${this.selectedVoucher.amount} using ${this.selectedMethod}`
        );
      } else {
        alert("Please select a payment method and a voucher amount.");
      }
    },
  },
};
</script>

<style scoped>
.payment-method {
  background-color: #202020;
  color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.payment-method:hover {
  background-color: #333333;
}

.payment-method.active {
  background-color: #cd412b; /* Green */
}

.method-text {
  font-size: 18px;
}

.btn-danger {
  font-size: 20px;
  background-color: #cd412b; /* Red */
  padding: 20px;
}
.btn-not {
  background-color: #1f110e; /* Red */
  border: #1f110e solid 1px;
  font-size: 20px;
  padding: 20px;
}

.btn-danger:hover {
  background-color: #a1190e; /* Darker red */
}

.btn-danger:focus {
  background-color: #cd412b; /* Red */
  box-shadow: none;
  outline: none;
}
</style>
