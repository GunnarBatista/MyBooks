<template>
    <div>
        <h2>Atualizar autor</h2>
        <hr>
        <form v-on:submit.prevent="update">
            <label>Nome</label><input type="text" name="" v-model="author.name">
            <label>Sexo</label><input type="text" name="" v-model="author.gender" style="text-transform: uppercase;">
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


const author = reactive({
    id: null,
    name: '',
    gender: ''
})
    
const update = () =>{

    if(author.gender.toLowerCase() !== 'f' && author.gender.toLowerCase() !== 'm'){
        alert("Gênero inválido. Por favor, insira 'F' para feminino ou 'M' para masculino.")
        return;
    }
    axios.put(baseUrl + '/api/author/v1',
        author
    ).then((response) =>{
        alert("Autor Atualizada com sucesso!!")
        router.push("/authors")
    }).catch((error) =>{
        alert("Erro: " + error)
        console.log(error)
    })
}

onMounted(() => {
    axios.get(baseUrl + '/api/author/v1/' + route.params.id)
    .then((response) =>{
        author.id = response.data.id,
        author.name = response.data.name,
        author.gender = response.data.gender
    })
    .catch((error)=>{
        alert("Erro: " + error)
        console.log(error)
    })
})

</script>

<style scoped>

</style>