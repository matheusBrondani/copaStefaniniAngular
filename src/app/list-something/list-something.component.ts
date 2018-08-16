import { Component, OnInit } from '@angular/core';
import { Time } from '../core/models/time';
import { Jogador } from '../core/models/jogador';
import { CpfMask2Pipe } from "../core/pipes/cpf-mask2.pipe";

@Component({
  selector: 'app-list-something',
  templateUrl: './list-something.component.html', 
  styleUrls: ['./list-something.component.css'],
  providers: [CpfMask2Pipe]
})

export class ListSomethingComponent implements OnInit {

  public times: Time[];
 
  constructor(){
    this.times = [
      new Time(1,'Jurubeba F.C.','Maracabeba', [        
        new Jogador(0,'Marquinhos Boleiro',0,1,1,0),
        new Jogador(1,'Ronaldo Fenomeno',1,22,1,0),
        new Jogador(2,'Galvão Bonno',2,33,1,0),
        new Jogador(3,'João Jogador',3,44,1,0),
        new Jogador(4,'Giuberto NãoGoleiro',4,55,1,0),
        new Jogador(5,'Alberto JogaMuito',5,66,1,0),
        new Jogador(6,'Roberto JogaPouco',6,77,1,0),
        new Jogador(7,'Adalberto JogaRazoavel',7,88,1,0),
        new Jogador(8,'Dagoberto SoCorre',8,99,1,0),
        new Jogador(9,'Qualquerberto EsseGasta',9,245,1,0),
        new Jogador(10,'Michael Jackson',10,35,1,1),
        new Jogador(11,'Oliver Green',11,45,1,0)
      ]),
      new Time(2,'Wizard Gizzard F.C.','Wizard\'s Stadium', [        
        new Jogador(12,'Muro da Silva',0,1,2,1),
        new Jogador(13,'Geromel do Smurf',1,2,0),
        new Jogador(14,'Lelogas Elfo',3,2,0),
        new Jogador(15,'Gandalf Mago',4,2,0),
        new Jogador(16,'Tolkien Escritor',5,2,0),
        new Jogador(17,'Luke CeuAndante',6,2,0),
        new Jogador(18,'Darth Vader',7,2,0),
        new Jogador(19,'Leia Organa',8,2,0),
        new Jogador(20,'Han Chão',9,2,0),
        new Jogador(21,'R2D2',10,2,0),
        new Jogador(22,'C3PO',11,2,0)
      ]),
      new Time(3,'Sem Grana F.C.','Minha Carteira', [        
        new Jogador(23,'Igor Oliveira',10,3,0),
        new Jogador(24,'Giuliano Perreira',1,3,0),
        new Jogador(25,'Aha de Oliveira',5,3,0),
        new Jogador(26,'Nome Aleatório',0,1,3,0)
      ]),
    ];
      // //Sem Time 
      // new Jogador(27,'Jogador Muito Caro',10,9,null,null),
      // new Jogador(28,'Jogador Sample',5,34,null,null),
      // new Jogador(29,'Ultimo Jogador',7,69,null,null),    
  }

  ngOnInit() {
  }

  addCoisaLista () {
    // if(this.valorTxtCoisa != ''){
    //     this.coisas.push(this.valorTxtCoisa);
    //     this.valorTxtCoisa = '';
    // }
  }

  remove (index:number) {
    // this.coisas.splice(index, 1);
  }

  selecionaCliente (index:number) {
    // this.chosenOne = this.listClientes[index];
  }
}
