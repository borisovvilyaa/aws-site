<template>
  <footer>
    <div class="container mt-5 pt-5 pb-3">
      <div class="row">
        <div class="col-md-4">
          <h4><b>Quick Links</b></h4>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/download">Download</router-link></li>
            <li><router-link to="/news">News</router-link></li>
            <li><router-link to="/faq">FAQ</router-link></li>
            <li>
              <router-link v-if="isLoggedIn" to="/ranking">Ranking</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4><b>Community</b></h4>
          <ul>
            <li>
              <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
            </li>
            <li>
              <router-link v-if="isLoggedIn" to="/profile">Profile</router-link>
            </li>
            <li><a href="#">Forum</a></li>
            <li>
              <router-link v-if="isLoggedIn" to="/donate">Donate</router-link>
            </li>
            <li>
              <router-link v-if="isLoggedIn" to="/promocode"
                ><b>Promocode</b></router-link
              >
            </li>
            <li>
              <router-link v-if="isLoggedIn" @click="logout" to="/logout"
                ><b>Logout</b></router-link
              >
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4><b>Contact Us</b></h4>
          <p>Email: info@g2c.com</p>
          <!-- Add additional contact information if needed -->
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-12 text-center">
          <!-- Telegram -->
          <a href="#" class="social-icon"><i class="bi bi-telegram"></i></a>

          <!-- YouTube -->
          <a href="#" class="social-icon"><i class="bi bi-youtube"></i></a>

          <!-- Twitter -->
          <a href="#" class="social-icon"><i class="bi bi-twitter"></i></a>

          <!-- Add more social media icons as needed -->
        </div>
      </div>
    </div>
    <div class="text-light text-center py-2">
      <p><b>&copy; 2024 G2C Dev. All rights reserved.</b></p>
    </div>
  </footer>
</template>

<script>
import axios from "axios";
import config from "@/conf.json";

export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  created() {
    this.checkLoginStatus();
  },
  methods: {
    checkLoginStatus() {
      axios
        .get(`${config.API_HOST}/api/profile-data/islogined`)
        .then((response) => {
          this.isLoggedIn = response.data.isLoggedin;
        })
        .catch((error) => {
          console.error("Error fetching login status:", error);
        });
    },
    logout() {
      axios
        .post(`${config.API_HOST}/api/profile-data/logout`)
        .then(() => {
          this.isLoggedIn = false;
          window.location.href = "/";
        })
        .catch((error) => {
          console.error("Logout error:", error);
        });
    },
  },
};
</script>

<style lang="scss">
/* Additional styles for the footer */

footer {
  color: #fff;
}

footer h4 {
  color: #fff; /* Adjust heading color */
}

footer ul {
  list-style: none;
  padding: 0;
}

footer ul li {
  margin-bottom: 8px;
}

footer a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease; /* Add smooth color transition on hover */
}

footer a:hover {
  color: #cd412b; /* Change the hover color as needed */
}

.social-icon {
  font-size: 24px;
  margin: 0 10px;
}

/* Add a subtle border radius to the social icons */
.social-icon i {
  border-radius: 50%;
  padding: 10px;
}

.text-light {
  margin-top: 10px; /* Add some top margin for spacing */
}

.text-light p {
  margin: 0;
}
</style>
