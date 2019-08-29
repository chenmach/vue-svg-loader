[![Board Status](https://wearegofer.visualstudio.com/31a1bf06-3376-46ee-ac67-aa1ceb7ef94a/664608b3-222d-42c6-9fe9-07061fbb17f8/_apis/work/boardbadge/7915f9e4-2df4-4960-8ef9-b720491f84ff)](https://wearegofer.visualstudio.com/31a1bf06-3376-46ee-ac67-aa1ceb7ef94a/_boards/board/t/664608b3-222d-42c6-9fe9-07061fbb17f8/Microsoft.RequirementCategory)
# vue-svg-loader <img src="https://img.shields.io/npm/dt/vue-svg-loader.svg">
A webpack loader that allows to use SVG files as Vue Components.

## Installation
```
npm install --save-dev vue-template-compiler vue-svg-loader
yarn add --dev vue-template-compiler vue-svg-loader
```

## Configuration
```js
{
  test: /\.svg$/,
  loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
  options: {
    // optional [svgo](https://github.com/svg/svgo) options
    svgo: {
      plugins: [
        {removeDoctype: true},
        {removeComments: true}
      ]
    }
  }
}
```

## Example code

```html
<template>
  <nav id="menu">
    <a href="...">
      <SomeIcon class="icon" />
      Some page
    </a>
  </nav>
</template>

<script>
import SomeIcon from './assets/some-icon.svg';

export default {
  name: 'menu',
  components: {
    SomeIcon,
  },
};
</script>
```
---
*The idea behind this was inspired by [react-svg-loader](https://github.com/boopathi/react-svg-loader)*.
