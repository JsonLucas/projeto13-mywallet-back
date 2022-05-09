import { validateToken } from "../utils/uuid.js";

const authLogoutMiddleware = (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization.substring(7, authorization.length);
    if(validateToken(token)){
        res.locals.token = token;
        next();
    }else{
        res.status(422).send('invalid authorization');
        return;
    }
}

export default authLogoutMiddleware;