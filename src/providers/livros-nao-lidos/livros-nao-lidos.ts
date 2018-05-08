import { Injectable } from '@angular/core';
import { LivrosStorageProvider } from '../livros-storage/livros-storage';
import { Livro } from '../../models/livro';

@Injectable()
export class LivrosNaoLidosProvider {
  private KEY_LIVROS_NAO_LIDOS: string = 'livros-nao-lidos';

  constructor(private storage: LivrosStorageProvider) { }

  recuperarTodos() {
    return this.storage.recuperarTodos(this.KEY_LIVROS_NAO_LIDOS);
  }

  adicionar(livro: Livro) {
    return this.storage.adicionar(this.KEY_LIVROS_NAO_LIDOS, livro);
  }

  remover(livro: Livro) {
    return this.storage.remover(this.KEY_LIVROS_NAO_LIDOS, livro);
  }
}
