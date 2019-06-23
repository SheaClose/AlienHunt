import beep from "../../sounds/beep.wav";
function splashPage() {
  return {
    restrict: "E",
    template: `<div class="splashcontainer">
    <div class="splashcontent">
      <div class="title">
        <div class="alienMargin">
          <span style="display: none;">FAKE</span>
        </div>
        <div class="alien">Alien</div>
        <div class="separator"></div>
        <div class="hunt">Hunt</div>
      </div>
      <div class="splashbuttons">
        <ul>
          <li class="splashbutton" ng-click="stopSplashMusic(); play()">
            <img class="selectImg selectImg1" ng-src="imgs/select.png" alt="" />
            <span class="splashbutton1"> Play</span>
          </li>
          <li
            class="splashbutton"
            ng-show="!sound"
            ng-click="mute(); sound=!sound"
          >
            <img class="selectImg selectImg4" ; ng-src="imgs/select.png" alt="" />
            <span class="splashbutton4"> Mute</span>
          </li>
          <li
            class="splashbutton"
            ng-show="sound"
            ng-click="unmute(); sound=!sound"
          >
            <img class="selectImg selectImg4" ; ng-src="imgs/select.png" alt="" />
            <span class="splashbutton4"> Unmute</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  `,
    link: function(scope) {
      const beep = new Howl({ src: [beep] });

      const moveAlien = () => {
        const alienXCssPosition = $(".alien").css("left");
        const alienPosition = parseInt(alienXCssPosition.replace(/px/gi, ""));

        if (alienPosition !== -91) {
          // console.log( huntPosition );
          $(".alien").css("left", `${alienPosition + 3}px`);
        }
      };

      const mute = () => {
        Howler.mute(true);
      };

      const unmute = () => {
        Howler.mute(false);
      };

      setInterval(moveAlien, 1);

      const moveHunt = () => {
        const huntXCssPosition = $(".hunt").css("right");
        const huntPosition = parseInt(huntXCssPosition.replace(/px/gi, ""));

        if (huntPosition !== -125) {
          $(".hunt").css("right", `${huntPosition + 5}px`);
        }
      };

      setTimeout(() => {
        setInterval(moveHunt, 1);
      }, 1500);

      const stopSplashMusic = () => {
        $("section").hide();
        $(".open").show();
      };

      $(".selectImg").css("opacity", "0");

      $(document).ready(() => {
        $(".splashbutton").hover(() => {
          beep.play();
        });

        $(".splashbutton1").hover(() => {
          $(".selectImg1").css("opacity", "1");
        });

        $(".splashbutton2").hover(() => {
          $(".selectImg2").css("opacity", "1");
        });

        $(".login").hover(() => {
          $(".selectImg3").css("opacity", "1");
        });

        $(".splashbutton4").hover(() => {
          $(".selectImg4").css("opacity", "1");
        });

        $(".splashbutton5").hover(() => {
          $(".selectImg5").css("opacity", "1");
        });

        $(".splashbutton6").hover(() => {
          $(".selectImg6").css("opacity", "1");
        });

        $(".splashbutton").mouseout(() => {
          $(".selectImg").css("opacity", "0");
        });
      });

      scope.mute = mute;
      scope.unmute = unmute;
      scope.stopSplashMusic = stopSplashMusic;
    }
  };
}
export default splashPage;
