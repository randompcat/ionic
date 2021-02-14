import { Component, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

	devices:any[] =[];

  constructor(private ble:BLE, private ngZone:NgZone) {}
  
  Scan(){
	this.devices =[];
	this.ble.scan([],15).subscribe(
		device => this.onDeviceDiscovered(device)
	);
  }
  
  onDeviceDiscovered(device){
	console.log('Discovered' + JSON.stringify(device,null,2));
	this.ngZone.run(()=>{
		this.devices.push(device)
		console.log(device)
	})
  }
}