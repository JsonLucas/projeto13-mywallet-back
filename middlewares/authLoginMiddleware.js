import { getUser } from "../database/actions.js";
import bcrypt from 'bcrypt';
const authLogin = async (req, res, next) => {
    try {
        const body = { ...req.body };
        const encryptedPassword = bcrypt.hashSync(body.password, 10);
        const user = await getUser({ email: body.email });
        if (user) {
            if (bcrypt.compareSync(body.password, user.password)) {
                res.locals.userId = user._id;
                res.locals.name = user.name;
                next();
                return;
            } else {
                res.status(404).send('usuário ou senha incorretos');
                return;
            }
        }
        res.status(404).send('usuário não encontrado.');
        return;
    } catch (e) {
        console.log(e);
        res.status(500).send('internal error.');
    }
}

export default authLogin;