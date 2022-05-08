import { setSession, getBalance, setBalance } from "../database/actions.js";
import { generateToken } from "../utils/uuid.js";
export const loginControlller = async (req, res) => {
    try {
        const { userId, name } = res.locals;
        const session = { userId: userId, token: generateToken() };
        await setSession(session);
        const balance = await getBalance({userId});
        if(!balance){
            await setBalance({userId, balance: 0.0});
        }
        res.status(200).send({ name: name, token: session.token });
        return;
    } catch (e) {
        console.log(e.message);
        res.status(500).send('internal error.');
    }
};
