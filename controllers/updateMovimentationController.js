import { updateMovimentation } from "../database/actions.js";
import dateFormater from "../utils/dateFormater.js";

const updateMovimentationController = async (req, res) => {
    try{
        const {registerid} = req.headers;
        const body = {...req.body, date: dateFormater()};
        const request = await updateMovimentation({_id: registerid}, body);
        if(request){
            res.status(200).send('registro atualizado com sucesso.');
            return;
        }else{
            res.status(400).send('algum erro ocorreu.');
            return;
        }
        res.sendStatus(200);
    }catch(e){
        console.log(e.message);
        res.status(500).send('internal error.');
    }
}

export default updateMovimentationController;