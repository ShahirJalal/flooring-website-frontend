import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface LoginData {
    username: string;
    password: string;
    rememberMe: boolean;
}

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginData: LoginData = {
        username: '',
        password: '',
        rememberMe: false
    };

    showPassword: boolean = false;
    isLoading: boolean = false;
    errorMessage: string = '';

    constructor(private router: Router) {}

    togglePassword() {
        this.showPassword = !this.showPassword;
    }

    onSubmit() {
        console.log('Login attempt:', this.loginData); // Debug log
        this.isLoading = true;
        this.errorMessage = '';

        // Simulate API call
        setTimeout(() => {
            if (this.loginData.username === 'admin' && this.loginData.password === 'admin123') {
                // Set login status in localStorage
                localStorage.setItem('isLoggedIn', 'true');
                // Navigate to dashboard
                this.router.navigate(['/dashboard']);
                console.log('Login successful'); // Debug log
            } else {
                this.errorMessage = 'Invalid username or password';
                console.log('Login failed'); // Debug log
            }
            this.isLoading = false;
        }, 1000);
    }
}