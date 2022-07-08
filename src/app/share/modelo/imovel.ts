import { USUARIO } from './usuario';
export class Imovel{

    id?:string
    estado?:string;
    cidade?:string;
    bairro?:string;
    rua?:string;
    numero?:string;
    cep?:string;
    quartos?:string;
    banheiros?:string;
    garagem?:string;
    capacidade?:string;
    descricao?:string;
    locatario?:USUARIO;

    constructor(id?:string,imovel:Imovel = {}){
        this.id = id;
        this.estado = imovel.estado
        this.cidade = imovel.cidade
        this.bairro = imovel.bairro
        this.rua = imovel.rua
        this.numero = imovel.numero
        this.cep = imovel.cep
        this.quartos = imovel.quartos
        this.banheiros = imovel.banheiros
        this.garagem = imovel.garagem
        this.capacidade = imovel.capacidade
        this.descricao = imovel.descricao
        this.locatario = imovel.locatario
    }
}