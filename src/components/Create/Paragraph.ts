const generateRandomParagraph = (wordCount: number): string => {

    const randomWords = [
        "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
        "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
        "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud", "exercitation",
        "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", "commodo", "consequat"
    ];

    let paragraph = '';

    for (let i = 0; i < wordCount; i++) {
        const randomIndex = Math.floor(Math.random() * randomWords.length);
        paragraph += randomWords[randomIndex] + ' ';
    }


    paragraph = paragraph.charAt(0).toUpperCase() + paragraph.slice(1).trim() + '.';

    return paragraph;
}

export default generateRandomParagraph;