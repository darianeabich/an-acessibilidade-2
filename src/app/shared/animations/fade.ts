import { animate, style, transition, trigger } from '@angular/animations';

export const fade = trigger(
  'fade', // nome do gatilho
  [ // lista de transições
    transition(
     ':enter', // quando elemento ENTRAR no DOM, aplicar estilo
     [
        style({ opacity: 0 }), // 1º como era antes de entrar no DOM: opacidade 0
        animate(250, style({ opacity: 1 })) // 2º quando entra no DOM: faz animação por um tempo e opacidade 1
     ]
   ),
    transition(
      ':leave', // quando elemento SAIR no DOM, aplicar estilo
      [
        // não é necessário iniciar com valor
        animate(250, style({ opacity: 0 })) // quando sai no DOM: faz animação por um tempo e opacidade volta a 0
      ]
    )
  ]
)
