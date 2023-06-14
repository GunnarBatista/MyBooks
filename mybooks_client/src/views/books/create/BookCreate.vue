<template>
    <div>
        <h2>Cadastrar novo livro</h2>
        <hr>
        <form v-on:submit.prevent="create">
            <label>Título</label><input type="text" name="" id="" v-model="book.title"><br/>
            <label>Id Autor</label><input type="number" name="" id="" v-model="book.author.id"><br/>
            <label>Id Gênero</label><input type="number" name="" id="" v-model="book.category.id"><br/>
            <button type="submit">Cadastrar</button>
        </form>
    </div>
</template>

<script setup>
import axios from "axios";
import baseUrl from "@/api_config.js";
import { ref } from "vue"

const book = ref({
    title :'',
    author: {
        id: null
    },
    category: {
        id: null
    }
})


const create = () =>{
    axios.post(baseUrl + '/api/book/v1',
    book.value
    ).then((response) =>{
        alert("Livro Cadastrado com sucesso!!")
    }).catch((error) =>{
        alert("Erro: " + error)
        console.log(error)
    })
}

</script>

<style scoped>

</style>