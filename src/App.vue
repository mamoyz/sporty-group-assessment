<template>
  <Navbar />
  <main class="container">
    <RouterView />
  </main>
  <Footer />
</template>
<script setup lang="ts">
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
</script>
