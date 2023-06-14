<template>
    <div>
        <h1>Livros</h1>
        <table class="table table-striped">
      <tr>
        <th>Id</th>
        <th>Nome</th>
        <th>Comandos</th>
      </tr>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td><button v-on:click="updateItens(book.id)">Editar</button></td>
          <td><button v-on:click="delItens(book.id)">Excluir</button></td>
        </tr>
      </tbody>
    </table>
    </div>
</template>

<script setup>
import axios from "axios";
import baseUrl from "@/api_config.js";
import { onMounted, ref } from "vue";
import router from '../../../router';

const books = ref();

const getAll = () => {
  axios
    .get(baseUrl + "/api/book/v1?page=0&size=10")
    .then((response) => {
      books.value = response.data._embedded.books;
    })
    .catch((error) => {
      console.error("Erro: ", error);
    });
};

onMounted(() => {
  getAll();
});

const updateItens = (id) => {
  router.push('/books/update/' + id)
}

const delItens = (id) =>{
  axios.delete(baseUrl + "/api/book/v1/"+ id)
  .then((response) => {
    alert("Livro deletado com sucesso!")
    location.reload()
  }).catch(error =>{
    alert("Erro: " + error)
    console.log(error)
  })
}
</script>

<style scoped>

</style>