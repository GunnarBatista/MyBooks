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
  </div>
</template>

<script setup>
import axios from "axios";
import baseUrl from "@/api_config.js";
import { onMounted, ref } from "vue";
import router from '../../../router';


const categories = ref();

const updateItens = (id) => {
  router.push('/categories/update/' + id)
}

const getAll = () => {
  axios
    .get(baseUrl + "/api/category/v1?page=0&size=10")
    .then((response) => {
      categories.value = response.data._embedded.categories;
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
</script>

<style scoped></style>
