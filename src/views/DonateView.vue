<template>
  <div class="container">
    <h1 class="mt-5">Support Us!</h1>

    <!-- Donation form -->
    <div>
      <h2>PAYMENT AMOUNT</h2>
      <p>Please select the amount you wish to donate:</p>
      <div class="row">
        <div
          class="col-6 mb-3"
          v-for="voucher in vouchers"
          :key="voucher.amount"
        >
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
        <p>
          Please choose whether you want to pay with fiat or cryptocurrency:
        </p>

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
                <i class="bi bi-currency-bitcoin"></i> Crypto (In Future)
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

        <div v-if="selectedMethod" class="find-container mb-4">
          <div class="form-group">
            <label for="nick">Player nick:</label>
            <input
              v-model="nick"
              @input="onNickInput"
              type="text"
              id="nick"
              name="nick"
              class="form-control payment-method"
              required
            />
            <div v-if="loading" class="spinner"></div>
            <p id="error-message" class="error-message mt-3">
              {{ errorMessage }}
            </p>
          </div>
        </div>

        <button
          v-if="isNickValid && !loading"
          class="btn btn-danger"
          :class="{ 'btn-not': !selectedMethod }"
          @click="submitDonation"
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/conf.json";
const apiHost = config.API_HOST;

export default {
  data() {
    return {
      nick: "",
      errorMessage: "",
      userData: null,
      loading: false,
      selectedMethod: null,
      selectedVoucher: null,
      paymentType: null,
      isNickValid: false,
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
    async onNickInput() {
      this.errorMessage = "";
      this.isNickValid = false;
      if (this.nick.trim() !== "") {
        this.loading = true;
        try {
          const response = await axios.get(
            `${apiHost}/api/profile-data/search?nickname=${this.nick}`
          );
          this.userData = response.data;
          if (this.userData) {
            this.isNickValid = true;
          } else {
            this.errorMessage = "User not found";
          }
        } catch (error) {
          this.errorMessage = "User not found";
          console.error(error);
        }
        this.loading = false;
      }
    },
    async submitDonation() {
      if (
        this.selectedMethod &&
        this.selectedVoucher &&
        this.selectedVoucher.amount &&
        this.selectedVoucher.amount !== 0 &&
        this.isNickValid
      ) {
        this.loading = true;
        this.errorMessage = "";

        try {
          const donationResponse = await axios.post(
            apiHost + "/api/donate",
            {
              nickname: this.nick,
              amount: this.selectedVoucher.amount,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log("Donation response:", donationResponse.data);
        } catch (error) {
          console.error(
            "Error:",
            error.response ? error.response.data : error.message
          );
        }

        this.loading = false;
      } else {
        alert(
          "Please select a payment method, a voucher amount, and ensure the user exists."
        );
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

.form-control.payment-method {
  background-color: #202020;
  color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: background-color 0.3s;
}

.form-control.payment-method:focus {
  background-color: #333333;
}

.error-message {
  color: red;
}

.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #cd412b;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-top: 10px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
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
