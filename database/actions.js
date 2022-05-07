import { User, Session } from "./shema.js";

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
        console.log('usuario cadastrado');
    }).catch((error) => {
        console.log(e.message);
    });
}

export const setSession = (body) => {
    Session.create(body).then((res) => { 
        console.log('sessao ativa'); 
    }).catch((e) => { 
        console.log(e.message);
    });
}