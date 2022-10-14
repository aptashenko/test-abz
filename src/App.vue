<template>
    <HeaderComp />
    <MainTitle />
    <EmployeeList @showMore="showMore" v-if="users" :users="users" />
    <LoaderComp v-if="loading" />
    <FormComp @handleFormSubmit="handleFormSubmit" v-if="positions" :positions="positions" />
</template>

<script>
import HeaderComp from './components/HeaderComp'
import MainTitle from './components/MainTitle'
import EmployeeList from './components/EmployeeList'
import FormComp from './components/FormComp'
import LoaderComp from './components/LoaderComp'
import './assets/normalize.css'
import { fetchData, getPositions, registrationUser, getToken } from './services/fetchUsers';
import { onMounted, ref, watch } from '@vue/runtime-core';

export default {
  name: 'App',
  components: { HeaderComp, MainTitle, EmployeeList, FormComp, LoaderComp },
  setup() {
    const users = ref(null);
    const page = ref(1);
    const loading = ref(false);
    const positions = ref(null);

    onMounted(() => {
      fetchData(page.value).then(resp => {
        const getUsers = resp.users;
        function sortRegistration(a, b) {
          return a.registration_timestamp > b.registration_timestamp ? 1 : b.registration_timestamp > a.registration_timestamp ? -1 : 0;
        }
        getUsers.sort(sortRegistration);
        users.value = getUsers;
      })
      getPositions().then(resp => {
        positions.value = resp.positions;
      })
    })

    watch(page, (newValue, oldValue) => {
      if (oldValue !== newValue) {
        fetchData(page.value).then(resp => {
          loading.value = true;
          users.value = resp.users;
          loading.value = false;
        })
      }
    })

    const showMore = () => {
      page.value++;
    }

    const handleFormSubmit = async (data) => {
      const token = await getToken();
      registrationUser(token.token, data);
    }

    return { users, showMore, loading, positions, handleFormSubmit }
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
