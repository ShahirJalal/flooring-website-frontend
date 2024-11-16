import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Contact {
    id: number;
    createdAt: Date;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    status: 'completed' | 'not completed';
}

interface Quote {
    id: number;
    createdAt: Date;
    name: string;
    email: string;
    phone: string;
    floorType: string;
    roomType: string;
    squareFeet: number;
    timeline: string;
    status: 'completed' | 'not completed';
}

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    activeTab: 'contacts' | 'quotes' = 'contacts';
    contacts: Contact[] = [];
    quotes: Quote[] = [];
    filteredContacts: Contact[] = [];
    filteredQuotes: Quote[] = [];
    contactSearchTerm: string = '';
    quoteSearchTerm: string = '';

    ngOnInit() {
        // Fetch data from API (to be implemented)
        // For now, using mock data
        this.contacts = [
            {
                id: 1,
                createdAt: new Date(),
                name: 'John Doe',
                email: 'john@example.com',
                phone: '1234567890',
                subject: 'General Inquiry',
                message: 'I would like to know more about your services.',
                status: 'not completed'
            }
        ];

        this.quotes = [
            {
                id: 1,
                createdAt: new Date(),
                name: 'Jane Smith',
                email: 'jane@example.com',
                phone: '0987654321',
                floorType: 'hardwood',
                roomType: 'living',
                squareFeet: 500,
                timeline: '1month',
                status: 'not completed'
            }
        ];

        this.filteredContacts = [...this.contacts];
        this.filteredQuotes = [...this.quotes];
    }

    searchContacts() {
        this.filteredContacts = this.contacts.filter(contact => 
            contact.name.toLowerCase().includes(this.contactSearchTerm.toLowerCase()) ||
            contact.email.toLowerCase().includes(this.contactSearchTerm.toLowerCase())
        );
    }

    searchQuotes() {
        this.filteredQuotes = this.quotes.filter(quote => 
            quote.name.toLowerCase().includes(this.quoteSearchTerm.toLowerCase()) ||
            quote.email.toLowerCase().includes(this.quoteSearchTerm.toLowerCase())
        );
    }

    toggleStatus(contact: Contact) {
        contact.status = contact.status === 'completed' ? 'not completed' : 'completed';
        // API call to update status (to be implemented)
    }

    toggleQuoteStatus(quote: Quote) {
        quote.status = quote.status === 'completed' ? 'not completed' : 'completed';
        // API call to update status (to be implemented)
    }
}