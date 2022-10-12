<template>
        <section class="background">
            <div class="container">
                <h1 class="background__title">Test assignment for front-end developer</h1>
                <p class="background__description">What defines a good front-end developer is one that has skilled knowledge of
                    HTML, CSS, JS with a vast understanding of
                    User design thinking as they'll be building web interfaces with accessibility in mind. They should also be
                    excited to
                    learn, as the world of Front-End Development keeps evolving.</p>
                <a class="background__button" href="#">Sign up</a>
            </div>
        </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.background {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/bg.jpg');
    .container {
        padding: 40px 16px 70px;
        flex-direction: column;
        align-items: center;
    }
    &__title {
        text-align: center;
        font-size: 40px;
        line-height: 1;
        color: #fff;
    }
    &__description {
        margin-top: 20px;
        text-align: center;

        font-size: 16px;
        line-height: 1.62;
        color: #fff;
    }

    &__button {
        margin-top: 30px;
        padding: 8px 0;

        width: 100px;
        background: #F4E041;
        border-radius: 80px;

        text-decoration: none;
        color: #000;
        text-align: center;
    }
}
</style>