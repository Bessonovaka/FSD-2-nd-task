$(document).ready(function () {
  svg4everybody({});

  const rangeSlider = function () {
      $(".js-range-slider").ionRangeSlider({
        skin: "big",
        type: "double",
        min: 0,
        max: 15000,
        from: 5000,
        to: 10000
      });
  };

  let checkboxExpandableList = function () {
    $(document).on('click', '.checkbox__icon', function () {
      $('.checkbox-expandable-list').toggleClass('checkbox-expandable-list--open');
      $('.checkbox__icon').toggleClass('checkbox__icon--open');
    });
  }

  let roomCardSlider = function () {
    $('.js-room-card-slider').each(function (idx) {
      let roomCardSliderClass = "room-card-slider-" + idx;
        this.closest('.room-card-slider').classList.add(roomCardSliderClass);
        $(this).slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          prevArrow: '.' + roomCardSliderClass + " .room-card-slider__navigation--prev",
          nextArrow: '.' + roomCardSliderClass + " .room-card-slider__navigation--next",
          appendDots: '.' + roomCardSliderClass + ' .room-card-slider__dots',
          customPaging : function(slider, i) {
            return '<div class="room-card-slider__dot"></div>';
          }
        });
    });
  }

  let pieChart = function () {
    let voices = {
            "Великолепно": 130,
            "Хорошо": 65,
            "Удовлетворительно": 65,
            "Разочарован": 0
    };
    let myCanvas = document.getElementById("pie-chart");
    myCanvas.width = 120;
    myCanvas.height = 120;
    let ctx = myCanvas.getContext("2d");
    let myPieChart = {
      canvas: myCanvas,
      data: voices,
      colors:[" #FFBA9C","#66D2EA","#8BA4F9","#3D4975"]
    };
    let draw = function () {
      let totalValue = 0;
      let colorIndex = 0;
      for (let categ in myPieChart.data) {
        let val = myPieChart.data[categ];
        totalValue += val;
      }
      let startAngle = Math.PI/2;
      for (let categ in myPieChart.data) {
        let val = myPieChart.data[categ];
        let sliceAngle = 2 * Math.PI * val / totalValue;
        let drawPieSlice = function () {
          ctx.fillStyle = myPieChart.colors[colorIndex%myPieChart.colors.length];
          ctx.beginPath();
          ctx.moveTo(myPieChart.canvas.width/2, myPieChart.canvas.height/2);
          ctx.arc(myPieChart.canvas.width/2, myPieChart.canvas.height/2, Math.min(myPieChart.canvas.width/2, myPieChart.canvas.height/2), startAngle, startAngle+sliceAngle);
          ctx.closePath();
          ctx.fill();
        }
        drawPieSlice();
        startAngle += sliceAngle;
        colorIndex++;
      }
    }
    draw();
  }

  rangeSlider();
  checkboxExpandableList();
  roomCardSlider();
  pieChart();

});