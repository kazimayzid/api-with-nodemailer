function otpExpireController () {
    return new Date(Date.now() + (10 * 60 * 1000))
}
module.exports = otpExpireController