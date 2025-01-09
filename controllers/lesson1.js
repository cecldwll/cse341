const emilyRoute = (req, res) => {
    res.send("Emily Caldwell");
};

const morganRoute = (req, res) => {
    res.send("Morgan Chappell");
};

const tyRoute = (req, res) => {
    res.send("Ty Harvey");
};

module.exports = {
    emilyRoute,
    morganRoute,
    tyRoute
}