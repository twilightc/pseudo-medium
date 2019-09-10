import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Page/login/login.component';
import { FormsModule } from '@angular/forms';
import { ShareMaterialModule } from './modules/share-material.module';
import { AuthInterceptor } from './auth/auth.Interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Page/register/register.component';
import { ProfileComponent } from './Page/profile/profile.component';
import { AuthGuard } from './Services/authGuard.service';
import { MainComponent } from './Page/main/main.component';
import { HeaderComponent } from './Page/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ShareMaterialModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
