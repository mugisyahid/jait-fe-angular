import {animate, state, style, transition, trigger} from '@angular/animations';

export function routerTransition() {
    // randoming value
    const randomIndex = Math.floor((Math.random() * 4));
    switch (randomIndex) {
        case 0:
            return slideToTop();
        case 1:
            return slideToRight();
        case 2:
            return slideToLeft();
        case 3:
            return slideToBottom();
    }
}

export function slideToRight() {
    return trigger('routerTransition', [
        state('void', style({})),
        state('*', style({})),
        transition(':enter', [
            style({transform: 'translateX(-100%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
        ]),
        transition(':leave', [
            style({transform: 'translateX(0%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
        ])
    ]);
}

export function slideToLeft() {
    return trigger('routerTransition', [
        state('void', style({})),
        state('*', style({})),
        transition(':enter', [
            style({transform: 'translateX(100%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
        ]),
        transition(':leave', [
            style({transform: 'translateX(0%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
        ])
    ]);
}

export function slideToBottom() {
    return trigger('routerTransition', [
        state('void', style({})),
        state('*', style({})),
        transition(':enter', [
            style({transform: 'translateY(-100%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
        ]),
        transition(':leave', [
            style({transform: 'translateY(0%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateY(100%)'}))
        ])
    ]);
}

export function slideToTop() {
    return trigger('routerTransition', [
        state('void', style({})),
        state('*', style({})),
        transition(':enter', [
            style({transform: 'translateY(100%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
        ]),
        transition(':leave', [
            style({transform: 'translateY(0%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateY(-100%)'}))
        ])
    ]);
}
