# HTML-To-Text
HTML-To-Text is a Node.js library that converts HTML content into formatted text. This README provides an overview of the library, installation instructions, usage examples, and explanations of key features such as word wrapping.

```plaintext

If you find this repository useful or it has helped you
please don't forget to leave a ⭐️, or even follow my GitHub account.
Your support motivates me to continue providing helpful resources.
Thank you for your appreciation! 🌟🚀💖😊👍

```

## Installation

To use HTML-To-Text in your Node.js project, you can install it via npm. Make sure you have Node.js and npm installed on your system. Then, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your project directory.
3. Run the following command:

```bash
npm install html-to-text
```

This will download and install the HTML-To-Text library and its dependencies into your project's `node_modules` directory.

## Usage

Once you have installed HTML-To-Text, you can use it in your Node.js applications to convert HTML content to formatted text. Here's a basic example:

```javascript
const { htmlToText } = require('html-to-text');

const htmlContent = '<div>Nope Its not Ashton Kutcher. It is Kevin Malone. <p>Equally Smart and equally handsome</p></div>';

const formattedText = htmlToText(htmlContent, {
    wordwrap: 130
});

console.log(formattedText);
```

This code will output the following formatted text:

```
Nope Its not Ashton Kutcher. It is Kevin Malone.
Equally Smart and equally handsome
```

## Wordwrap Explanation

The `wordwrap` option in the `html-to-text` library specifies the maximum length of a line of text before it wraps to the next line. This is particularly useful for formatting text output to fit within a certain width, such as in terminal displays, emails, or printing.

In the example above, we've set `wordwrap: 130`, which means that each line of text generated from the HTML content will have a maximum length of 130 characters before it wraps to the next line. If a paragraph in the HTML content exceeds 130 characters in length, the `html-to-text` library will automatically insert line breaks to ensure that each line stays within the specified length limit.

You can adjust the `wordwrap` value according to your specific requirements and preferences.

## License

```
Copyright 2024 KHAOUITI ABDELHAKIM

Licensed under the MIT License
You may obtain a copy of the License at

http://opensource.org/licenses/MIT

Unless required by applicable law or agreed to in writing, software
distributed under the MIT License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the MIT License.
```

