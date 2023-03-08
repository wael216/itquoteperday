// Define an array of quotes with their authors
const quotes = [
  {
  quote: "Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important.",
  author: "Bill Gates"
},
{
  quote: "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
  author: "Bill Gates"
},
{
  quote: "Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them.",
  author: "Steve Jobs"
},
{
  quote: "The technology you use impresses no one. The experience you create with it is everything.",
  author: "Sean Gerety"
},
{
  quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  author: "Nelson Mandela"
},
{
  quote: "I think that novels that leave out technology misrepresent life as badly as Victorians misrepresented life by leaving out sex.",
  author: "Kurt Vonn},
  {
quote: "The most powerful computer in the world is the one in our heads.",
author: "Dr. Michio Kaku"
},
{
quote: "The human spirit must prevail over technology.",
author: "Albert Einstein"
},
{
quote: "Technology is a tool that can allow us to transcend these boundaries and connect on a global scale.",
author: "Al Gore"
},
{
quote: "We're changing the world with technology.",
author: "Bill Gates"
},
{
quote: "The real danger is not that computers will begin to think like men, but that men will begin to think like computers.",
author: "Sydney J. Harris"
},
{
quote: "The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.",
author: "Eric Schmidt"
},
{
quote: "The Internet is becoming the town square for the global village of tomorrow.",
author: "Bill Gates"
},
{
quote: "Technology is a word that describes something that doesn't work yet.",
author: "Douglas Adams"
},
{
quote: "The art challenges the technology, and the technology inspires the art.",
author: "John Lasseter"
},
{
quote: "Technology is the knack of so arranging the world that we don't have to experience it.",
author: "Max Frisch"
},
{
quote: "We need to stop interrupting what people are interested in and be what people are interested in.",
author: "Craig Davis"
},
{
quote: "The future belongs to those who believe in the beauty of their dreams.",
author: "Eleanor Roosevelt"
},
{
quote: "The human brain is like a computer, and education is the software.",
author: "Dr. Michio Kaku"
},
{
quote: "Information technology and business are becoming inextricably interwoven. I don't think anybody can talk meaningfully about one without talking about the other.",
author: "Bill Gates"
},
{
quote: "Computers are useless. They can only give you answers.",
author: "Pablo Picasso"
},
{
quote: "The computer is a moron.",
author: "Peter Drucker"
},
{
quote: "The computer was born to solve problems that did not exist before.",
author: "Bill Gates"
},
{
quote: "Computers are like Old Testament gods; lots of rules and no mercy.",
author: "Joseph Campbell"
},
{
quote: "Computers themselves, and software yet to be developed, will revolutionize the way we learn.",
author: "Steve Jobs"
},
{
quote: "Computing is not about computers anymore. It is about living.",
author: "Nicholas Negroponte"
},
{
quote: "The best way to predict the future is to invent it.",
author: "Alan Kay"
},
{
quote: "The digital revolution is far more significant than the invention of writing or even of printing.",
author: "Douglas Engelbart"
},
{
quote: "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",
author: "Tim Berners-Lee"
},
{
quote: "The rise of Google, the rise of Facebook, the rise of Apple, I think are proof that there is a place for computer science as something that solves problems that people face every day.",
author: "Eric Schmidt"
},
{
quote: "The difference between technology and slavery is that slaves are fully aware that they are not free.",
author: "Nassim Nicholas Taleb"
},
{
quote: "Information technology is at the core of how you do your business and how your business model itself evolves.",
author: "Satya Nadella"
},
{
quote: "The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.",
author: "Eric Schmidt"
},
{
quote: "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
author: "Bill Gates"
},
{
quote: "The best way to predict the future is to invent it.",
author: "Alan Kay"
},
{
quote: "Technology is a word that describes something that doesn't work yet.",
author: "Douglas Adams"
},
{
quote: "The computer is incredibly fast, accurate, and stupid. Man is incredibly slow, inaccurate, and brilliant. The marriage of the two is a force beyond calculation.",
author: "Leo Cherne"
},
{
quote: "Technology is anything that wasn't around when you were born.",
author: "Alan Kay"
},
{
quote: "The computer does exactly what you tell it to do, but not always what you want it to do.",
author: "Anonymous"
},
{
quote: "The internet could be a very positive step towards education, organization, and participation in a meaningful society.",
author: "Noam Chomsky"
},
{
quote: "The most profound technologies are those that disappear. They weave themselves into the fabric of everyday life until they are indistinguishable from it.",
author: "Mark Weiser"
},
{
quote: "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
author: "Bill Gates"
},
{
quote: "The human spirit must prevail over technology.",
author: "Albert Einstein"
},
{
quote: "You can't stop the future. You can't rewind the past. The only way to learn the secret...is to press play.",
author: "Jay Asher"
},
{
quote: "Computing is not about computers anymore. It is about living.",
author: "Nicholas Negroponte"
},
{
quote: "The power of the computer is starting to spread.",
author: "Bill Gates"
},
{
quote: "The computer was born to solve problems that did not exist before.",
author: "Bill Gates"
},
{
quote: "The best way to predict the future is to create it.",
author: "Peter Drucker"
}

];

// Get the current date and use it to select a random quote
const date = new Date();
const index = date.getDate() % quotes.length;
const quote = quotes[index];

// Display the quote on the page
document.getElementById("quote").innerHTML = quote.quote;
document.getElementById("author").innerHTML = "By " + quote.author;
