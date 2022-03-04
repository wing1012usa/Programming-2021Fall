let earliestTimestamp = 1388552400;
let recentTimestamp = 1640926800;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(252, 250, 242);
  //album timeline
  let debut_date = map(1432612800, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let album_0_loc = map(1432872000, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let album_1_loc = map(1441857600, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let album_2_loc = map(1461556800, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let album_3_loc = map(1467604800, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let album_4_loc = map(1480914000, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let album_5_loc = map(1495425600, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let album_6_loc = map(1509944400, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let album_7_loc = map(1517806800, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let album_8_loc = map(1527652800, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let album_9_loc = map(1531713600, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let album_10_loc = map(1548046800, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let album_11_loc = map(1559102400, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let album_12_loc = map(1568606400, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let album_13_loc = map(1585713600, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let album_14_loc = map(1592798400, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let album_15_loc = map(1599624000, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let album_16_loc = map(1603080000, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let album_17_loc = map(1618459200, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let album_18_loc = map(1623988800, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let album_19_loc = map(1634875200, earliestTimestamp, recentTimestamp, 0, windowWidth);

  //debut_date as starting point
  let debut_col = color(239,166,170);
  fill(debut_col);
  noStroke();
  ellipse(debut_date,windowHeight/2,30);


  //album timeline
  let album_col = color(252, 250, 242);
  fill(album_col);
  stroke(239,166,170);
  
  ellipse(album_0_loc, 300, 50);
  ellipse(album_1_loc, 350, 50);
  ellipse(album_2_loc, 210, 50);//first no1 reward
  ellipse(album_3_loc, 300, 50);
  ellipse(album_4_loc, 210, 50);//first all kill album
  ellipse(album_5_loc, 300, 50);
  ellipse(album_6_loc, 250, 50);
  ellipse(album_7_loc, 300, 50);
  ellipse(album_8_loc, 210, 50);//first jp album
  ellipse(album_9_loc, 345, 50);
  ellipse(album_10_loc, 300, 50);
  ellipse(album_11_loc, 350, 50);
  ellipse(album_12_loc, 270, 50);
  ellipse(album_13_loc, 320, 50);
  ellipse(album_14_loc, 210, 50);//first million seller
  ellipse(album_15_loc, 300, 50);
  ellipse(album_16_loc, 350, 50);
  ellipse(album_17_loc, 250, 50);
  ellipse(album_18_loc, 300, 50);
  ellipse(album_19_loc, 335, 50);

  //event timeline
  let event_0_loc = map(1450933200, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let event_1_loc = map(1455426000, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let event_2_loc = map(1469851200, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let event_3_loc = map(1471060800, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let event_4_loc = map(1486702800, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let event_5_loc = map(1487134800, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let event_6_loc = map(1500004800, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let event_7_loc = map(1517547600, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let event_8_loc = map(1519189200, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let event_9_loc = map(1530158400, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let event_10_loc = map(1541217600, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let event_11_loc = map(1552021200, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let event_12_loc = map(1554177600, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let event_13_loc = map(1567137600, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let event_14_loc = map(1598760000, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let event_15_loc = map(1611378000, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let event_16_loc = map(1628395200, earliestTimestamp, recentTimestamp, 0, windowWidth);
  let event_17_loc = map(1636866000, earliestTimestamp, recentTimestamp, 0, windowWidth);
  
  //event timeline
  let event_col = color(252, 250, 242);
  fill(album_col);
  stroke(146,168,209);

  //event timeline stander point
  let new_point = windowHeight/2-(350-windowHeight/2);//equle 350 on upper side

  ellipse(event_0_loc, new_point+70, 50);
  ellipse(event_1_loc, new_point, 50);
  ellipse(event_2_loc, new_point+140, 50);//first concert in JP
  ellipse(event_3_loc, new_point+20, 50);//first asia tour
  ellipse(event_4_loc, new_point+100, 50);
  ellipse(event_5_loc, new_point+10, 50);
  ellipse(event_6_loc, new_point+140, 50);//First tour in North America
  ellipse(event_7_loc, new_point+60, 50);
  ellipse(event_8_loc, new_point+130, 50);
  ellipse(event_9_loc, new_point+20, 50);
  ellipse(event_10_loc, new_point+70, 50);
  ellipse(event_11_loc, new_point+120, 50);
  ellipse(event_12_loc, new_point+10, 50);
  ellipse(event_13_loc, new_point+140, 50);//Taipei, EU canceled due to Covid
  ellipse(event_14_loc, new_point+130, 50);
  ellipse(event_15_loc, new_point+40, 50);
  ellipse(event_16_loc, new_point+100, 50);
  ellipse(event_17_loc, new_point+20, 50);

}
