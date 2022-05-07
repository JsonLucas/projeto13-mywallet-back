import { User, Session, Movimentation } from "./shema.js";

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

export const getMovimentation = async (body) => {
    try{
        const movimentations = await Movimentation.find(body).exec();
        return movimentations;
    }catch(e){
        console.log(e.message);
    };
    return [];
}
