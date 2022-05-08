import { User, Session, Movimentation, Balance } from "./shema.js";

export const getUser = async (body) => {
    try {
        const user = await User.findOne(body).exec();
        return user;
    } catch (e) {
        console.log(e.message);
    }
    return [];
}

export const setUser = (body) => {
    User.create(body).then((response) => {
        console.log('user created');
    }).catch((error) => {
        console.log(e.message);
    });
}

export const getSession = async (body) => {
    try{
        const session = await Session.findOne(body).exec();
        return session;
    }catch(e){
        console.log(e.message);
    }
    return [];
}

export const setSession = (body) => {
    Session.create(body).then((res) => { 
        console.log('active session'); 
    }).catch((e) => { 
        console.log(e.message);
    });
}

export const unlinkSession = (body) => {
    Session.findOneAndDelete(body).exec().then((res) => {
        console.log('session closed');
    }).catch((e) => {
        console.log(e.message);
    });
}

export const setMovimentation = (body) => {
    Movimentation.create(body).then(() => {
        console.log('movimentation registred');
    }).catch((e) => {
        console.log(e.message);
    });
}

export const getMovimentation = async (body) => {
    try{
        const movimentations = await Movimentation.find(body).exec();
        return movimentations;
    }catch(e){
        console.log(e.message);
    }
    return [];
}

export const updateMovimentation = async (body, update) => {
    try{
        await Movimentation.findOneAndUpdate(body, update).exec();
        return true;
    }catch(e){
        console.log(e.message);
    }
    return false;
}

export const deleteMovimentation = async (body) => {
    try{
        await Movimentation.findOneAndDelete(body).exec();
        return true;
    }catch(e){
        console.log(e.message);
    }
    return false;
}

export const setBalance = (body) => {
    Balance.create(body).then(() => {
        console.log('first login');
    }).catch((e) => {
        console.log(e.message);
    });
}

export const getBalance = async (body) => {
    try{
        const balance = await Balance.findOne(body).exec();
        return balance;
    }catch(e){
        console.log(e.message);
    }
    return [];
}

export const updateBalance = async (body, update) => {
    Balance.findOneAndUpdate(body, update).exec().then(() => {
        console.log('balance updated');
    }).catch((e) => {
        console.log(e.message);
    });
}
