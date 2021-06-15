import { animate, style, transition, trigger } from '@angular/animations';

export const fade = trigger(
  'fade', // nome do gatilho
  [ // lista de transições
   transition(
     ':enter', // quando elemento entrar no DOM, aplicar estilo
     [
        style({ opacity: 0 }), // 1º como era antes de entrar no DOM: opacidade 0
        animate(1000, style({ opacity: 1 })) // 2º quando entra no DOM: faz animação por um tempo e opacidade 1
     ]
   )
  ]
)
