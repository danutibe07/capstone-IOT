
const CardSection = document.querySelector(".cards");
const cards = [
    {
      id: "card-1",
      title: "Lecture",
      imageSource: "./Images/lecture1.png",
      desc: "Get opportunities to network with CC affilates around the world and also after the summit"         
    },
  
    {
      id: "card-2",
      title: "Exhibition",
      imageSource: "./Images/lecture2.png",
      desc: "Get opportunities to network with CC affilates around the world and also after the summit"     
    },
  
    {
      id: "card-3",
      title: "Forum",
      imageSource: "./Images/lecture3.png",
      desc: "Get opportunities to network with CC affilates around the world and also after the summit"     
    },
  
    {
      id: "card-4",
      title: "Workshop",
      imageSource: "./Images/lecture4.png",
      desc: "Get opportunities to network with CC affilates around the world and also after the summit"     
    
    },
  
    {
      id: "card-5",
      title: "IOT ignite",
      imageSource: "./Images/lecture5.png",
      desc: "Get opportunities to network with CC affilates around the world and also after the summit"     
    },
  ];

  const showCard = function (arr) {
    arr.forEach((elem) => {
      CardSection.insertAdjacentHTML(
        "beforeend",
        `
      <article class="card" id="card-${elem.id}" tabindex="0">
      <div tabindex="0" class="card-image"><img src="${elem.imageSource}" alt="${elem.title}-image"}></div>
      <div class="card-menu">
        <h4 class="title" tabindex="0">${elem.title}</h4>
        <p class="caed-desc" id = "desc-${elem.id}">${elem.desc}</p>
        </div>
      </article>
      `
      );
    });
  };
  
  showCard(cards);