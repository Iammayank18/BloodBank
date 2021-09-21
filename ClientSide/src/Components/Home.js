import React,{useState, useEffect} from 'react'

const Home = () => {
  
    const [home, setHome] = useState([]);
    const API=`http://localhost:27017/donates`;
    const getUser = async () => {
        const response = await fetch(API);
        setHome(await response.json());
        console.log(home);

      };

      useEffect(() => {
        getUser();
      }, []);
    

    return (
        <div>
           <div className="container text-center mt-5">
            <h1>Welcome to blood Bank</h1>
            {home.map((item, index) => {})}
           <h1> {home.name}</h1>
            <p class="text-danger">You here to help someone</p>
        </div>

        </div>
    )
}

export default Home
