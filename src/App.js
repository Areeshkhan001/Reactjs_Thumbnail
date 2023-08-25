// import logo from './logo.svg';
import './App.css';
import Video from './components/video/Video';


function App() {
 let name=""
 let obj = {
  title:"Node Js Tutorial" ,
     views:"100k" ,
     time:"2 year ago" ,
     channel:"programming",
     verified:true,
 };
  return (
    <div className="App">
      <div className="App-header">
     
      <space />
      {name}
    
     {/* <Video/> */}
     <div>Videos</div>
     <space> </space>
     <Video {...obj}>
      </Video>
     
     <Video  
     title="React Js Tutorial"
     views="10k"
      time="6 months ago"
      // channel="programming"
      verified={false}
       >
      </Video>
     
     <Video  
     title="Node Js Tutorial" 
     views="100k" 
     time="2 year ago" 
     channel="programming">
       verified={false}
      </Video>

      
     


     
     


      
      
      
      
      </div>
 </div>
  );
}


      
     
 
export default App;
