import { createContext, useState } from 'react'
import './App.css'
import Props from './Component/Props'
import State from './Component/State'
import Usestae from './Component/Usestae'
import Useeffect from './Component/Useeffect'
import Useref from './Component/Useref'
import Propsclass from './Component/Propsclass'
import ChildA from './Propdrilling/ChildA'
import ClassA from './Propsdrillingavoid/ClassA'
import UseContex from './Component/UseContex'
import ChildsA from './Component/ChildsA'
import UseMemo from './Component/UseMemo'
import UseCallback from './Component/UseCallback'

const data=createContext();
const data1=createContext();
const data2=createContext();
function App() {
const name="Aman Singh";
const name1="Adarsh Singh";
const age=23;
  return (
    <>
      <Props name="Aman Singh"/>
      <Propsclass name="Aman Singh" age="23"/>
      <State name="Aman Singh"/>
      <hr/>
      <Usestae/>
      <Useeffect/>
      <hr/>
      <Useref/>
      <hr />
      <ChildA name={name}/>
      <hr/>
      <data.Provider value={name}>
        <ClassA/>
      </data.Provider>
      <hr/>
      <data1.Provider value={name}>
        <data2.Provider value={age}>
        <ChildsA/>
        </data2.Provider>
      </data1.Provider>
      <hr/>
      <UseMemo/>
      <hr/>
      <UseCallback/>
    </>
  )
}
export default App
export {data,data1,data2};
