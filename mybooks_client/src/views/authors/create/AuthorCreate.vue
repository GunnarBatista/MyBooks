<template>
    <div>
        <h2>Cadastrar novo autor</h2>
        <hr>
        <form v-on:submit.prevent="create">
            <label>Nome </label><input type="text" name="" id="" v-model="author.name">
            <label>Sexo</label><input maxlength="1" type="text" name="" id="" v-model="author.gender" style="text-transform: uppercase;">
            <button type="submit">Cadastrar</button>
        </form>
    </div>
</template>

<script setup>
import axios from "axios";
import baseUrl from "@/api_config.js";
import { ref } from "vue"

const author = ref({
    name:'',
    gender: ''
})

const create = () =>{

    if(author.value.gender.toLowerCase() !== 'f' && author.value.gender.toLowerCase() !== 'm'){
        alert("Gênero inválido. Por favor, insira 'F' para feminino ou 'M' para masculino.")
        return;
    }
        axios.post(baseUrl + '/api/author/v1',
        author.value
    ).then((response) =>{
        alert("Autor Cadastrada com sucesso!!")
    }).catch((error) =>{
        alert("Erro: " + error)
        console.log(error)
    })

}

</script>

<style scoped>

</style>