import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    formData: ContactForm = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    };

    onSubmit() {
        // Here you'll handle the form submission
        console.log('Form submitted:', this.formData);
        // You can add API call here to send the data to your backend
        
        // Reset form after submission
        this.formData = {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        };
    }
}