import { getSession } from "../database/actions.js";

const authMovimentationMiddleware = async (req, res, next) => {
    try{
        const { authorization } = req.headers;
        const token = authorization.substring(7, authorization.length);
        const response = await getSession({token});
        if(response){
            res.locals.userId = response.userId;
            next();
            return;
        }
        res.status(401).send('you are not allowed to access this content.');
        return;
    } catch(e){
        console.log(e.message);
        res.status(500).send('internal error.');
    }
}

export default authMovimentationMiddleware;