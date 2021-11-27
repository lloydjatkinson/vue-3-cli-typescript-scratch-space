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
        }
    },

    render () {
        const { score, question } = this;

        return this.$slots.default?.({
            score,
            question
        });
    },
});

// export default {
//     name: 'Quiz',

//     props: {
//       questions: {
//         type: Array,
//         required: true,
//         default: () => [],
//       },
//     },

//     data: () => ({
//       current: 0,
//     }),

//     methods: {
//       answer(index: number) {
//         console.info('Answered question with answer at index', index);
//       },
//     },

//     computed: {
//       score(): Score  {
//         return {
//           total: this.questions.length,
//           incorrect: 0,
//           correct: 0,
//           current: this.questions[this.current],
//           answer: this.answer,
//         };
//       },
//       question() {
//         return {
//           current: this.questions[this.current],
//           answer: this.answer,
//           isRight: false,
//           isWrong: false,
//         };
//       },
//     },

//     render(): VNode {
//       // const { total, incorrect, correct, current, answer } = this.score;
//       // return this.$slots.default({
//       //   questions: this.questions,
//       //   total,
//       //   incorrect,
//       //   correct,
//       //   current,
//       //   answer,
//       // });

//       return {
//         score: this.score,
//         question: this.question,
//       };
//     },
//   };