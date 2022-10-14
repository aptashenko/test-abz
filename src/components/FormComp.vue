<template>
  <section class="form">
    <div class="container">
        <h2 class="form__title">Working with POST request</h2>
        <form class="newForm" @submit="submitForm">
            <label class="newForm__label">
                <input required type="text" name="name" placeholder="Your name" class="newForm__input" />
            </label>
            <label class="newForm__label middle">
                <input required type="email" name="email" placeholder="Email" class="newForm__input" />
            </label>
            <label class="newForm__label">
                <input required type="tel" name="phone" placeholder="Phone" class="newForm__input" />
                <span class="newForm__label--phone">+38 (XXX) XXX-XX-XX</span>
            </label>
            <p class="newForm__text">Select your position</p>
            <label class="newForm__label--radio" v-for="position of positions" :key="position.id">
                <input required :id="position.id" type="radio" name="position" class="newForm__input--radio" />
                <span>{{position.name}}</span>
            </label>
            <label for="photo" class="newForm__label--file">Upload your photo</label>
            <input required id="photo" name="photo" accept="image/*" @input="handleFileInput" type="file" class="newForm__input--file" />
            <button class="newForm__button">Sign up</button>
        </form>
    </div>
  </section>
</template>

<script>
export default {
    props: ['positions'],
    setup(_, {emit}) {
        const handleFileInput = (e) => {
            const fileName = e.target.value.split('\\')[e.target.value.split('\\').length - 1];
            const fileLabelElement = e.target.previousSibling;
            fileLabelElement.textContent = fileName;
            fileLabelElement.style.color = '#000';
        }

        const submitForm = (e) => {
            e.preventDefault();
            const photoFile = document.querySelector('.newForm__input--file')
            const form = e.target.elements;
            const formData = new FormData();
            let checkedPosition = null;
            for (let input of form.position) {
                input.checked ? checkedPosition = input : null;
            }
            formData.append('name', form.name.value);
            formData.append('email', form.email.value);
            formData.append('phone', form.phone.value);
            formData.append('position_id', checkedPosition.id);
            formData.append('photo', photoFile.files[0]);
            
            e.target.reset();
            emit('handleFormSubmit', formData);
        }

        return { handleFileInput, submitForm }
    }

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
        &.middle {
            margin: 50px 0;
        }
        &--radio {
            display: inline-flex;
            align-items: center;
            margin-bottom: 10px;
            & span {
                display: inline-flex;
                align-items: center;
                user-select: none;
                    &::before {
                        content: '';
                        display: inline-block;
                        width: 1em;
                        height: 1em;
                        flex-shrink: 0;
                        flex-grow: 0;
                        border: 1px solid #adb5bd;
                        border-radius: 50%;
                        margin-right: 0.5em;
                        background-repeat: no-repeat;
                        background-position: center center;
                        background-size: 50% 50%;
                    }
            }
        }
    }
    &__input {
        padding: 14px 16px;
        width: 100%;
        border: 1px solid #D0CFCF;
        border-radius: 4px;
        background: #F8F8F8;
        &--radio {
            appearance: none;
            position: absolute;
            z-index: -1;
            opacity: 0;
            &:not(:disabled):not(:checked)+span:hover::before {
                border-color: #00BDD3;
            }
            &:checked+span::before {
                border-color: #00BDD3;
                background-color: #fff;
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='-15 -15 30 30' fill='none' %3e%3ccircle r='15' fill='%2300BDD3'/%3e%3c/svg%3e")
            }
        }
    }
    &__text {
        margin: 25px 0;
    }
    &__label--file {
        position: relative;
        padding: 10px 0px 10px 90px;
        border: 1px solid rgba(0, 0, 0, 0.215);
        border-radius: 10px 0 0 10px;
        color: rgba(0, 0, 0, 0.215);
        margin-top: 50px;
        &::before {
            content: 'Upload';
            position: absolute;
            top: -1px;
            left: 0;
            padding: 10px;
            border: 1px solid #000;
            color: #000;
            border-radius: 10px 0px 0 10px;
        }
        & + input[type="file"] {
            display: none;
        }
    }
    &__button {
        margin: 50px auto 0;
        padding: 8px 0;
    
        width: 100px;
        background: #F4E041;
        border-radius: 80px;
        cursor: pointer;
    
        text-decoration: none;
        color: #000;
        text-align: center;

        border: none;
        
        &:disabled {
            background: #B4B4B4;
            color: #fff;
            cursor: auto;
        }
    }
}
</style>