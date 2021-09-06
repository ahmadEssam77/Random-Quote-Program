var dbQuotes = [
    {
        quote: '"Stay hungry. Stay foolish."',
        author: "-Steve Jobs-"
    },
    {
        quote: '"The people who are crazy enough to think they can change the world are the ones who do."',
        author: "-Steve Jobs-"
    },
    {
        quote: '"If you focus on success, you will have stress. But if you pursue excellence, success will be guaranteed."',
        author: "-Deepak Chopra-"
    },
    {
        quote: '"Success is nothing more than a few simple disciplines, practiced every day."',
        author: "-Jim Rohn-"
    },
    {
        quote: '"Talk is cheap. Show me the code."',
        author: "-Linus Torvalds-"
    },
    {
        quote: '"Software is eating the world."',
        author: "-Marc Andreessen-"
    },
    {
        quote: '"Bad programmers worry about the code. Good programmers worry about data structures and their relationships."',
        author: "-Linus Torvalds-"
    },
    {
        quote: '"It is not over until you win."',
        author: "-Les Brown-"
    },
    {
        quote: '"Shoot for the moon and if you miss you will still be among the stars."',
        author: "-Les Brown-"
    },
    {
        quote: '"Do what is easy and your life will be hard. Do what is hard and your life will become easy."',
        author: "-Les Brown-"
    }
];



function newQuote() {

    var randomNumber = Math.floor(Math.random() * dbQuotes.length);

    document.getElementById("theQuote").innerHTML = dbQuotes[randomNumber].quote;
    document.getElementById("theAuthor").innerHTML = dbQuotes[randomNumber].author;

}