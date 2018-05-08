import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Livro } from '../../models/livro';

@Injectable()
export class LivrosStorageProvider {

  constructor(private storage: Storage) { }

  recuperarTodos(key: string) {
    return new Promise((resolve, reject) => {
      this.storage.get(key)
        .then((livros: Livro[]) => {
          resolve(livros)
        })
        .catch(() => reject());
    });
  }

  adicionar(key: string, livro: Livro) {
    return this.recuperarTodos(key)
      .then((livros: Livro[]) => {
        if (!livros) {
          livros = [];
        }

        const livroExistente = this.filtrarNaLista(livros, livro.id);

        if (!livroExistente) {
          livros.push(livro);
          return this.salvar(key, livros);
        }
      });
  }

  remover(key: string, livro: Livro) {
    return this.recuperarTodos(key)
      .then((livros: Livro[]) => {
        const livroExistente = this.filtrarNaLista(livros, livro.id);

        const index = livros.indexOf(livroExistente);
        livros.splice(index, 1);

        return this.salvar(key, livros);
      });
  }

  salvar(key: string, livros: Livro[]) {
    return this.storage.set(key, livros);
  }

  filtrarNaLista(livros: Livro[], id: string) {
    const livrosExistentes = livros.filter((livro: Livro) => {
      return livro.id == id;
    });

    if (livrosExistentes.length > 0) {
      return livrosExistentes[0];
    }

    return null;
  }
}
