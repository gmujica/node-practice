const authorize = (req, res, next) => {
    console.log('autorize');
    next()
}

module.exports = authorize