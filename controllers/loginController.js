import { setSession } from "../database/actions.js";
import { generateToken } from "../utils/uuid.js";
export const loginControlller = async (req, res) => {
    try {
        const { userId } = res.locals;
        const session = { userId: userId, token: generateToken() };
        await setSession(session);
        res.status(200).send({ token: session.token });
        return;
    } catch (e) {
        console.log(e.message);
    }
};