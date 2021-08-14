

    import React from 'react';  
    import './App.css';  
    import Toggle from "./Toggle";  
    import Child from "./Child";  
    function App() {  
      return (  
        <div className="App">  
          <Toggle title="Show Child">  
                    <Child />  
                </Toggle>  
         
        </div>  
      );  
    }  
      
    export default App;  
