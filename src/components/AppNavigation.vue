<template>
  <header>
    <div
      class="container pt-2 d-flex justify-content-between align-items-center"
    >
      <!-- Logo on the left -->
      <div class="logo">
        <router-link to="/">
          <img src="../assets/header/logo_full.png" alt="Логотип" />
        </router-link>
      </div>

      <!-- Menu on the right -->
      <nav class="navbar navbar-expand-lg navbar-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <!-- Home -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownHome"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownHome">
                <router-link
                  to="/find-player"
                  v-if="isLoggedIn"
                  class="dropdown-item"
                  >Find Player</router-link
                >
                <router-link to="/download" class="dropdown-item"
                  >Download</router-link
                >
                <router-link to="/news" class="dropdown-item">News</router-link>
              </div>
            </li>

            <!-- Community -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownCommunity"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Community
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownCommunity"
              >
                <router-link
                  v-if="!isLoggedIn"
                  to="/login"
                  class="dropdown-item"
                  >Login</router-link
                >
                <router-link
                  v-if="isLoggedIn"
                  to="/profile"
                  class="dropdown-item"
                  >Profile</router-link
                >
                <a href="#" class="dropdown-item">Forum</a>
                <router-link
                  v-if="isLoggedIn"
                  to="/donate"
                  class="dropdown-item"
                  >Donate</router-link
                >
                <router-link
                  v-if="isLoggedIn"
                  to="/promocode"
                  class="dropdown-item"
                  >Promocode</router-link
                >
                <router-link
                  v-if="isLoggedIn"
                  @click="logout"
                  to="/logout"
                  class="dropdown-item"
                  >Logout</router-link
                >
              </div>
            </li>

            <!-- FAQ -->
            <li class="nav-item">
              <router-link to="/faq" class="nav-link">FAQ</router-link>
            </li>
            <li class="nav-item">
              <router-link v-if="isLoggedIn" to="/ranking" class="nav-link"
                >Ranking</router-link
              >
            </li>
            <!-- Download Game -->
            <li class="nav-item">
              <router-link to="/download" class="nav-link main-btn-nav"
                >Download</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
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
    axios
      .get(`${config.API_HOST}/api/profile-data/islogined`)
      .then((response) => {
        this.isLoggedIn = response.data.isLoggedin;
      })
      .catch((error) => {
        console.error("Error fetching login status:", error);
      });
  },
  methods: {
    logout() {
      axios
        .post(`${config.API_HOST}/api/profile-data/logout`)
        .then(() => {
          this.isLoggedIn = false;
          this.$router.push("/");
        })
        .catch((error) => {
          console.error("Logout error:", error);
        });
    },
  },
};
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css");

header {
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .navbar {
    &-brand {
      img {
        max-width: 100%;
        height: auto;
      }
    }

    &-nav {
      gap: 15px;
      display: flex;
      align-items: center;
      margin-left: auto;

      .nav-item {
        margin-right: 15px;
        .nav-link {
          font-weight: bold;
          color: #ffffff;
          &:hover {
            color: #cd412b; /* Change the hover color as needed */
          }
        }
        &.dropdown {
          position: relative;

          &-toggle {
            cursor: pointer;
          }
        }

        a {
          text-decoration: none;
          color: #ffffff;

          &:hover {
            color: #42a5f5;
          }
        }
      }
    }
  }
  .dropdown-menu {
    transition: 0.3s;
    width: 370px;
    position: absolute;
    top: 100%;
    left: 0;
    background: #333 !important;
    width: 190px;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    z-index: 1;

    .dropdown-item {
      display: block;
      color: #ffffff;
      text-decoration: none;
      padding: 8px;
      border-radius: 10px;

      &:hover {
        background: #555;
      }
    }
  }
}

.main-btn-nav {
  background-color: #cd412b !important;
}
</style>
