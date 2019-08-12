var body = {
  SetColor:function(color){
    document.querySelector('body').style.color = color;
  },
  SetBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
var Links = {
  SetColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
      }
  }
}
var border = {
  SetColor:function(color){
    document.querySelector('h1').style.borderColor = color;
  }
}

function NightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    body.SetBackgroundColor('black');
    body.SetColor('white');
    border.SetColor('white');
    self.value='day';

    Links.SetColor('yellow');

  } else {
    body.SetBackgroundColor('white');
    body.SetColor('black');
    border.SetColor('black');
    self.value='night';

    Links.SetColor('blue');
  }
}
