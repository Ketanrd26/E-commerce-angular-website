import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'app-web-body',
  templateUrl: './web-body.component.html',
  styleUrls: ['./web-body.component.css'],
  animations:[
    trigger("openclose",[
      state("close", style({
        "border":"0.5px solid black",
        "height": "100px",
        "width":"18rem"
      })),
      state("open", style({
        "border":"0.5px solid black",
        "width":"18rem",
        "height":"210px"
        
      })),
      transition("open <=> close",[
        animate('0.1s')
      ])
    ]),
    trigger("switchopen",[
      state("open", style({
        "border":"0.5px solid black",
        "height": "100px",
        "width":"18rem"
      })),
      state("switch", style({
        "border":"0.5px solid black",
        "width":"18rem",
        "height":"210px"
        
      })),
      transition("switch <=> open",[
        animate('0.1s')
      ])
    ])
  ]
})
export class WebBodyComponent {
isOpen = false;
isClosed =  false;



toggle(){
    this.isOpen = !this.isOpen ; setTimeout(() => {
      
    }, 3000);
  }

  
}
