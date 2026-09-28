import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'


const App = () => {
const users=[
{
  img:'https://urbanedgehomes.in/wp-content/uploads/2025/10/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsX29mZmljZV8zNV9iZWF1dGlmdWxfc21pbGluZ195b3VuZ19pbmRpYW5fYnVzaW5lc3Nfd29tYV8yYWM3MjMyNS1jZmU3LTQ5ODgtODBkNi03YjViZTg3ODYzNjNfMS5qcGc.jpg',
  intro:'',
  color:'blue',
  tag:'satisfied'

},
{
  img:'https://img.freepik.com/premium-photo/professional-indian-female-headshots-business-corporate-women_203363-204.jpg',
  intro:'',
  color:'green',
  tag:'Underserved'
},
{
  img:'https://img.freepik.com/premium-photo/business-woman-entrepreneur-working-office-professional-employee-workplace-young-beautiful-secretary-girl_265223-28262.jpg',
  intro:'',
  color:'lightseagreen',
  tag:'Underbanked'
},
{
  img:'https://img.freepik.com/premium-photo/business-woman-entrepreneur-working-office-professional-employee-workplace-young-beautiful-secretary-girl_265223-28262.jpg',
  intro:'',
  color:'pink',
  tag:'Underpresure'
}]

  return (
    <div>
    <Section1 users={users}/>
    <Section2 />
    </div>
  )
}

export default App
