import { setUser } from "../database/actions.js";
import bcrypt from 'bcrypt';
export const signUpController = async (req, res) => {
    try {
        const body = {
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            movimentations: {}
        };
        await setUser(body);
        res.status(201).send('usuário cadastrado.');
        return;
    } catch (e) {
        console.log(e.message);
    }
};
