export const registersController = async (req, res) => {
    try{
        const headers = {...req.headers};
        console.log(headers);
    }catch(e){
        console.log(e.message);
    }
}
