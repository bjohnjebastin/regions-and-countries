import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { SelectConfig } from 'src/app/models/selectConfig.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnChanges {

  @Input() public selectConfig: SelectConfig;
  @Output() emitSelectedItem: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnChanges(): void {
    console.log(this.selectConfig);
  }

  onOptionChanged(event: any): void {
    this.emitSelectedItem.emit(event.target.value);
  }
}
