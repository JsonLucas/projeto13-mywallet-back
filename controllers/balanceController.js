import { getBalance } from "../database/actions.js";

const balanceController = async (req, res) => {
    try{
        const {userId} = res.locals;
        const { balance } = await getBalance({userId});
        res.status(200).send({balance});
    }catch(e){
        console.log(e.message);
        res.status(500).send('internal error.');
    }
}

export default balanceController;