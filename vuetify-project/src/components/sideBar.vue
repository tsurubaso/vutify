
<script setup>
import { defineEmits } from 'vue';
const emits=defineEmits(['selectOption'])

const selectOption=(isColor)=>{
    emits("selectOption",isColor)
}



</script>






<template>
    <v-navigation-drawer expand-on-hover rail><v-list>
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/lego/2.jpg" title="Sylvain Bilhaud"
                subtitle="sylvain.bilhaud@gmail.com"></v-list-item>
            <v-divider></v-divider>

            <v-list density="compact" nav>
               <v-list-item
               prepend-icon="mdi mdi-airplane"
               title="Aeroport"
               value="color">
               
               
               </v-list-item>
               <v-list-item
               prepend-icon="mdi mdi-alpha-h-box-outline"
               title="Hospital"
               value="color">
               
               
               </v-list-item>
               <v-list-item
               prepend-icon="mdi mdi-image"
               title="color gallery"
               value="color"
               @click="selectOption(true)">
               
               
               </v-list-item>
               <v-list-item
               prepend-icon="mdi mdi-dialpad"
               title="gray gallery"
               value="color"
               @click="selectOption(false)">
               
               
               </v-list-item>

            </v-list>


        </v-list>
        
    </v-navigation-drawer>
</template>
