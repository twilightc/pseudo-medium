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
import { HeaderComponent } from './Components/header/header.component';
import { Branch1Component } from './Page/branch1/branch1.component';
import { NewStoryComponent } from './Page/new-story/new-story.component';
import { LeftMenuComponent } from './Components/left-menu/left-menu.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { YourstoryComponent } from './Page/yourstory/yourstory.component';
import { BeingreadStoryComponent } from './Page/beingread-story/beingread-story.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MainComponent,
    HeaderComponent,
    Branch1Component,
    NewStoryComponent,
    LeftMenuComponent,
    YourstoryComponent,
    BeingreadStoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ShareMaterialModule,
    HttpClientModule,
    CKEditorModule
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
