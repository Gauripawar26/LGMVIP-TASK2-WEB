import React ,{ useState }from 'react'
import './App.css';

const App = () => {
  const [users,setUsers]=useState([]);
  const[isloading,setloading]=useState(false);
  

  const getUsers= async ()=>{
    setloading(true);

    
      setTimeout(()=>{
        setloading(false);
        // const response= await fetch("https://reqres.in/api/users?page=1");
    
       
      },3600)
    const response= await fetch("https://reqres.in/api/users?page=1");
    
    const users= await response.json();
    setUsers(users.data);
    
  }
  return (
    <>
    <header className="navbar"> Result <span>Class</span> </header>
    <div className="heading">
      <h1>Meet Our Tutors</h1>
    </div>

    <div className="container">
      { <span className="top" >Click on GetUsers</span> }
      
      {isloading ? "":(
    
      <button className="btn" onClick={getUsers} > GET USERS </button>)}
     
      
      {users.map((tutor,index)=>{
        
     
        return(
          <div className="card" key={index}>
            <img src={ tutor.avatar} alt=""/>
            <div className="card-back">
              <h3 className="card-title">
                {tutor.first_name} { tutor.last_name}
              </h3>
              <h4 className="card-item">{ tutor.email}</h4>
              </div>
          </div>
        );
      })}
     
    


      

    

    </div>
    
    

      
    </>
  )
}

export default App
