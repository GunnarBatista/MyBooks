
<template>
  <div>
    <h1 style="justify-content: center; display: flex;">My Books</h1>
    <ul style="list-style: none;justify-content: center;display: flex; margin: 50px 0;">
      <li style="margin: 0 20px;"><router-link to="/">Home</router-link></li>
      <li style="margin: 0 20px;"> Categorias
        <ul style="list-style: none;">
          <li><router-link to="/categories">Listar Categorias</router-link></li>
          <li><router-link to="/categories/create">Adicionar Categoria</router-link></li>
        </ul>
      </li>
      <li style="margin: 0 20px;"> Autores
        <ul style="list-style: none;">
          <li><router-link to="/authors">Listar Autores</router-link></li>
          <li><router-link to="/authors/create">Adicionar Autores</router-link></li>
        </ul>
      </li>
      <li style="margin: 0 20px;"> Livros
        <ul style="list-style: none;">
          <li><router-link to="/books">Listar Livros</router-link></li>
          <li><router-link to="/books/create">Adicionar Livros</router-link></li>
        </ul>
      </li>
    </ul>
    <nav>
    <router-view></router-view>
    </nav>
  </div>
</template>

<script setup>

</script>

<style scoped></style>
