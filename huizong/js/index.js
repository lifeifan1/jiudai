$ (document).ready (function () {
  $ ('#pageflip').hover (
    function () {
      $ ('#pageflip img , .msg_block').stop ().animate (
        {
          width: '307px',
          height: '319px',
        },
        500
      );
    },
    function () {
      $ ('#pageflip img').stop ().animate (
        {
          width: '50px',
          height: '52px',
        },
        220
      );

      $ ('.msg_block').stop ().animate (
        {
          width: '50px',
          height: '50px',
        },
        200
      );
    }
  );
});

onload = function () {
  var bt = document.getElementsByClassName ('_left_bt')[0];
  var nr = document.getElementsByClassName ('_left_nr')[0];
  var oBt = bt.children;
  var oNr =nr.children;
  for (let i = 0; i < oBt.length; i++) {
    oBt[i].onmouseover = function () {
	for(let j = 0 ; j < oNr.length;j++ ){
		oNr[j].style.display = "none";
	}
	oNr[i].style.display = "block";
    };
  }
};
