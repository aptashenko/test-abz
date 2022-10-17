<template>
  <header class="header">
    <div class="container">
        <ul class="header__logo">
            <li class="header__item"><img class="header__image" src="../assets/logo.svg" alt=""></li>
            <li class="header__item"><a class="header__text" href="#">TESTTASK</a></li>
        </ul>
        <ul class="menu">
            <li class="menu__item">
                <a class="menu__button" href="#">Users</a>
            </li>
            <li class="menu__item">
                <a class="menu__button" href="#">Sing up</a>
            </li>
        </ul>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header {
    .container {
        justify-content: space-between;
    }
    padding: 16px 0;
    &__logo {
        display: flex;
        align-items: center;
    }
    &__text {
        text-decoration: none;
        color: #000;
        font-weight: 500;
    }
}

.menu {
    display: flex;
    align-items: center;
    &__item {
        &:not(:last-child) {
            margin-right: 10px;
        }
    }
    &__button {
        display: block;
        text-decoration: none;
        color: #000;
        width: 90px;
        padding: 8px 0;
        text-align: center;
        background: #F4E041;
        border-radius: 80px;
        @media (max-width: 320px) {
            width: 80px;
        }
    }
}
</style>