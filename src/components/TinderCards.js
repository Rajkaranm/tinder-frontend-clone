import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import "./TinderCards.css"


function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Jeff bezos",
      imgUrl: "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_158524946_2000134120009280144_m4zwed.jpg"
    },
    {
      name: "elon musk",
      imgUrl: "https://image.cnbcfm.com/api/v1/image/106926992-1628885077267-elon.jpg"
    },
    {
      name: "hrithik roshan",
      imgUrl: "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2021/01/11/d5ed0832-5001-11eb-ad83-255e1243236c_image_hires_113755.jpg"
    },
    {
      name: "tom cruise",
      imgUrl: "https://www.indiewire.com/wp-content/uploads/2021/05/tom-cruise.png?resize=906,600"
    },
    {
      name: "hugh jackman",
      imgUrl: "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F1d7d598b-0ee6-4131-9b14-b9068e9d8474_1200x720.jpeg"
    }

  ]);

  // useEffect(() => {
  //    async function fetchData(){
  //      const req = await axios.get("/tinder/cards");

  //      setPeople(req.data);
  //    }
  //    fetchData();
  // }, [])

    
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + " left the screen")
  }

  return (
      // Tinder Card Component
      <div className="tinderCards">
        <div className="tinderCards__cardContainer">
            {people.map((person) => {
              // All card will get render with use of function map
              return (
                <TinderCard
                  className="swipe"
                  key={person.name}
                  preventSwipe={['up', 'down']}
                  onSwipe={(dir) => swiped(dir, person.name)}
                  onCardLeftScreen={() => outOfFrame(person.name)}
                >
                  <div 
                    className="card"
                    style={{ backgroundImage: `url(${person.imgUrl})` }}
                  >
                    <h3>{person.name}</h3>
                  </div>
                </TinderCard>
              )
            })}
        </div>
      </div>
  );
}


export default TinderCards;
