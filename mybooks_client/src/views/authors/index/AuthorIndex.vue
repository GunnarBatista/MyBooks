<template>
  <div>
    <h1>Autores</h1>
    <table class="table table-striped">
      <tr>
        <th>Id</th>
        <th>Nome</th>
        <th>Comandos</th>
      </tr>
      <tbody>
        <tr v-for="author in authors" :key="authors.id">
          <td>{{ author.id }}</td>
          <td>{{ author.name }}</td>
          <td><button v-on:click="updateItens(author.id)">Editar</button></td>
          <td><button v-on:click="delItens(author.id)">Excluir</button></td>
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
import router from "../../../router";

const authors = ref();

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
    .get(baseUrl + "/api/author/v1?page=" + page + "&size=10")
    .then((response) => {
      authors.value = response.data._embedded.authors;
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
  router.push("/authors/update/" + id);
};

const delItens = (id) => {
  axios
    .delete(baseUrl + "/api/author/v1/" + id)
    .then((response) => {
      alert("Autor deletado com sucesso!");
      getAll();
    })
    .catch((error) => {
      alert("Erro: " + error);
      console.log(error);
    });
};
</script>

<style scoped></style>
