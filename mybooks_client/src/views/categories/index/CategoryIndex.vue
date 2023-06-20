<template>
  <div>
    <h1>Categorias</h1>
    <table class="table table-striped">
      <tr>
        <th>Id</th>
        <th>Nome</th>
        <th>Comandos</th>
      </tr>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.id }}</td>
          <td>{{ category.name }}</td>
          <td> <button v-on:click="updateItens(category.id)">Editar</button></td>
          <td><button v-on:click="delItens(category.id)">Excluir</button></td>
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


const categories = ref();

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

const updateItens = (id) => {
  router.push('/categories/update/' + id)
}

const getAll = () => {
  axios
    .get(baseUrl + "/api/category/v1?page="+page+"&size=10")
    .then((response) => {
      categories.value = response.data._embedded.categories;
      maxpage = response.data.page.totalPages -1;
      pageMax();
    })
    .catch((error) => {
      console.error("Erro: ", error);
    });
};

onMounted(() => {
  getAll();
});

const delItens = (id) =>{
  axios.delete(baseUrl + "/api/category/v1/"+ id)
  .then((response) => {
    alert("Categoria deletada com sucesso!")
    location.reload()
  }).catch(error =>{
    alert("Erro: " + error)
    console.log(error)
  })
}

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
</script>

<style scoped></style>
