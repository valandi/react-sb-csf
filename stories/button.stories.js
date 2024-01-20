import React from 'react';
import { Button } from '@storybook/react/demo';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  decorators: [withKnobs],
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
};

export const WithText = () => {
  return (
    <Button>Hello Button</Button>
  );
};

export const WithEmoji = () => {
  return (
    <Button>
      <span role="img" aria-label="so cool">
        {text('label', '😀 😎 😵 😈')}
      </span>
    </Button>
  );
};

WithEmoji.story = {
  name: 'with emoji label and custom color (red)',
  parameters: {
    eyes: {
      background: 'red',
      ignoreRegions: [
        {left: 10, top: 20, width: 200, height: 80} // by absolute coordinates
      ],
      variations: [
        {
          queryParams: {
            contexts: 'Themes=Light Theme,Language=English'
          }
        },
        {
          queryParams: {
            contexts: 'Themes=Dark Theme,Language=English'
          }
        },
        {
          queryParams: {
            contexts: 'Themes=Light Theme,Language=Japanese'
          }
        },
        {
          queryParams: {
            contexts: 'Themes=Dark Theme,Language=Japanese'
          }
        },
      ]
    }
  }
}


// export const DynamicText = () => {
//   return (
//     <div>
//       This text is dynamic and should be ignored: <span style={{color: 'red'}} className="ignore-this">{Date.now()}</span>
//     </div>
//   )
// }

// DynamicText.story = {
//   name: 'Dynamic text with ignore region',
//   parameters: {
//     eyes: {
//       ignoreRegions: [
//         {
//           selector: '.ignore-this'
//         }
//       ]
//     }
//   }
// }