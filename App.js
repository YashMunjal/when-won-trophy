import './App.css';


function App() {


    const profileData={
        imageUrl:"https://avatars.githubusercontent.com/u/44050159?v=4",
        name:"Yash Munjal"
    }

    const linksData=[{
      redirectUrl:"https://www.linkedin.com/in/yashmunjal45/",
      serviceName:"LinkedIn"
    },
      {
        redirectUrl:"https://instagram.com/yashmunjal45/",
        serviceName:"Visit My Instagram"
    },{
        redirectUrl:"https://github.com/yashmunjal/",
        serviceName:"View My Github!"
    },{
        redirectUrl:"https://youtube.com/channel/UCwXvxgmYjgO1PKBCXdufT4Q",
        serviceName:"My Fav Music!"
        
    }]

  return (
    <div classNameName="Container">
      
      <section className="app">
  <div className="avatar"><img src={profileData.imageUrl} alt="Avatar"/></div>
  <h1>{profileData.name}</h1>
  <ul>
    {linksData.map((data,i)=>{
       return <li key={i}><a href={data.redirectUrl} target="_blank" rel="noreferrer">{data.serviceName}</a></li>
    })}
    
  </ul>
</section>
    </div>
  );
}

export default App;
