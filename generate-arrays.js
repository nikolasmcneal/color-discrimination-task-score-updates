
//    Code to generate arrays
    var arrays = new Array();
    for (var m = 0; m < 12; m++) {
      arrays[m] = new Array();
    }
    for (var x = 0; x < 2; x++) {
      for (var i = 0; i < 11; i++) {
        var arr = [];
        for (var j = 0; j < 6; j++) {
          arr[j] = Math.floor(Math.random() * 8);
          arrays[i][x] = arr;
        }
      }
    }

    var arrays = [
      [
        [1, 2, 3, 4, 5, 6],
        [7, 2, 3, 5, 4, 1],
      ],
      [
        [1, 6, 5, 0, 2, 3],
        [2, 3, 1, 5, 3, 2],
      ],
    ];