<template>
    <div>
        <h2>Atualizar livro</h2>
        <hr>
        <form v-on:submit.prevent="update">
            <input type="text" v-model="book.title">
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

const book = reactive({
    id: null,
    title: '',
})

const update = () => {
    axios.put(baseUrl + '/api/book/v1',
     book
     ).then((response) => {
            alert("Livro atualizado com sucesso!!");
            router.push("/books");
        })
        .catch((error) => {
            alert("Erro: " + error);
            console.log(error);
        });
};

onMounted(() => {
    axios.get(baseUrl + '/api/book/v1/' + route.params.id)
        .then((response) => {
            book.id = response.data.id;
            book.title = response.data.title;
        })
        .catch((error) => {
            alert("Erro: " + error);
            console.log(error);
        });
});

</script>

<style scoped>

</style>
