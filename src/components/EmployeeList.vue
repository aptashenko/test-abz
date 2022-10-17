<template>
    <section class="employeeList">
        <div class="container">
            <h2 class="employeeList__title">Working with GET request</h2>
            <ul class="employeeList__list">
                <li class="employeeList__item" v-for="user of users" :key="user.id">
                    <img :src="user.photo" class="employeeList__photo" @error="errorImage" />
                    <p class="employeeList__name">{{user.name}}</p>
                    <p class="employeeList__position">{{user.position}}</p>
                    <p class="employeeList__email">{{user.email}}</p>
                    <p class="employeeList__phone">{{user.phone}}</p>
                </li>
            </ul>
            <a class="employeeList__button" v-if="!hidePageButton" @click="nextPage">Show more</a>
        </div>
    </section>
</template>

<script>
export default {
    props: ['users', 'hidePageButton'],
    setup(_, { emit }) {
        const nextPage = () => {
            emit('showMore');
        }

        const errorImage = (e) => {
            e.target.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAADdCAMAAACc/C7aAAAAaVBMVEXDw8MAAADGxsaXl5fJycnMzMxSUlKRkZF1dXV5eXnCwsIFBQWlpaV+fn66urqurq5dXV1sbGxMTEyKiopXV1czMzOcnJwaGhqoqKiEhIQlJSUrKysODg5mZmZHR0ezs7M7OzsVFRU5OTmFwHepAAAC+klEQVR4nO3bi1KjMBSAYXIarIbea2uttVXf/yE36Q0qobrITHP0/2Z2Zt2xDP+GQEDMMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQ56dCtY+JcZge9zgzsrXvipGc61EtzLO29KbpKLMx9mkPpI83H410XFiblyGFufy7Ph0lHPnSya/aByFuqRv7sSqchUvwV83k4EHFtt6QhcrwOl4GXZdv9VBApq3CdK/w1c9nykNUQ+XK6pG/abin5SFmWy5Z+u6FMP7K6unttt6cKIqflSE4a9tQd/zRtKflI6ZeRw6Y9deFS2ryl5COzUXkzMWoIcZm45bixUkGkfd6PormyyBMZPxkzaVouKIjM7PAwjtPm/XRP4Rse8/hgaoh0djzdbl9XeePJxc7CUBdmHi/REOkPx3Bb2DTlnOwP6L34vNQReZ3szqffRXRa/oJIcetzpJnksS2pj3T5pPrIqmfr6wL9kbZvynWf/8uuPi21Rzrxa4WijCzMW/0j6iKdV/lSZPH5Ges0V3+4flqi+uV77Ql07QmCtkg7GlcumM4uI0/ZC+UjGe67FpVl+qhWGGw/f0pRpIS99aeWjTtV2rdopBleTktNkZkMwvmzMHf20BCaY42FWV3MXFWR2eZY8ezvpY/N8aF8UhuZz84jtV+Iu/d4YfiGu+oHFUX6e43i1LDODs1FfCT9P8+lXN7piZRxNWOS23nTOB7syvsRPZHZ+qKhv2uckMfBLqelmsjLew1/anlpOlbLwT5vSUeks/2rQVG9U5eSyLC0+f+3JE53XToiRT6+OjhjPjRFunz6dVHM9DAtVURG7zW+ZbAfSw2R0mpCHvi1vFMRabctC/1/zdaKisjTTwnaRIYfhCmIdHbQunF/Rl5J8pEizfca37Pxkzr5yNnXHdfNJPGRHNrRvP9D81HqkbnNO5D2W5K//X1XFyK7kuyby3/iHXTp8rcJVmk2/onfCwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALi1f4DsKck70eEzAAAAAElFTkSuQmCC';
        }

        return { nextPage, errorImage }
    }
}
</script>

<style lang="scss">
.employeeList {
    padding-top: 140px;
    .container {
        flex-direction: column;
        align-items: center;
    }
    &__title {
        font-size: 41px;
        line-height: 1;
        text-align: center;
        font-weight: 400;
        margin-bottom: 50px;
    }
    &__list {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin: -7px;
        @media (min-width: 769px) {
            margin: -15px;
        }
    }
    &__item {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 20px;
        width: calc(100% - 14px);
        background: #fff;
        border-radius: 10px;
        word-wrap: break-word;
        margin: 7px;
        @media (min-width: 376px) {
            width: calc(50% - 14px);
        }
        @media (min-width: 769px) {
            margin: 15px;
            width: calc(33% - 30px);
        }
    }
    &__photo {
        width: 70px;
        height: 70px;
        display: block;
        margin: 0 auto;
        border-radius: 50%;
    }
    &__name {
        margin: 20px 0;
    }
    &__button {
        margin-top: 50px;
        padding: 8px 0;
    
        width: 100px;
        background: #F4E041;
        border-radius: 80px;
        cursor: pointer;
    
        text-decoration: none;
        color: #000;
        text-align: center;
    }
}
</style>