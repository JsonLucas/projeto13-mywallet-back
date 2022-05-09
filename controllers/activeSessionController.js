import { getSession } from "../database/actions.js";

const activeSessionContorller = async (req, res) => {
    try{
        const { token } = res.locals;
        const request = await getSession({token});
        if(request){
            res.sendStatus(200);
        }else{
            res.status(404).send('você não está logado.');
        }
    }catch(e){
        console.log(e.message);
        res.status(500).send('internal error.');
    }
}

export default activeSessionContorller;