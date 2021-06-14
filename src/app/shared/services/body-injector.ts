import { ApplicationRef, ComponentRef, EmbeddedViewRef, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BodyInjectorService {

  /**
   *
   * @param appRef Dá acesso à aplicação como um todo
   */
  constructor(private appRef: ApplicationRef) {}

  /**
   * Adicionar o elemento antes do app-root
   * @param componentRef é passado para pegar o elemento do DOM
   * e adicioná-lo antes do app-root
   * @param */
  public stackBeforeAppRoot(componentRef: ComponentRef<any>): void {
    const domElement = this.createDomElement(componentRef);
    const appRoot = document.body.querySelector('app-root');
    document.body.insertBefore(domElement, appRoot);
  }

  /**
   *
   */
  private createDomElement(componentRef: ComponentRef<any>): HTMLElement {
    this.appRef.attachView(componentRef.hostView);
    const domElement = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    return domElement;
  }
}
