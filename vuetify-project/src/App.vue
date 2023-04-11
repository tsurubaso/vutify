<script setup>

import ImageGallery from './components/imageGallery.vue';
import sideBar from './components/sideBar.vue';
import { ref } from 'vue';

const isWithColor=ref(true)
const onSelectOption=(isColor)=>{
  isWithColor.value=isColor
}

</script>


<template>
  
  <v-app>
    <!-- sidebar -->
    <sideBar  @selectOption="onSelectOption"/>
    <v-main>
      {{ isWithColor }}
      <v-card>
        <ImageGallery :isWithColor="isWithColor"/>
      </v-card>
    </v-main>

  </v-app>
</template>


