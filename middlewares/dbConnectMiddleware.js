import dbConnection from "../database/dbConnect.js";
const dbConnectMiddleware = async (req, res, next) => {
    try{
        await dbConnection();
        next();
    }catch(e){
        console.log(e.message);
        alert('Internal error.');
        res.sendStatus(500);
    }
}

export default dbConnectMiddleware;