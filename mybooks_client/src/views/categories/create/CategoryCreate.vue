<template>
    <div>
        <h2>Cadastrar nova categoria</h2>
        <hr>
        <form v-on:submit.prevent="create">
            <input type="text" name="" id="" v-model="name">
            <button type="submit">Cadastrar</button>
        </form>
    </div>
</template>

<script setup>
import axios from "axios";
import baseUrl from "@/api_config.js";
import { ref } from "vue"

const name = ref()

const create = () =>{
    axios.post(baseUrl + '/api/category/v1',
        {
            name : name.value
        }
    ).then((response) =>{
        alert("Categoria Cadastrada com sucesso!!")
    }).catch((error) =>{
        alert("Erro: " + error)
        console.log(error)
    })
}

</script>

<style scoped>

</style>