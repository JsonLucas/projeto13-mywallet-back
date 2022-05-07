const movimentationController = async (req, res) => {
    try{
        console.log(res.locals);
    }catch(e){
        console.log(e.message);
    }
}

export default movimentationController
