import { getBalance, setMovimentation, updateBalance } from "../database/actions.js";
import dateFormater from "../utils/dateFormater.js";

const movimentationController = async (req, res) => {
    try {
        const action = { ...req.body };
        const { userId } = res.locals;
        const { balance } = await getBalance({ userId });
        const value = parseInt(action.value);
        const date = dateFormater();
        let updateValue = 0;
        if (action.type === 0) {
            if ((balance - value) < 0) {
                res.status(400).send('saldo insuficiente.');
                return;
            } else {
                updateValue = (balance - value);
            }
        } else {
            updateValue = (balance + value);
        }
        await updateBalance({ userId }, { balance: updateValue });
        await setMovimentation({ ...action, userId, date });
        res.status(200).send('operação feita com sucesso.');
    } catch (e) {
        console.log(e.message);
        res.status(500).send('internal error.');
    }
}

export default movimentationController;
