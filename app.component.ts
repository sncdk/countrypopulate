import { Component } from '@angular/core';
import { City } from './model/city';
import { Country } from './model/country';
import { State } from './model/state';
import {CountrystatecityService} from './services/countrystatecity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrapsite';

  constructor(private CountrystatecityService: CountrystatecityService){}
  
  listcountry!: Country[]
  countrySelected!: string
  liststate!: State[]
  selectedState!: string
  listCity!: City[]
  
  ngOnInit(){
    this.fetchCountry();
  }
  private fetchCountry(){
    this.CountrystatecityService.getCountry().subscribe(data=>{
      this.listcountry = data
      console.log('Countries fetched', this.listcountry)
    })

  }
  onSelect(countryIso:any){
    this.CountrystatecityService.getStateOfSelectedCountry(countryIso).subscribe(data=>{
      this.liststate = data
      console.log('States Retrieved', this.liststate)
    })
  }
  
}

