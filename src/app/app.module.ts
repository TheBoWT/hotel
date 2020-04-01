import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { BookingComponent } from './booking/booking.component';
import { AboutComponent } from './about/about.component';
import { RoomsComponent } from './rooms/rooms.component';
import { FeaturesComponent } from './features/features.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BlogComponent } from './blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainSliderComponent,
    BookingComponent,
    AboutComponent,
    RoomsComponent,
    FeaturesComponent,
    TestimonialComponent,
    BlogComponent,
    GalleryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
