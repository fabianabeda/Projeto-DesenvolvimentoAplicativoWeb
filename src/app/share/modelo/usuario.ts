export class USUARIO  {
    id?:string;
    nome?:string;
    email?:string;
    senha?:string;

    constructor(id?:string,usuario:USUARIO = {}){
        this.id = id;
        this.nome = usuario.nome;
        this.email = usuario.email;
        this.senha = usuario.senha;
    }

}
