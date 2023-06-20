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
    <div class="buttons">
      <button id="button1" class="page-buttons" v-on:click="previousPage">
        Previous Page
      </button>
      <button id="button2" class="page-buttons" v-on:click="nextPage">
        Next Page
      </button>
    </div>
    </div>
</template>

<script setup>
import axios from "axios";
import baseUrl from "@/api_config.js";
import { onMounted, ref } from "vue";
import router from '../../../router';

const books = ref();

let page = 0;

let maxpage = null;

function pageMax() {
  if (page == maxpage) {
    document.getElementById("button2").disabled = true;
  } else {
    document.getElementById("button2").disabled = false;
  }
  if (page == 0) {
    document.getElementById("button1").disabled = true;
  } else {
    document.getElementById("button1").disabled = false;
  }
}

const getAll = () => {
  axios
    .get(baseUrl + "/api/book/v1?"+page+"&size=10")
    .then((response) => {
      books.value = response.data._embedded.books;
      maxpage = response.data.page.totalPages - 1;
      pageMax();
    })
    .catch((error) => {
      console.error("Erro: ", error);
    });
};

const nextPage = () => {
    page++;
  getAll();
};

const previousPage = () => {
  if (page > 0) {
    page--;
    getAll();
  }
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