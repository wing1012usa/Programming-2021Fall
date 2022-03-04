let earliestTimestamp = 1388552400000;
let recentTimestamp = 1640926800000;
let hovered =false;
let click = false;
let clicked_this = false;
// let myFont;
// function preload() {
//   myFont = loadFont('Esther Chen_Final/SourceCodePro-Black.otf');
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  //upper section
  for(let i=0;i<albumData.length;i++) {
    the_date = albumData[i].release_date;
    let d = new Date(the_date)
    //console.log(d.getTime()) //gets you a unix timestamp
    let xloc = map(d.getTime(), earliestTimestamp, recentTimestamp, 0, width);
    albumData[i].xpos = xloc;
    let yloc = map(albumData[i].album_score,0,10,150,450)
    albumData[i].ypos = yloc
   
  }
  
  //lower section
  for (let j=0; j<eventData.length;j++){
    event_date=eventData[j].start_date;
    let e = new Date(event_date)
    // console.log(e.getTime())//get you a unix timestamp
    let xloc = map(e.getTime(), earliestTimestamp, recentTimestamp, 0, width);
    eventData[j].xpos = xloc;
    let yloc = map(eventData[j].event_score,0,10, 600, 300)
    eventData[j].ypos = yloc
  }

}

function draw() {
  background(252, 250, 242);
  strokeWeight(4);
  stroke('white');
  line(200, height/2, width, height/2);
  //debut point as starting point
  //temp
    let debut_date = map(1432612800000, earliestTimestamp, recentTimestamp, 0, width);
    let debut_col = color(239,166,170);
  fill(debut_col);
  noStroke();
  ellipse(debut_date,windowHeight/2,20);

  let firstyear = map(1451624400000, earliestTimestamp, recentTimestamp, 0, width);
  fill(debut_col);
  noStroke();
  //ellipse(firstyear,windowHeight/2,10);
  text('2016',325, 380,firstyear,windowHeight/2);
  textStyle(NORMAL);
  textSize(30);
  
  let secondyear = map(1483246800000, earliestTimestamp, recentTimestamp, 0, width);
  fill(debut_col);
  noStroke();
  //ellipse(secondyear,windowHeight/2,10);
  text('2017',500, 380,secondyear,windowHeight/2);
  textStyle(NORMAL);
  textSize(30);
  
  let thirdyear = map(1514782800000, earliestTimestamp, recentTimestamp, 0, width);
  fill(debut_col);
  noStroke();
  //ellipse(thirdyear,windowHeight/2,10);
  text('2018',685, 380,thirdyear,windowHeight/2);
  textStyle(NORMAL);
  textSize(30);

  let forthyear = map(1546318800000, earliestTimestamp, recentTimestamp, 0, width);
  fill(debut_col);
  noStroke();
  //ellipse(forthyear,windowHeight/2,10);
  text('2019',865, 380,forthyear,windowHeight/2);
  textStyle(NORMAL);
  textSize(30);

  let fifthyear = map(1577854800000, earliestTimestamp, recentTimestamp, 0, width);
  fill(debut_col);
  noStroke();
  //ellipse(fifthyear,windowHeight/2,10);
  text('2020',1045, 380,fifthyear,windowHeight/2);
  textStyle(NORMAL);
  textSize(30);

  let sixthyear = map(1609477200000, earliestTimestamp, recentTimestamp, 0, width);
  fill(debut_col);
  noStroke();
  //ellipse(sixthyear,windowHeight/2,10);
  text('2021',1225, 380,sixthyear,windowHeight/2);
  textStyle(NORMAL);
  textSize(30);

  //album timeline
  let album_col = color(252, 250, 242);
  fill(album_col);
  stroke(239,166,170);
  //this is check constantly for hover events
let intersect_anything = false; // intersect < 25
let intersect_center = false; //intersect < 10
for (let i=0;i<albumData.length;i++) {
  intersectDist = dist(albumData[i].xpos,albumData[i].ypos,mouseX,mouseY)
  if (intersectDist < 25){
    fill('white')
      intersect_anything = true;
    if (click == true) {
        //console.log("Clicked " + albumData[i].album_name);
        click = false;
        clicked_this = true;
        //disply click box
        disply_album_click(albumData[i])
      }
  } else {
    fill(album_col)
  }
      if (intersectDist < 10){
        intersect_center = true

        if (hovered == false && !clicked_this) {
          hovered = true
        //console.log(albumData[i].album_name)
        //display box
        display_album_info(albumData[i])
      }

      
      }

  ellipse(albumData[i].xpos, albumData[i].ypos, 50)
fill(252, 250, 242)
ellipse(albumData[i].xpos, albumData[i].ypos, 20)
}


  //event timeline
  let event_col = color(252,250,242);
     fill (event_col);
     stroke(146,168,209);
 // let intersect_blue = false; //intersect < 10
  for(let j=0;j<eventData.length;j++){
    intersectDist = dist(eventData[j].xpos, eventData[j].ypos, mouseX, mouseY)
    if (intersectDist < 25){
      fill('white')
        intersect_anything = true;
        if (click == true) {
          console.log("Clicked " + eventData[j].event_title);
          click = false;
          clicked_this = true;
          display_event_click(eventData[j])
        }
    } else {
      fill(album_col)
    }
       if (intersectDist<10){
        intersect_center = true
         if (hovered == false && !clicked_this) {
           hovered = true
           display_event_info(eventData[j])
         }  
    }
    ellipse(eventData[j].xpos, eventData[j].ypos, 50)
    fill(252, 250, 242)
    ellipse(eventData[j].xpos, eventData[j].ypos, 20)
  }

 if (!intersect_anything) {
    if (clicked_this == true) {
      clicked_this = false;
    }
}
  if (!intersect_center) { 
    if (hovered == true) {
      //excute any mouse off events!!
    hovered = false
    }
  }
    
}
    //hover display info album
    function display_album_info(data) {

      var infoBox = document.getElementById("inputResults");
          infoBox.style.left = (data.xpos -50) + 'px'
          infoBox.style.top = (data.ypos + 10) + 'px'
          infoBox.style.visibility = "visible";
      let myImage = "<img src = 'album_cover/" + data.album_cover +
      "' height=100>";

       infoBox.innerHTML = 
       "<div class='album_info'>"+ 
       "<h1>" + data.album_name + "</h1>" + 
       "<h3>" + data.album_sub + "</h3>" + 
       "<h4>" + "<BR>" + "Release Date" + "</BR>"+ data.release_date + "</h4>" +
       "<p>" + myImage + "</p>"
       "</div>"
      }
  //hover display info event
  function display_event_info(data){
     var infoBox = document.getElementById("inputResults");
         infoBox.style.left = (data.xpos + 10) + 'px'
         infoBox.style.top = (data.ypos + 10) + 'px'
         infoBox.style.visibility = "visible";
         let myImage = "<img src = 'Event/" + data.concert_poster +
         "' height=100>";
      
     infoBox.innerHTML = 
     "<div class = 'event_info'>" +
     "<h1>" + data.event_title + "</h1>" +
     "<h3>" + data.start_date + " ~ " + data.end_date +"</h3>" + 
     "<h3>" + "Start City: " + data.city_1 + "</h3>" +
     "<p>" + myImage + "</p>";
     "</div>"
  }
  //click display info
  function disply_album_click(data) {
    var clickBox = document.getElementById("inputResults");
let emb_video = '<iframe width="560" height="315" src="'+data.video+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
console.log(emb_video)
    clickBox.innerHTML =
    "<div class = 'album_click'>" +
    "<h1>" + data.title_song + "</h1>" +
    "<p>" + emb_video + "</p></div>";
  }

  function display_event_click(data){
    var clickBox = document.getElementById("inputResults");
                let emb_video = '<iframe width="560" height="315" src="'+data.video+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

    clickBox.innerHTML =
    "<div class = 'event_click'>" + 
    "<h1>" + data.event_title + "</h1>" +
    "<p>" + emb_video + "</p>";
  }

  
  
function mouseClicked() {
  click = true;
}
