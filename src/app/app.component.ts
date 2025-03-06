import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello from BridgeLabz.';
  imgUrl = "../assets/images/BL_logo_square_jpg.jpg";
  url = "https://www.bridgelabz.com/experienced-engineers";
  userName: string = "";
  nameError: string = "";

  onClick() {
    console.log("Save button is clicked");
    window.open(this.url, "_blank");
  }

  onInput($event: Event) {
    console.log("Change Event Occurred!");
    const inputElement = $event.target as HTMLInputElement;
    this.userName = inputElement.value;

    const nameRegex = /^[A-Z]{1}[a-zA-Z\s]{2,}$/;
    if (nameRegex.test(this.userName)) {
      this.nameError = "Name is Correct!";
    } else {
      this.nameError = "Name is Incorrect!";
    }
  }
}
