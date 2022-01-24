import React,{useRef} from 'react'


function Searchbar({filter}) {
    const [state, setstate] = React.useState(true)
const inputref = useRef('')

function handleclick() {

console.log('kakak');
setstate(false)  

}
function handleclose() {
  console.log('momo');
    inputref.current.value = ''
  filter('')
setstate(true)
console.log(state); 
}
function handletext(e){
// setinputs(e.target.value)
filter(e.target.value)
}
    return (
        <div>
              <div className = 'search-container' >
                 <div className = { state ? 'search' :'search  active'}  >
                 <svg width="30" height="24" onClick = {handleclick} viewBox="0 0 23 24" fill="none" className="search-img"><circle cx="8.75025" cy="8.75025" r="7.75025" stroke="black" strokeWidth="2"></circle><path d="M13.2577 7.42489C12.8586 5.1885 9.54568 3.18193 7.11112 4.65759" stroke="black" strokeWidth="2" stroke-linecap="round"></path><line x1="14.2473" y1="15.1674" x2="21" y2="21.92" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line></svg>
                   <div className = 'input' >
       <input
       ref = {inputref}
       onChange = {handletext}
       />
                   </div>
                  <button onClick = {handleclose}  className="exit-img"></button>
                 </div>
              
             </div>
        </div>
    )
}

export default Searchbar
  