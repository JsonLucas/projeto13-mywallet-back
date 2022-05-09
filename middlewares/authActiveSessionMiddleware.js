import { validateToken } from "../utils/uuid.js";

const activeSessionMiddleware = async (req, res, next) => {
    try{
        const { authorization } = req.headers;
        if(authorization){
            const token = authorization.substring(7, authorization.length);
            if(validateToken(token)){
                res.locals.token = token;
                next();
            }else{
                res.status(401).send('sessão inválida.');
            }
        }else{
            res.status(404).send('sessão não encontrada.');
            return;
        }
    }catch(e){
        console.log(e.message);
        res.status(500).send('internal error.');
    }
}

export default activeSessionMiddleware;