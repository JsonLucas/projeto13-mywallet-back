import { getMovimentation } from "../database/actions.js";

export const registersController = async (req, res) => {
    try{
        const {userId} = res.locals;
        console.log('aki', userId);
        const movimentations = await getMovimentation({userId});
        res.status(200).send(movimentations);
        return;
    }catch(e){
        console.log(e.message);
        res.status(500).send('internal error.');
    }
}
