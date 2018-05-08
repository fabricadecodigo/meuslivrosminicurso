import { LivrosStorageProvider } from './../livros-storage/livros-storage';
import { Injectable } from '@angular/core';
import { Livro } from '../../models/livro';

@Injectable()
export class LivrosLidosProvider {
  private KEY_LIVROS_LIDOS: string = 'livros-lidos';

  constructor(private storage: LivrosStorageProvider) { }

  recuperarTodos() {
    return this.storage.recuperarTodos(this.KEY_LIVROS_LIDOS);
  }

  adicionar(livro: Livro) {
    return this.storage.adicionar(this.KEY_LIVROS_LIDOS, livro);
  }

  remover(livro: Livro) {
    return this.storage.remover(this.KEY_LIVROS_LIDOS, livro);
  }
}
