import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface QuoteForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  floorType: string;
  roomType: string;
  squareFeet: number;
  timeline: string;
  message: string;
}

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  quoteData: QuoteForm = {
    name: '',
    email: '',
    phone: '',
    address: '',
    floorType: '',
    roomType: '',
    squareFeet: 0,
    timeline: '',
    message: ''
  };

  onSubmit() {
    console.log('Quote form submitted:', this.quoteData);
    // Here you'll handle the form submission to backend

    // Reset form after submission
    this.quoteData = {
      name: '',
      email: '',
      phone: '',
      address: '',
      floorType: '',
      roomType: '',
      squareFeet: 0,
      timeline: '',
      message: ''
    };
  }
}