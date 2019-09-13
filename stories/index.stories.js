/* eslint-disable react/react-in-jsx-scope */

import {storiesOf} from '@storybook/vue';
// import {action} from '@storybook/addon-actions';
// import {linkTo} from '@storybook/addon-links';

import FrontLineArticle from '../packages/FLArticle'

storiesOf('Pages', module).add('article', () => ({
    components: {FrontLineArticle},
    template: '<FrontLineArticle title="hi"/>',
    // methods: { action: linkTo('Button') },
}));

// storiesOf('Button', module)
//   .add('with text', () => ({
//     components: { MyButton },
//     template: '<my-button @click="action">Hello Button</my-button>',
//     methods: { action: action('clicked') },
//   }))
//   .add('with JSX', () => ({
//     components: { MyButton },
//     render(h) {
//       return '<my-button @click="action">With JSX</my-button>';
//     },
//     methods: { action: linkTo('clicked') },
//   }))
//   .add('with some emoji', () => ({
//     components: { MyButton },
//     template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
//     methods: { action: action('clicked') },
//   }));
