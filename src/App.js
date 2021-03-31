/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react'

import './App.css';


import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import Navbar from './components/Navbar'
import Triple from './components/Triple'


const App = ()=>{

    const [visibleLeft, setVisibleLeft] = useState(false);
  
   const onSetVisible=(term)=>{
       setVisibleLeft(term)
   }


    return(
        <div>
            <Navbar onSetVisible={onSetVisible}/>
              <Sidebar visible={visibleLeft} baseZIndex={1000000} onHide={() => setVisibleLeft(false)}>
                    <h1 style={{ fontWeight: 'normal' }}>Left Sidebar</h1>
                    <Button type="button" onClick={() => setVisibleLeft(false)} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                    <Button type="button" onClick={() => setVisibleLeft(false)} label="Cancel" className="p-button-secondary" />
                </Sidebar>
                <div className="p-d-flex info p-mt-2">
                Gesamtüberblick über die Metering Infrastruktur anhand Vollständigkeit und Datenqualität der empfangenen Messdaten sowie Analyse und Status der verbauten Geräte im Messfeld. Per Klick unterhalb der Anzeige der ausgefallenen und gestörten Geräte gelangt man in die Detailübersicht in Form einer Geo-Karte zur Abbildung des Messfel
                </div>
                <div className="p-d-flex p-mt-2">
                    <div className="p-d-inline-flex one p-mr-2">
                        <Triple/>
                    </div>
                    <div className="p-d-inline-flex two">
                    <iframe style={{width:'100%',height:'100%'}} src="https://services.vivavis.com/live-dashboard/d-solo/_Qd3n_EMz/datenqualitat?orgId=1&refresh=15m&kiosk&from=1616996844101&to=1617169644101&theme=dark&panelId=2"  frameborder="0"></iframe>
                    </div>
                </div>
                <div className="p-d-flex p-mt-2">
                    <div className="p-d-inline-flex one p-mr-2 second">Inline Flex Container</div>
                    <div className="p-d-inline-flex col2 p-mr-2">Inline Flex Container</div>
                    <div className=" three">
                        <div className="birinci">
                            <div className="p-col">dsad</div>
                        </div>
                        <div className="ikinci p-mt-1">
                            <div className="p-col">dsad</div>
                        </div>
                    </div>    
                </div>
                <div className="p-d-flex p-mt-2 fullGraph">
                    sdsa
                </div>
        </div>
    )
}

export default App;