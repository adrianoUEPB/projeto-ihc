export interface Processo {
  $key: string
  name: string
  cpf: string
  email: string
  foneFixo?: string
  celular: string
  endereco: {
    rua: string
    numero: string
    complemento?: string
    cep: string
    bairro: string
    cidade: string
    pais: string
  }
  processo: {
    assunto: string
    problema: string
    situacao: string
    obs?: string
  }
}
