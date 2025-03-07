import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  photoCover:string = "https://media.istockphoto.com/id/1419145330/pt/foto/well-known-tuscany-landscape-with-grain-fields-cypress-trees-and-houses-on-the-hills-at-sunset.jpg?s=2048x2048&w=is&k=20&c=fcnMZp7g3mN45rtMeQnlYiTvsCP38diX0Z13aIc2tlw=";
  contentTitle:string = "NOTICIA EXEMPLO";
  contentDescription:string = "OLA, MUNDO!";
  private id:string | null = "0"

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    );

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string|null){
    const result = dataFake.filter(article => article.id == this.id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photo;
  }

}
