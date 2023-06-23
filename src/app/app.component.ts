import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showPicker: boolean = false;
  selectedTime: string = '';
  hours: string = '00';
  minutes: string = '00';
  period: string = 'AM';
  selectedHour = '01';
  selectedMinute = '00';
  selectedPeriod = 'AM';
  hoursList: string[] = Array.from({ length: 12 }, (_, i) =>
    this.padNumber(i + 1)
  );
  minutesList: string[] = Array.from({ length: 60 }, (_, i) =>
    this.padNumber(i)
  );

  ngOnInit() {}
  showTimePicker(): void {
    this.showPicker = true;
  }

  setSelectedTime(): void {
    const formattedHours =
      this.selectedPeriod === 'PM'
        ? Number(this.selectedHour) + 12
        : this.selectedHour;
    this.selectedTime = `${formattedHours}:${this.selectedMinute} ${this.selectedPeriod}`;
    this.showPicker = false;
  }

  padNumber(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
