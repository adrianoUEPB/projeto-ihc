import { ProcessoDetail } from './processo-detail.model';
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
  processo: ProcessoDetail
}
