function getClassObj(className){
          return document.getElementsByClassName(className);
      }

      function getIdObj(id){
          return document.getElementById(id);
      }

      var ctx = [];
      //获取class元素
      var canvas = getClassObj('canvas'); 
      canvas[0].width = 182;
      canvas[0].height = 100;
      ctx.push(canvas[0].getContext('2d'));//获取上下文,传2d渲染
      ctx.push(canvas[1].getContext('2d'));//获取上下文,传2d渲染
      ctx.push(canvas[2].getContext('2d'));//获取上下文,传2d渲染
      ctx.push(canvas[3].getContext('2d'));//获取上下文,传2d渲染
      ctx.push(canvas[4].getContext('2d'));//获取上下文,传2d渲染
      // for(var i=0; i<canvas.length; i++){
      //     canvas[i].style.border = '1px solid blue';
      //     canvas[i].width = 182;
      //     canvas[i].height = 100;
      //     ctx = canvas[i].getContext('2d');//获取上下文,传2d渲染
      // }
      sector(ctx[0],0.90,'red');
      sector(ctx[1],0.87,'blue');
      sector(ctx[2],0.82,'orange');
      sector(ctx[3],0.68,'gray');
      sector(ctx[4],0.45,'#3399CC');
      function sector(ctx,set,cor){
          //获取canvas对象
          // var canvas = _('canvas');
          // canvas.style.border = '1px solid blue';
          // canvas.width = 182;
          // canvas.height = 100;
          // var ctx = canvas.getContext('2d');//获取上下文,传2d渲染

          //一个静态圆,底色
          ctx.beginPath();
          ctx.arc(91,50,50,0*Math.PI/180,360*Math.PI/180,false);
          ctx.fillStyle = '#eee';
          ctx.fill();


          //动态画圆
          run();
          //写一个动态的圆形
          var clock = setInterval(run,10);
          var set ;
          var cor ;
          var deg = 0;
          function run(){
              deg+=1;
              if(deg >= 360){
                  clearInterval(clock);
              }
              ctx.beginPath();
              ctx.moveTo(91,50);
              ctx.arc(91,50,50,0*Math.PI/180,deg*set*Math.PI/180,false);
              ctx.fillStyle = cor;
              ctx.fill();
              //一个静态圆
              ctx.beginPath();
              ctx.arc(91,50,40,0*Math.PI/180,360*Math.PI/180,false);
              ctx.fillStyle = '#fff';
              ctx.fill();

              //显示百分比
              ctx.beginPath();
              ctx.font = '20px 微软雅黑';
              ctx.fillStyle = 'purple';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              var bfb = parseInt(deg*set/360*100);
              ctx.fillText(bfb+'%',91,50);
          }
      }