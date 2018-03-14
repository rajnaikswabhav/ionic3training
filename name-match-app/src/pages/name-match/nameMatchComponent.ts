import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    templateUrl:'nameMatchComponent.html'
})
export class NameMatchComponent{
    person1:string;
    person2:string;
    lovePercentage:number
    
    constructor(public navCtrl:NavController){
        // if(this.person1==undefined && this.person2==undefined){
        //     this.lovePercentage=0;
        // }else{
        //     }
        
    }

    ASCIIConverter(params:string){
        let value=0;
        for (var i = 0; i < params.length; i ++){
            value+=params.charCodeAt(i);
        }
        return value;
    }

    calculateLovePercentage(){
        this.lovePercentage=(this.ASCIIConverter(this.person1.toLocaleLowerCase())+this.ASCIIConverter(this.person2.toLocaleLowerCase()))%101;
    }


    
}