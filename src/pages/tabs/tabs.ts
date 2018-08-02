import{ Component } from '@angular/core';
// import{HomePage} from '../home/home';
import{AboutPage} from '../about/about';
import{ContactPage} from '../contact/contact';
import{ReditsPage} from '../redits/redits';
import{SettingsPage} from '../settings/settings';
@Component({
  selector: 'page-tabs',
  templateUrl:'tabs.html'
})
export class TabsPage{
  tab4Root: any = ReditsPage;
  // tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  tab5Root: any = SettingsPage;
  constructor(){

  }
}
