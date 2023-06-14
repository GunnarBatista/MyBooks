import { createRouter, createWebHistory } from 'vue-router';

// Importe seus componentes de rota
import Home from '@/views/home/home.vue';
import Authors from '@/views/authors/index/AuthorIndex.vue';
import AuthorCreate from '@/views/authors/create/AuthorCreate.vue';
import AuthorUpdate from '@/views/authors/update/AuthorUpdate.vue';
import Books from '@/views/books/index/BookIndex.vue';
import BookUpdate from '@/views/books/update/BookUpdate.vue';
import BookCreate from '@/views/books/create/BookCreate.vue';
import Categories from '@/views/categories/index/CategoryIndex.vue';
import CategoryCreate from '@/views/categories/create/CategoryCreate.vue';
import CategoryUpdate from '@/views/categories/update/CategoryUpdate.vue';



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/authors',
    name: 'Authors',
    component: Authors
  },
  {
    path: '/authors/create',
    name: 'Authors-Create',
    component: AuthorCreate
  },
  {
    path: '/authors/update/:id',
    name: 'Authors-Update',
    component: AuthorUpdate
  },
  {
    path: '/books',
    name: 'Books',
    component: Books
  },
  {
    path: '/books/update/:id',
    name: 'Books-update',
    component: BookUpdate
  },
  {
    path: '/books/create',
    name: 'Books-create',
    component: BookCreate
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/categories/create',
    name: 'Categories-create',
    component: CategoryCreate
  },
  {
    path: '/categories/update/:id',
    name: 'Categories-update',
    component: CategoryUpdate
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
