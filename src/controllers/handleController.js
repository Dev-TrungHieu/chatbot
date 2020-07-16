let homePage = (req, res) => {
   return res.render('index.ejs');
}

module.exports = {
    homePage: homePage
};