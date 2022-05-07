import { v4 as uuidv4 } from "uuid";

export const generateToken = () => {
    return uuidv4();
}

export const validateToken = () => {
    console.log('valida token');
}