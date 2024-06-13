import { Request, Response, NextFunction } from "express";
import {verify} from 'jsonwebtoken';




interface Props{
    sub: string;
}

export default function AutentificaUserLogin( req: Request, res: Response, next: NextFunction ){

    const autentificacao = req.headers.authorization;

    if (!autentificacao) {
        return res.status(401).json({ message: " voce não esta autorizado!" }).end();
    }

    const [, tokken]= autentificacao.split(" ")

    try {
        const {sub} = verify( tokken, process.env.JWT_SECRET ) as Props
        return next()
    } catch (error) {
        return res.status(401).json({ message: " voce não esta autorizado!" }).end();
    }
}







