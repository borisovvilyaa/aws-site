<template>
  <div class="container">
    <div class="survival-odyssey-page">
      <h1><strong>Survival Odyssey FAQ</strong></h1>

      <div class="faq-section">
        <h2>1. On which platforms will the game be available?</h2>
        <p>
          The initial release will be available for devices running on Android.
        </p>
      </div>

      <div class="faq-section">
        <h2>2. What are the system requirements for the game?</h2>
        <p>
          It's challenging to say for certain at the moment, but we expect the
          game to require <strong>approximately 2-3 GB of RAM</strong> and about
          <strong>1-2 GB of free space on the device</strong>.
        </p>
      </div>

      <div class="faq-section">
        <h2>3. What is the target audience for the game?</h2>
        <p>
          The game is designed for fans of multiplayer survival games. It caters
          to a broad audience, from beginners to experienced gamers.
        </p>
      </div>

      <div class="faq-section">
        <h2>4. Will there be a storyline in the game?</h2>
        <p>
          Survival Odyssey is primarily focused on a multiplayer experience,
          emphasizing survival, interaction with other players, and dynamic
          events. A strict storyline is not present.
        </p>
      </div>

      <div class="faq-section">
        <h2>
          5. Will there be additional content or expansions after the release?
        </h2>
        <p>
          We are actively working on creating additional content and expansions
          for the game. Regular updates are planned to enrich the gaming
          experience. We welcome player suggestions for improving the game.
        </p>
      </div>

      <div class="faq-section">
        <h2>6. What makes Survival Odyssey unique?</h2>
        <p>
          Unique features include diverse worlds and locations, crafting, a
          dynamic day-night cycle, and weather system, engaging social
          interactions with other survivors, and regular updates to keep the
          gameplay fresh and exciting.
        </p>
      </div>

      <div class="faq-section">
        <h2>7. How can I contact the development team or provide feedback?</h2>
        <p>
          To get in touch with us and provide feedback, please use the email
          address info@g2c.com. We are ready to consider your ideas and
          comments.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SurvivalOdysseyFAQPage",
  data() {
    return {
      // You can define additional data or methods related to your page here
    };
  },
};
</script>

<style scoped>
/* Add styles for your page */
.survival-odyssey-page {
  color: #dadada;
  max-width: 800px;
  margin: 0 auto;
}

.faq-section {
  margin-bottom: 20px;
}

.question {
  color: red;
}

.answer {
  color: white;
}
</style>
