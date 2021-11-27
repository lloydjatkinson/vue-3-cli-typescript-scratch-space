import { defineComponent, PropType } from 'vue';
import { Question, Score } from './types';

export default defineComponent({
    name: 'Quiz',

    props: {
        questions: {
            type: Array as PropType<Question[]>,
            required: true,
            default: () => [],
        },
    },

    computed: {
        score (): Score {
            return {
                correct: 0,
                incorrect: 0,
                total: 0,
            };
        },

        question () : Question {
            return this.questions[0];
        },
    },

    render () {
        const { score, question } = this;

        return this.$slots && this.$slots.default?.({
            score,
            question,
        });
    },
});