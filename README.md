# Text Expander

A modern, customizable React component for expanding and collapsing text content with smooth animations. Perfect for displaying long content in a user-friendly way while maintaining clean UI design.

## Demo

<div align="center">
  <!-- Insert your demo video here -->
  <video src="https://github.com/user-attachments/assets/774e580e-f495-4abb-a4fd-338ac16a18e0" controls width="600">
    Your browser does not support the video element.
  </video>
</div>

## Features

- **Customizable Word Limit**: Set how many words to show when collapsed (default: 10 words).

- **Custom Button Text**: Personalize expand/collapse button labels to match your app's tone.

- **Flexible Styling**: Support for custom colors, CSS classes, and styling options.

- **Smooth Animations**: Built-in transitions for a polished user experience.

- **Responsive Design**: Works seamlessly across all device sizes.

- **Accessibility**: Proper focus management and keyboard navigation support.

## Installation

1. Clone the repository:

```
git clone https://github.com/ceferrei/text-expander-component-react.git
```

2. Navigate to the project folder:

```
cd text-expander-component-react
```

3. Install dependencies:

```
npm install
```

4. Start the application:

```
npm start
```

The app should run at http://localhost:3000 by default.

## Usage

### Basic Usage

```jsx
import TextExpander from './TextExpander';

function App() {
  return (
    <TextExpander>
      Your long text content goes here. This will be truncated to 10 words by default with a "Show more" button to expand.
    </TextExpander>
  );
}
```

### Advanced Configuration

```jsx
<TextExpander
  collapsedNumWords={20}
  expandButtonText="Read more"
  collapseButtonText="Show less"
  buttonColor="#ff6622"
  expanded={false}
  className="custom-styling"
>
  Your content here will show 20 words when collapsed, with custom button text and orange button color.
</TextExpander>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `collapsedNumWords` | number | 10 | Number of words to show when collapsed |
| `expandButtonText` | string | "Show more" | Text for the expand button |
| `collapseButtonText` | string | "Show less" | Text for the collapse button |
| `buttonColor` | string | "#1f09cd" | Color of the expand/collapse button |
| `expanded` | boolean | false | Initial expanded state |
| `className` | string | "" | Additional CSS classes |
| `children` | string | required | The text content to be expanded/collapsed |

## Component Features

- **Zero Dependencies**: Built with pure React, no external libraries required.
- **TypeScript Ready**: Easily convertible to TypeScript with proper type definitions.
- **Performance Optimized**: Efficient re-rendering with React hooks.
- **Mobile Friendly**: Touch-optimized buttons and responsive design.

## License

This project is licensed under the MIT License. Feel free to use it, modify it, and distribute it in any project.