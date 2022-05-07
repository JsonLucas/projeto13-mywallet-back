import { getSession } from "../database/actions.js";
export const authRegistersMiddleware = async (req, res, next) => {
    try{
        const { authorization } = req.headers;
        if(authorization){
            const token = authorization.substring(7, authorization.length);
            const session = await getSession({token});
            res.locals.userId = session.userId;
            next();
            return;
        }else{
            res.status(401).send('você não tem autorização para acessar essa página.');
            return;
        }
    }catch(e){
        console.log(e.message);
        res.status(500).send('internal error.');
    }
}