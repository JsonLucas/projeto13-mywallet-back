import { getSession } from "../database/actions.js";

const authDeleteRegister = async (req, res, next) => {
    try{
        const { authorization } = req.headers;
        const token = authorization.substring(7, authorization.length);
        const request = await getSession({token});
        if(request){
            res.locals.userId = request.userId;
            next();
        }else{
            res.status(401).send('permissão negada.');
            return;
        }
    }catch(e){
        console.log(e.message);
        res.status(500).send('internal error.');
    }
}

export default authDeleteRegister;
