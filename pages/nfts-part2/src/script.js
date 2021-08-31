var app = angular.module("myApp", []);
app.controller("sneakers", ['$scope',
  function($scope){
    $scope.title = 'Low level code';
    //begining of products array
    $scope.products = [
      {
      style:"Nike Air Jordan 1",
      img:"http://www.michaeljordansworld.com/airjordans/air_jordan_01.jpg",
      descrip:"Michael Jordan wore the Air Jordan I (1) in the 1984-85 and 1985-86 NBA Seasons."
      },
      {
      style:"Nike Air Jordan 2",
      img:"http://www.michaeljordansworld.com/airjordans/air_jordan_02.jpg",
      descrip:"Michael Jordan wore the Air Jordan II (2) in the 1986-87 NBA Season."
      },
      {
      style:"Nike Air Jordan 3",
      img:"http://www.michaeljordansworld.com/airjordans/air_jordan_03.jpg",
      descrip:"Michael Jordan wore the Air Jordan III (3) in the 1987-88 NBA Season."
      },
      {
      style:"Nike Air Jordan 4",
      img:"http://www.michaeljordansworld.com/airjordans/air_jordan_04.jpg",
      descrip:"Michael Jordan wore the Air Jordan IV (4) in the 1988-89 NBA Season."
      },
      {
      style:"Nike Air Jordan 5",
      img:"http://www.michaeljordansworld.com/airjordans/air_jordan_05.jpg",
      descrip:"Michael Jordan wore the Air Jordan V (5) in the 1989-90 NBA Season."
      },
      {
      style:"Nike Air Jordan 6",
      img:"http://www.michaeljordansworld.com/airjordans/air_jordan_06.jpg",
      descrip:"Michael Jordan wore the Air Jordan VI (6) in the 1990-91 NBA Season."
      },
      {
      style:"Nike Air Jordan 7",
      img:"http://www.michaeljordansworld.com/airjordans/air_jordan_07.jpg",
      descrip:"Michael Jordan wore the Air Jordan VII (7) in the 1991-92 NBA Season."
      },
      {
      style:"Nike Air Jordan 8",
      img:"http://www.michaeljordansworld.com/airjordans/air_jordan_08.jpg",
      descrip:"Michael Jordan wore the Air Jordan VIII (8) in the 1992-93 NBA Season."
      },
      {
      style:"Nike Air Jordan 9",
      img:"http://www.michaeljordansworld.com/airjordans/air_jordan_09.jpg",
      descrip:"This model, the Air Jordan IX (9), was released for the 1993-94 NBA Season."
      },
      {
      style:"Nike Air Jordan 10",
      img:"http://www.michaeljordansworld.com/airjordans/air_jordan_10.jpg",
      descrip:"Michael Jordan wore the Air Jordan X (10) in the 1994-95 NBA Season."
      },
      {
      style:"Nike Air Jordan 11",
      img:"http://www.michaeljordansworld.com/airjordans/air_jordan_11.jpg",
      descrip:"Michael Jordan wore the Air Jordan XI (11) in the 1995-96 NBA Season."
      },
      {
      style:"Nike Air Jordan 12",
      img:"http://www.michaeljordansworld.com/airjordans/air_jordan_12.jpg",
      descrip:"Michael Jordan wore the Air Jordan XII (12) in the 1996-97 NBA Season."
      },
      {
      style:"Nike Air Jordan 13",
      img:"http://www.michaeljordansworld.com/airjordans/air_jordan_13.jpg",
      descrip:"Michael Jordan wore the Air Jordan XIII (13) in the 1997-98 NBA Season."
      },
      {
      style:"Nike Air Jordan 14",
      img:"http://www.michaeljordansworld.com/airjordans/air_jordan_14.jpg",
      descrip:"This model, the Air Jordan XIV (14), was released for the 1998-99 NBA Season."
      },
      {
      style:"Nike Air Jordan 15",
      img:"http://www.michaeljordansworld.com/airjordans/air_jordan_15.jpg",
      descrip:"This model, the Air Jordan XV (15), was released for the 1999-2000 NBA Season."
      },
      {
      style:"Nike Air Jordan 16",
      img:"http://www.michaeljordansworld.com/airjordans/air_jordan_16.jpg",
      descrip:"This model, the Air Jordan XVI (16), was released for the 2000-01 NBA Season."
      },
      {
      style:"Nike Air Jordan 17",
      img:"http://www.michaeljordansworld.com/airjordans/air_jordan_17.jpg",
      descrip:"Michael Jordan wore the Air Jordan XVII (17) in the 2001-02 NBA Season."
      },
      {
      style:"Nike Air Jordan 18",
      img:"http://www.michaeljordansworld.com/airjordans/air_jordan_18.jpg",
      descrip:"Michael Jordan wore the Air Jordan XVIII (18) in the 2002-03 NBA Season."
      },
      {
      style:"Nike Air Jordan 19",
      img:"http://www.michaeljordansworld.com/airjordans/air_jordan_19.jpg",
      descrip:"Michael Jordan wore the Air Jordan XIX (19) in the 2003-04 NBA Season."
      },
      {
      style:"Nike Air Jordan 20",
      img:"http://www.michaeljordansworld.com/airjordans/air_jordan_20.jpg",
      descrip:"This model, the Air Jordan XX (20), was released for the 2004-05 NBA Season."
      },
      {
      style:"Nike Air Jordan 21",
      img:"http://www.michaeljordansworld.com/airjordans/air_jordan_21.jpg",
      descrip:"This model, the Air Jordan XXI (21), was released for the 2005-06 NBA Season."
      },
      {
      style:"Nike Air Jordan 22",
      img:"http://www.michaeljordansworld.com/airjordans/air_jordan_22.jpg",
      descrip:"This model, the Air Jordan XXII (22), was released for the 2006-07 NBA Season"
      },
      {
      style:"Nike Air Jordan 23",
      img:"http://www.michaeljordansworld.com/airjordans/air_jordan_23b.jpg",
      descrip:"This model, the Air Jordan XX3 (23), was released for the 2007-08 NBA Season."
      },
    ];
    // end of products array
  }])