import { deleteMovimentation, getBalance, getMovimentation } from "../database/actions.js";

export const registersController = async (req, res) => {
    try{
        const {userId} = res.locals;
        const movimentations = await getMovimentation({userId});
        res.status(200).send(movimentations);
        return;
    }catch(e){
        console.log(e.message);
        res.status(500).send('internal error.');
    }
}

export const deleteRegisterController = async (req, res) => {
    try{
        const { userId } = res.locals;
        const request = await deleteMovimentation({userId});
        if(request){
            res.sendStatus(200);
        }else{
            res.sendStatus(404);
        }
        return;
    }catch(e){
        console.log(e.message);
        res.status(500).send('internal error.');
    }
}
