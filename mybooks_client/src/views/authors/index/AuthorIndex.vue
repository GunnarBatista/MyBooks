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
          <td> <button v-on:click="updateItens(author.id)">Editar</button></td>
          <td><button v-on:click="delItens(author.id)">Excluir</button></td>
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

const authors = ref();

const getAll = () => {
  axios
    .get(baseUrl + "/api/author/v1?page=0&size=10")
    .then((response) => {
      authors.value = response.data._embedded.authors;
    })
    .catch((error) => {
      console.error("Erro: ", error);
    });
};

onMounted(() => {
  getAll();
});

const updateItens = (id) => {
  router.push('/authors/update/' + id)
}

const delItens = (id) =>{
  axios.delete(baseUrl + "/api/author/v1/"+ id)
  .then((response) => {
    alert("Autor deletado com sucesso!")
    location.reload()
  }).catch(error =>{
    alert("Erro: " + error)
    console.log(error)
  })
}
</script>

<style scoped>

</style>