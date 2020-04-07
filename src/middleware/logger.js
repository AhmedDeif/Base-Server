export const Logger = (req, res, next) => {
    console.log(`Recevied a request ${req.url}`);
    next();
}