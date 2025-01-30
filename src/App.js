function App() {
  const movie1 = [
    {
      title: "Sky Force",
      time: "5.25PM",
      seats: 210,
      genre: "Action/Historical/Thriller",
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgMjYuNksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00371539-sgpsxzcesz-portrait.jpg",
    },

    {
      title: "Emergency",
      time: "10PM",
      seats: 210,
      genre: "Action/Historical/Thriller",
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4xLzEwICAxMy4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00334219-xjddtyvfbk-portrait.jpg",
    },

    {
      title: "Interstellar",
      time: "8.50AM",
      seats: 250,
      genre: "Adventure/Drama/SciFi",
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS41LzEwICAxMUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00019066-ndsyelfgrt-portrait.jpg",
    },

    {
      title: "Yeh Jawani Hai Deewani",
      time: "10.30PM",
      seats: 180,
      genre: "Comedy/Drama/Romantic",
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICAzMC44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00012104-dlbbxmwbtr-portrait.jpg",
    },

    {
      title: "Game Changer",
      time: "2PM",
      seats: 150,
      genre: "Action/Drama/Political",
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny40LzEwICA5MC4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00311772-dyqxbymvgu-portrait.jpg",
    },

    {
      title: "Deva",
      time: "8PM",
      seats: 150,
      genre: "Action/Thriller",
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTMuMksgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00374104-bkklqyagqa-portrait.jpg",
    },
  ];

  return (
    <div class="container">
      <h1 class="text-center text-danger">BookMyShow</h1>
      <div class="row">
        {movie1.map((film, index) => {
          const { title, seats, genre,time, image } = film;
          return (
            <div class="col-4 mb-4 pt-3">
              <div class="card">
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">
                    {title} <span><i class="fa-solid fa-thumbs-up"></i></span>
                    </h5>
                  
                  <p class="card-text">Time: {time}</p>
                  <p class="card-text">Genre: {genre}</p>
                  <button class="btn btn-primary m-3">Seats: {seats}</button>
                  <button class = "btn btn-danger">Book Seat</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
