import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Variáveis com as informações
  photoCover: string = 'https://recreio.com.br/media/_versions/2025/02/poster-capitao-america-1_widelg.jpg';
  contentTitle: string = 'NOVO CAPITÃO AMÉRICA';
  contentDescription: string = 'Veja o novo Capitão América em ação, o novo filme promete ser um sucesso de bilheteira';

  constructor() { }

  ngOnInit(): void {
  }
}

