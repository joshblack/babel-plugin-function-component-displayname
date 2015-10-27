# `displayName` Babel Plugin

Used for giving Functional Stateless Components a `displayName` property that's handy when using the React DevTools browser extension.

## Functional Stateless Component

A functional, stateless component is one represented by a function. In the case of this plugin, the only type of function handled is any form of Arrow Function Expression. The following are examples of functional stateless components:

```js
const Title = () => <h1>Title</h1>;
export default () => <div />;

// Bad examples
function Title {
  return <h1>Title</h1>;
}

export default function Title() {
  return <h1>Title</h1>;
}
```

Currently, function declarations and expressions are not currently planned on being supported.

## The transformation

The plugin will take in

```js
const Title = () => <h1>Title</h1>;
```

And will convert it into

```js
const Title = () => <h1>Title</h1>;
Title.displayName = 'Title';
```

And will also transform:

```js
// Filename.js
export default () => <div />;
```

into

```js
const _temp = () => <div />;
_temp.displayName = 'Filename'; // Will just grab the name of the file

export default _temp;
```