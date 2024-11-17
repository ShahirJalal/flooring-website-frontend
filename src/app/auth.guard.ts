import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    private router = inject(Router);
    private platformId = inject(PLATFORM_ID);

    canActivate(): boolean {
        // Check if we're in the browser
        if (isPlatformBrowser(this.platformId)) {
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            
            if (!isLoggedIn) {
                this.router.navigate(['/login']);
                return false;
            }
            
            return true;
        }
        
        // For server-side rendering, allow access
        return true;
    }
}