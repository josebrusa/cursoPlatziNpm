const names = [
    "Diego",
    "jose",
    "Oscar",
    "Pablo",
    "Eva",
    "Catalina"
];

const randomName = () => {
    const name = names[Math.floor(Math.random() * names.length)];
    console.log(name);
};

module.exports = { randomName };
