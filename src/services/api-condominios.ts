export interface ICondominio{
    id_condominio: string;
    nome_condominio: string;
    endereco_condominio: string;
    cidade_condominio: string;
    uf_condominio: string;
    tipo_condominio: string;
    created_at: string;
    id_cliente: number;
}

export const getCondominios = async () => {
    const response = await fetch("/api/condominios",{cache: "no-store"});
    //'https://raw.githubusercontent.com/vagner107/viva-condo/refs/heads/main/src/app/condominios/api_condominio.json') 
    // https://fatec.short.gy/condominios

    const{data, success, count, error} = await response.json();
    if(error) throw new Error(error);
    return {data, success, count, error};
}