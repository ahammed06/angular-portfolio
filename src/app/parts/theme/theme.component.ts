import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public changeTheme(event: any){
    event.currentTarget.classList.contains('m-toggle-toggle') ? event.currentTarget.classList.remove('m-toggle-toggle') : event.currentTarget.classList.add('m-toggle-toggle')
    document.body.classList.contains('theme-light') ? document.body.classList.remove('theme-light') : document.body.classList.add('theme-light')
  }

}
