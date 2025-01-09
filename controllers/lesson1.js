const classRoute = (req, res) => {
    res.send("CSE 341 Web Services");
};

const helloRoute = (req, res) => {
    res.send("Hello World!");
};

const goodbyeRoute = (req, res) => {
    res.send("Goodbye World!");
};

module.exports = {
    classRoute,
    helloRoute,
    goodbyeRoute
};