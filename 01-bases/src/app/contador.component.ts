import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    //templateUrl: './app.component.html'
    //al utilizar solo template se puede hardcodear aqui 
    //en cambio templateUrl utiliza un archivo externo
    template: ` 
        <!-- <h1>{{1+1}}</h1> -->
        <!-- Al utilizar {{ ** }} es como utlitar JS dentro
        titulo es la variable de app.component pero se pueden hacer mas cosas -->

        <h1>{{titulo}}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>

        <button (click)="acumular(-base)">-{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(+base)">+{{base}}</button>
    `
})

export class ContadorComponent {
    public titulo: string = 'Contador App';
    public numero: number = 10;
    public base: number = 5;

    acumular(valor: number) {
        this.numero += valor;
    }
}