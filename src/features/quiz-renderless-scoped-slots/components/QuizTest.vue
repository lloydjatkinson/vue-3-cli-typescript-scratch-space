<template>
    <Quiz :questions="christmas" v-slot="{ score, questions }">
        <div>
            <span>{{ score }}</span>
            <span>{{ questions }}</span>
        </div>
    </Quiz>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import christmas from './christmas.json';
import Quiz from './Quiz';

export default defineComponent({
    name: 'QuizTest',

    components: {
        Quiz,
    },

    data: () => ({
        questions: christmas,
    }),

    created () {
        console.log(christmas);
    },
});
</script>