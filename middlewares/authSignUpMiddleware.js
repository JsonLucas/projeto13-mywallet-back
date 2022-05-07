import { getUser } from "../database/actions.js";
const authSinUpMiddleware = async (req, res, next) => {
    try{
        const query = await getUser({email: req.body.email});
        if(query){
            res.status(409).send('usuário já existente.');
            return;
        }else{
            next();
        }
    }catch(e){
        console.log(e.message);
    }
}

export default authSinUpMiddleware;
