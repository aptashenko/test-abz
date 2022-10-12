<template>
  <section class="form">
    <div class="container">
        <h2 class="form__title">Working with POST request</h2>
        <form class="newForm">
            <label class="newForm__label">
                <input type="text" placeholder="Your name" class="newForm__input" />
            </label>
            <label class="newForm__label">
                <input type="email" placeholder="Email" class="newForm__input" />
            </label>
            <label class="newForm__label">
                <input type="tel" placeholder="Phone" class="newForm__input" />
                <span class="newForm__label--phone">+38 (XXX) XXX-XX-XX</span>
            </label>
            <p class="newForm__text">Select your position</p>
            <label class="newForm__label--radio">
                <input type="radio" class="newForm__input--radio" />
                Frontend developer
            </label>
            <label class="newForm__label--radio">
                <input type="radio" class="newForm__input--radio" />
                Backend developer
            </label>
            <label class="newForm__label--radio">
                <input type="radio" class="newForm__input--radio" />
                Designer
            </label>
            <label class="newForm__label--radio">
                <input type="radio" class="newForm__input--radio" />
                QA
            </label>
            <label class="newForm__label--file">
                <input type="file" class="newForm__input--file" />
            </label>
        </form>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.form {
    padding: 140px 0 85px;
    .container {
        flex-direction: column;
    }
    &__title {
        font-size: 40px;
        line-height: 1;
        text-align: center;
        margin-bottom: 50px;
    }
}

.newForm {
    display: flex;
    flex-direction: column;
    &__label {
        width: 100%;
        &--phone {
            font-size: 12px;
            line-height: 1.16;
            margin-top: 5px;
            margin-left: 16px;
        }
        &:not(:last-child) {
            margin-bottom: 50px;
        }
    }
    &__input {
        padding: 14px 16px;
        width: 100%;
        border: 1px solid #D0CFCF;
        border-radius: 4px;
        background: #F8F8F8;
    }
}
</style>