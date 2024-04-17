import { imagem } from '@/app/utils/Imagens'

interface ImagemProps {
    nome: string
}

export function Imagem({nome}: ImagemProps){
    return imagem.find( imagem => imagem.nome == nome )?.imagem    
}