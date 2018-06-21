import { Endereco } from './endereco.model';
export interface Processo {
  id: string
  protocolo: string
  name: string
  cpf: string
  email: string
  foneFixo?: string
  celular: string
  endereco: Endereco
  assunto: string
  problema: string
  situacao: string
  obs?: string
  dataEntrada: string
  dataModificacao?: string
}
