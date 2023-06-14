<template>
    <div>
        <h2>Atualizar categoria</h2>
        <hr>
        <form v-on:submit.prevent="update">
            <input type="text" name="" v-model="category.name">
            <button type="submit">Atualizar</button>
        </form>
    </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import axios from "axios";
import baseUrl from "@/api_config.js";
import router from '../../../router';
import { useRoute } from 'vue-router';

const route = useRoute();


const category = reactive({
    id: null,
    name: ''
})
    
const update = () =>{
    axios.put(baseUrl + '/api/category/v1',
        category
    ).then((response) =>{
        alert("Categoria Atualizada com sucesso!!")
        router.push("/categories")
    }).catch((error) =>{
        alert("Erro: " + error)
        console.log(error)
    })
}

onMounted(() => {
    axios.get(baseUrl + '/api/category/v1/' + route.params.id)
    .then((response) =>{
        category.id = response.data.id,
        category.name = response.data.name
    })
    .catch((error)=>{
        alert("Erro: " + error)
        console.log(error)
    })
})

</script>

<style scoped>

</style>