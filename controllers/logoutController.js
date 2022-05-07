import { unlinkSession } from '../database/actions.js';
export const logoutController = async (req, res) => {
    try{
        const {token} = res.locals;
        await unlinkSession({token});
        res.status(200).send('session finished.');
        return;
    }catch(e){
        console.log(e.message);
        res.status(500).send('internal error.');
    }
}