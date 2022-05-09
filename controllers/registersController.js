import { deleteMovimentation, getBalance, getMovimentation } from "../database/actions.js";

export const registersController = async (req, res) => {
    try{
        const {userId} = res.locals;
        const movimentations = await getMovimentation({userId});
        res.status(200).send(movimentations.reverse());
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
            res.status(200).send('registro excluído.');
        }else{
            res.status(404).send('falha ao excluir o registro.');
        }
        return;
    }catch(e){
        console.log(e.message);
        res.status(500).send('internal error.');
    }
}
