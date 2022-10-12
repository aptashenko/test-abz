<template>
    <HeaderComp />
    <MainTitle />
    <EmployeeList @showMore="showMore" v-if="users" :users="users" />
    <LoaderComp v-else />
    <FormComp />
</template>

<script>
import HeaderComp from './components/HeaderComp'
import MainTitle from './components/MainTitle'
import EmployeeList from './components/EmployeeList'
import FormComp from './components/FormComp'
import LoaderComp from './components/LoaderComp'
import './assets/normalize.css'
import { fetchData } from './services/fetchUsers';
import { onMounted, ref, watch } from '@vue/runtime-core';

export default {
  name: 'App',
  components: { HeaderComp, MainTitle, EmployeeList, FormComp, LoaderComp },
  setup() {
    const users = ref(null);
    const page = ref(1);

    onMounted(() => {
      fetchData(page.value).then(resp => {
        users.value = resp.users;
      })
    })

    watch(page, (newValue, oldValue) => {
      if (oldValue !== newValue) {
        fetchData(page.value).then(resp => {
          users.value = resp.users;
        })
      }
    })

    const showMore = () => {
      page.value++;
    }

    return { users, showMore }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
}

ul, h1, h2, h3, p {
  list-style: none;
  margin: 0;
  padding: 0;
}

html {
  background: #F8F8F8;
}

#app {
  margin: 0 auto;
  max-width: 360px;
}

.container {
  display: flex;
  padding: 0 12px;
}
</style>
