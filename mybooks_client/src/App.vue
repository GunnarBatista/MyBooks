<template>
  <div>
    <h1>My Books</h1>

    <ul style="list-style: none;">
      <li><router-link to="/">Home</router-link></li>
      <li> Categorias
        <ul>
          <li><router-link to="/categories">Listar Categorias</router-link></li>
          <li><router-link to="/categories/create">Adicionar Categoria</router-link></li>
        </ul>
      </li>
      <li> Autores
        <ul>
          <li><router-link to="/authors">Listar Autores</router-link></li>
          <li><router-link to="/authors/create">Adicionar Autores</router-link></li>
        </ul>
      </li>
      <li> Livros
        <ul>
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
