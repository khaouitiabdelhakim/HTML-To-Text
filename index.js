const { htmlToText } = require('html-to-text');

const htmlContent = '<div>Nope Its not Ashton Kutcher. <br/> It is Kevin Malone. <p>Equally Smart and equally handsome</p></div>';

const formattedText = htmlToText(htmlContent, {
    wordwrap: 130
});

console.log(formattedText);
