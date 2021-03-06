import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material';

import { AuthenticationService } from '../libs/core/index';
import { LoginDialogComponent, SignupDialogComponent } from '../libs/user-management/index';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['../styles.scss', './app.component.css'],
    encapsulation: ViewEncapsulation.None
} )
export class AppComponent implements OnInit {
    username: string;

    public constructor(
        private authService: AuthenticationService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        private dialog: MatDialog) {
        this.username = authService.username;
    }

    public setTitle( newTitle: string ) {
        this.titleService.setTitle( newTitle );
    }

    ngOnInit() {
        this.router.events
            .filter( event => event instanceof NavigationEnd )
            .map(() => this.activatedRoute )
            .map( route => {
                while ( route.firstChild ) {
                    route = route.firstChild;
                }
                return route;
            } )
            .filter( route => route.outlet === 'primary' )
            .mergeMap( route => route.data )
            .subscribe(( event ) => this.titleService.setTitle( event['title'] ) );
    }

    onLogin(): void {
        const dialogRef = this.dialog.open( LoginDialogComponent );

        dialogRef.afterClosed().subscribe( result => {
            this.username = this.authService.username;
        } );
    }

    onSignup(): void {
        const dialogRef = this.dialog.open( SignupDialogComponent );

        dialogRef.afterClosed().subscribe( result => {
            this.username = this.authService.username;
        } );
    }

    onLogout(): void {
        this.authService.logout();
        this.username = null;
    }

    onHome(): void {

    }
}
