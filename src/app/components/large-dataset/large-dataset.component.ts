import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-large-dataset',
  templateUrl: './large-dataset.component.html',
  styleUrls: ['./large-dataset.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LargeDatasetComponent implements OnInit {

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  constructor() { }

  ngOnInit(): void {
  }

}
