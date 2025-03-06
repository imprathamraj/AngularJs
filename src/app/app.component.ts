import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello from BridgeLabz.';
  imgUrl = "../assets/images/BL_logo_square_jpg.jpg";
  url = "https://www.bridgelabz.com/experienced-engineers";
  userName: string = "";
  onClick(){
    console.log("Save button is clicked");
    window.open(this.url,"_blank");
    }
}
