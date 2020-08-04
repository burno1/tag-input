import { Component } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Constructor } from '@angular/material/core/typings/common-behaviors/constructor';
import { DataService } from './data.service';

export interface Tag {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private data: DataService) {}

  tags: Tag[] = [
    {name: 'Fotógrafo'},
    {name: 'P&B'},
    {name: 'Web Designer'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tag
    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
  sendTags(){
    let tagsJson: string[];
    tagsJson = [];
    this.tags.forEach(element => {
      tagsJson.push(element.name);
    });

    if(tagsJson.length > 0){
      this.data.addtag(tagsJson).subscribe(result =>{
          console.log(result);
        });
    }
  }
}
