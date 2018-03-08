# Loot Chek

This money tracker app is built with React/Redux and tested with Jest and Enzyme.  It was developed to practice TDD and BDD principles.

***

[Installation](https://github.com/chris-malloy/loot-check#installation) | [Testing](https://github.com/chris-malloy/loot-check#testing) | [Challenges and Solutions](https://github.com/chris-malloy/loot-check#challenges-and-solutions) | [Code Snippets](https://github.com/chris-malloy/loot-check#code-snippets) | [Acknowledgements](https://github.com/chris-malloy/loot-check#acknowledgements)

***

## Installation

OS X & Linux:

```sh
npm install
```

## Testing

Snapshot testing is done with Jest and assertion testing is done with Enzyme.

```sh
npm i --save-dev enzyme enzyme-adapter-react-16
```

With the release of React > 16, you must configure the Enzyme Adapter:

```javascript
// yourTestFile.test.js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
```

### Challenges and Solutions

Here are some of challenges I encountered along the way and how I went about solving them.

### Code Snippets

### Acknowledgements

David Katz, thank you for your course.  It was a great way to take my React and Jest knowledge to the next level.
