<template>

<v-app>
  <!-- sidebar -->
    <sideBar/>

  
  <v-main>
    <v-card>
<ImageGallery>
  Hello
</ImageGallery>
    </v-card>
  </v-main>

</v-app>
</template>

<script setup>

 import ImageGallery from './components/imageGallery.vue';
import sideBar from './components/sideBar.vue';

</script>
