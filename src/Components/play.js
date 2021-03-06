import { Howl } from "howler";
import growlMp3 from "../../sounds/growl.mp3";
import ExplosionWav from "../../sounds/Explosion.wav";
import spaceship1Png from "../../imgs/spaceship1.png";
import spaceship2Png from "../../imgs/spaceship2.png";
import spaceship3Png from "../../imgs/spaceship3.png";
import alienStop1Png from "../../imgs/alienStop1.png";
import alienStop2Png from "../../imgs/alienStop2.png";
import alienStop3Png from "../../imgs/alienStop3.png";
import alienStep1Png from "../../imgs/alienStep1.png";
import alienStep2Png from "../../imgs/alienStep2.png";
import alienStep3Png from "../../imgs/alienStep3.png";
import AlienMadPng from "../../imgs/AlienMad.png";
import AlienLaughing1Png from "../../imgs/AlienLaughing1.png";
import AlienLaughing2Png from "../../imgs/AlienLaughing2.png";
import BackgroundPng from "../../imgs/Background.png";
import gameBackgroundMusicMp3 from "../../sounds/gameBackgroundMusic.mp3";
import starwarsthemeMp3 from "../../sounds/starwarstheme.mp3";
import oneLaserdotPng from "../../imgs/oneLaserdot.png";
import twoLaserdotsPng from "../../imgs/twoLaserdots.png";
import threeLaserdotsPng from "../../imgs/threeLaserdots.png";
import shotPng from "../../imgs/shot.png";
import transparentPng from "../../imgs/transparent.png";
import flashPng from "../../imgs/flash.png";
import tinySpaceshipwhitePng from "../../imgs/tiny-spaceship-white.png";
import tinySpaceshipgreyPng from "../../imgs/tiny-spaceship-grey.png";
import tinySpaceshipredPng from "../../imgs/tiny-spaceship-red.png";
import explosionImgs1Png from "../../imgs/explosionImgs/1.png";
import explosionImgs2Png from "../../imgs/explosionImgs/2.png";
import explosionImgs3Png from "../../imgs/explosionImgs/3.png";
import explosionImgs4Png from "../../imgs/explosionImgs/4.png";
import explosionImgs5Png from "../../imgs/explosionImgs/5.png";
import explosionImgs6Png from "../../imgs/explosionImgs/6.png";
import explosionImgs7Png from "../../imgs/explosionImgs/7.png";
import explosionImgs8Png from "../../imgs/explosionImgs/8.png";
import explosionImgs9Png from "../../imgs/explosionImgs/9.png";
import explosionImgs10Png from "../../imgs/explosionImgs/10.png";
import explosionImgs11Png from "../../imgs/explosionImgs/11.png";
import explosionImgs12Png from "../../imgs/explosionImgs/12.png";
import explosionImgs13Png from "../../imgs/explosionImgs/13.png";
import explosionImgs14Png from "../../imgs/explosionImgs/14.png";
import explosionImgs15Png from "../../imgs/explosionImgs/15.png";
import RoundPng from "../../imgs/Round.png";
import GrassBoardPng from "../../imgs/GrassBoard.png";
import TreePng from "../../imgs/Tree.png";
import Area51Png from "../../imgs/Area51.png";
import scoreImgPng from "../../imgs/scoreImg.png";
import Laser_ShootSrc from "../../sounds/Laser_Shoot.wav";
import huntedSoundSrc from "../../sounds/huntedSound.mp3";
import spaceshipMoveWav from "../../sounds/spaceshipMove.wav";
import laughingMp3 from "../../sounds/laughing.mp3";
import GameOverMp3 from "../../sounds/GameOver.mp3";
let score = 0;
let round = 1;
let spaceshipArrayCounter = -1;
let flashingSpaceShipBoolean = true;
let pause = false;
let theGameSpeed = 0;
let huntedCounter = 0;
let roundText;
let rText;
let scoreNumber;

//////SPACESHIP ROTATION//////
let pathsArray = [spaceship1Png, spaceship2Png, spaceship3Png];

let alienStopArray = [alienStop1Png, alienStop2Png, alienStop3Png];
let alienArray = [alienStep1Png, alienStep2Png, alienStep3Png];
let angryAlienArray = [AlienMadPng];
let laughingAlienArray = [AlienLaughing1Png, AlienLaughing2Png];
let background1Array = [BackgroundPng];
let stageMusicArray = [gameBackgroundMusicMp3, starwarsthemeMp3];
let view1 = pathsArray[0];
let view2 = pathsArray[1];
let view3 = pathsArray[2];
let stopView1 = alienStopArray[0];
let stopView2 = alienStopArray[1];
let stopView3 = alienStopArray[2];
let alienView1 = alienArray[0];
let alienView2 = alienArray[1];
let alienView3 = alienArray[2];
let angryView = angryAlienArray[0];
let laughingview1 = laughingAlienArray[0];
let laughingview2 = laughingAlienArray[1];
let background1 = background1Array[0];
let stageMusic = stageMusicArray[0];

function playService() {
  this.play = () => {
    document.body.style.background = "black";
    document.body.style.overflow = "hidden";
    let renderer = PIXI.autoDetectRenderer(
      window.innerWidth,
      window.innerHeight,
      { backgroundColor: 0x000000 }
    );
    //creates container in which all elements will be contained.
    const stage = new PIXI.Container();
    stage.scale.set(window.innerHeight / 600);
    /// Renders game on view
    document.body.appendChild(renderer.view);
    // prior to scaling, sets width/height.
    const MAX_X = 800;
    const MAX_Y = 600;
    /* windowScale creates the number by which scale size is determined (container height / actual window size)
		ex. window.innerHeight = 960, Max_Y = 600, windowScale = 1.6, so rendered stage with be 160% of actual size.*/
    let windowScale = window.innerHeight / MAX_Y;
    let scaledStageWidth = MAX_X * windowScale;
    // takes the rendered width , subtracting the scaled width of the stage, divides by two to find needed left margin to center the stage element within the canvas
    let leftMargin = (renderer.view.clientWidth - scaledStageWidth) / 2;
    //adds left Margin to the stage, ensuring it is centered on the screen.
    renderer.view.width = scaledStageWidth;
    renderer.view.style.height = "100%";
    renderer.view.style.marginLeft = `${leftMargin}px`;

    // stage.scale.set(windowScale);

    const spaceship1 = PIXI.Texture.fromImage(view1);

    const spaceship2 = PIXI.Texture.fromImage(view2);
    const spaceship3 = PIXI.Texture.fromImage(view3);

    const oneLaserdot = PIXI.Texture.fromImage(oneLaserdotPng);
    const twoLaserdots = PIXI.Texture.fromImage(twoLaserdotsPng);
    const threeLaserdots = PIXI.Texture.fromImage(threeLaserdotsPng);

    const alienStop1 = PIXI.Texture.fromImage(stopView1);
    const alienStop2 = PIXI.Texture.fromImage(stopView2);
    const alienStop3 = PIXI.Texture.fromImage(stopView3);

    const alienStep1 = PIXI.Texture.fromImage(alienView1);
    const alienStep2 = PIXI.Texture.fromImage(alienView2);
    const alienStep3 = PIXI.Texture.fromImage(alienView3);

    const alienLaughing1 = PIXI.Texture.fromImage(laughingview1);
    const alienLaughing2 = PIXI.Texture.fromImage(laughingview2);

    const shot1 = PIXI.Texture.fromImage(shotPng);

    const flashTexture = PIXI.Texture.fromImage(flashPng);

    const transparent = PIXI.Texture.fromImage(transparentPng);

    const ufoIcon = PIXI.Texture.fromImage(tinySpaceshipwhitePng);
    const ufoIconGrey = PIXI.Texture.fromImage(tinySpaceshipgreyPng);
    const ufoIconRed = PIXI.Texture.fromImage(tinySpaceshipredPng);
    let ufoIndexTimer = 9000;

    setInterval(() => {
      ufoIndexTimer--;
    }, 1);

    /////////////////////
    //ufoIcon positions//
    /////////////////////
    const ufoIconPositions = [
      300,
      559,
      325,
      559,
      350,
      559,
      375,
      559,
      400,
      559,
      425,
      559,
      450,
      559,
      475,
      559,
      500,
      559,
      525,
      559
    ];

    ////////////////////
    //explosion images//
    ////////////////////

    const explosionImg1 = PIXI.Texture.fromImage(explosionImgs1Png),
      explosionImg2 = PIXI.Texture.fromImage(explosionImgs2Png),
      explosionImg3 = PIXI.Texture.fromImage(explosionImgs3Png),
      explosionImg4 = PIXI.Texture.fromImage(explosionImgs4Png),
      explosionImg5 = PIXI.Texture.fromImage(explosionImgs5Png),
      explosionImg6 = PIXI.Texture.fromImage(explosionImgs6Png),
      explosionImg7 = PIXI.Texture.fromImage(explosionImgs7Png),
      explosionImg8 = PIXI.Texture.fromImage(explosionImgs8Png),
      explosionImg9 = PIXI.Texture.fromImage(explosionImgs9Png),
      explosionImg10 = PIXI.Texture.fromImage(explosionImgs10Png),
      explosionImg11 = PIXI.Texture.fromImage(explosionImgs11Png),
      explosionImg12 = PIXI.Texture.fromImage(explosionImgs12Png),
      explosionImg13 = PIXI.Texture.fromImage(explosionImgs13Png),
      explosionImg14 = PIXI.Texture.fromImage(explosionImgs14Png),
      explosionImg15 = PIXI.Texture.fromImage(explosionImgs15Png);

    const box = PIXI.Texture.fromImage(RoundPng);
    const alien = new PIXI.Sprite(alienStep1);
    const spaceship = new PIXI.Sprite(spaceship1);
    const laserDots = new PIXI.Sprite(threeLaserdots);
    const shot = new PIXI.Sprite(shot1);
    const alienLaughing = new PIXI.Sprite(alienLaughing1);
    const flash = new PIXI.Sprite(transparent);
    const explosionImg = new PIXI.Sprite(transparent);
    const RoundBox = new PIXI.Sprite(box);

    const background = new PIXI.Sprite.fromImage(background1);
    const grass = new PIXI.Sprite.fromImage(GrassBoardPng);
    const tree = new PIXI.Sprite.fromImage(TreePng);
    const sign = new PIXI.Sprite.fromImage(Area51Png);
    const alien2 = new PIXI.Sprite.fromImage(angryView);
    let spaceshipHasBeenShotByUser = false;
    let laserCount = 0;
    const scoreImg = new PIXI.Sprite.fromImage(scoreImgPng);

    let explosionCounter = 20;

    const hitText = new PIXI.Text("HIT", {
      fontFamily: "VT323",
      fontSize: 34,
      fill: "#8DEA03",
      align: "center"
    });

    let angryAlienTimeout;
    let angryAlienInterval;
    let setTheAlien2Position;
    //sounds
    const gameBackgroundMusic = new Howl({
      src: stageMusic,
      autoplay: true,
      loop: true
    });

    const laserShoot = new Howl({ src: Laser_ShootSrc });
    const huntedSound = new Howl({ src: huntedSoundSrc });
    const angryAlienSoundEffect = new Howl({
      src: growlMp3,
      volume: 0.4
    });
    const explosion = new Howl({
      volume: 0.4,
      src: ExplosionWav,
      onplay: () => {
        explosionCounter = 0;
      },
      onend: () => {
        if (spaceshipArrayCounter !== -1) {
        }
        angryAlienTimeout = setTimeout(function() {
          setTimeout(() => {
            angryAlienSoundEffect.play();
          }, 750);
          // angryAlienSoundEffect.play()
          angryAlienInterval = setInterval(function() {
            if (alien2Counter !== 120) {
              alien2Counter++;
              alien2.position.y -= 0.83;
            }
            if (alien2Counter === 120) {
              alien2.position.y += 1.5;
            }
          }, 16.6);
        }, 1000);
        setTheAlien2Position = setTimeout(function() {
          clearInterval(angryAlienInterval);
          clearTimeout(angryAlienTimeout);
          alien2.position.y = MAX_Y - 140;
          alien2Counter = 0;
        }, 4000);
      }
    });

    const spaceshipMove = new Howl({
      src: spaceshipMoveWav,
      volume: 0.4
    });

    const laugh = new Howl({ src: laughingMp3 });

    grass.anchor.y = 1;
    grass.position.y = 600;
    grass.scale.x = 3.2;
    grass.scale.y = 2.2;

    laserDots.anchor.set = 0.5;
    laserDots.position.y = 548;
    laserDots.position.x = 76.5;
    laserDots.scale.x = 0.96;
    laserDots.scale.y = 0.72;

    shot.anchor.set = 0.5;
    shot.position.y = 565;
    shot.position.x = 79.5;
    shot.scale.x = 0.32;
    shot.scale.y = 0.27;

    RoundBox.anchor.set = 0.5;
    RoundBox.position.x = MAX_X / 2.4;
    RoundBox.position.y = MAX_Y / 3.3;
    RoundBox.scale.x = 1.5;
    RoundBox.scale.y = 0.8;

    ////////////////////
    //Explosion effect//
    ////////////////////
    let explosionEffect = setInterval(function() {
      if (explosionCounter < 20) {
        explosionCounter++;
      }

      if (explosionCounter === 1) {
        explosionImg.texture = explosionImg1;
      } else if (explosionCounter === 2) {
        explosionImg.texture = explosionImg2;
      } else if (explosionCounter === 3) {
        explosionImg.texture = explosionImg3;
      } else if (explosionCounter === 4) {
        explosionImg.texture = explosionImg4;
      } else if (explosionCounter === 5) {
        explosionImg.texture = explosionImg5;
      } else if (explosionCounter === 6) {
        explosionImg.texture = explosionImg6;
      } else if (explosionCounter === 7) {
        explosionImg.texture = explosionImg7;
      } else if (explosionCounter === 8) {
        explosionImg.texture = explosionImg8;
      } else if (explosionCounter === 9) {
        explosionImg.texture = explosionImg9;
      } else if (explosionCounter === 10) {
        explosionImg.texture = explosionImg10;
      } else if (explosionCounter === 11) {
        explosionImg.texture = explosionImg11;
      } else if (explosionCounter === 12) {
        explosionImg.texture = explosionImg12;
      } else if (explosionCounter === 13) {
        explosionImg.texture = explosionImg13;
      } else if (explosionCounter === 14) {
        explosionImg.texture = explosionImg14;
      } else if (explosionCounter === 15) {
        explosionImg.texture = explosionImg15;
      } else {
        explosionImg.texture = transparent;
      }
    }, 40);

    background.scale.set(MAX_Y * 0.0013);

    alien.anchor.set = 0.5;
    alien.position.y = MAX_Y - 195;
    alien.scale.x = 3.2;
    alien.scale.y = 3.3;

    tree.anchor.set = 0.5;
    tree.position.x = 30;
    tree.position.y = MAX_Y - 500;
    tree.scale.x = 2.9;
    tree.scale.y = 2.9;

    sign.anchor.set = 0.5;
    sign.position.x = MAX_X - 180;
    sign.position.y = MAX_Y - 240;
    sign.scale.x = 0.55;
    sign.scale.y = 0.55;

    spaceship.anchor.x = 0.5;
    spaceship.anchor.y = 0.5;
    spaceship.scale.x = 0;
    spaceship.scale.y = 0;
    spaceship.position.x = MAX_X / 2;
    spaceship.position.y = 72;

    scoreImg.anchor.set = 0.5;
    scoreImg.position.y = 550;
    scoreImg.position.x = 625;
    scoreImg.scale.x = 0.56;
    scoreImg.scale.y = 1.29;

    alienLaughing.anchor.set = (0.5, 0);
    alienLaughing.scale.x = 3;
    alienLaughing.scale.y = 2.8;
    alienLaughing.position.x = MAX_X / 2;
    alienLaughing.position.y = MAX_Y - 150;

    alien2.scale.x = 3;
    alien2.scale.y = 2.8;
    alien2.position.x = MAX_X / 2;
    alien2.position.y = MAX_Y - 150;

    hitText.position.x = 212;
    hitText.position.y = MAX_Y - 46;
    hitText.scale.x = 1.7;

    flash.scale.y = window.innerHeight;
    flash.scale.x = window.innerWidth;

    function addToStage() {
      roundText = new PIXI.Text("ROUND " + round, {
        fontFamily: "VT323",
        fontSize: 24,
        fill: "#fff",
        align: "center"
      });
      roundText.anchor.set = 0.5;
      roundText.position.x = MAX_X / 2.2;
      roundText.position.y = MAX_Y / 3;
      roundText.scale.x = 1.6;
      roundText.scale.y = 1.6;
      rText = new PIXI.Text("R: " + round, {
        fontFamily: "VT323",
        fontSize: 24,
        fill: "#fff",
        align: "center"
      });
      rText.position.x = 93;
      rText.position.y = 517.5;
      scoreNumber = new PIXI.Text(score.toString(), {
        fontFamily: "VT323",
        fontSize: 24,
        fill: "#fff",
        align: "center"
      });
      scoreNumber.anchor.set = 0.5;
      scoreNumber.position.x = 700;
      scoreNumber.position.y = 554;
      scoreNumber.scale.x = 1;
      scoreNumber.scale.y = 1.6;

      stage.addChild(
        background,
        alien2,
        spaceship,
        explosionImg,
        tree,
        sign,
        alienLaughing,
        grass,
        alien,
        laserDots,
        shot,
        scoreImg,
        scoreNumber,
        RoundBox,
        roundText,
        hitText,
        rText,
        flash
      );
      for (let i = 0; i < 10; i++) {
        var ufoIndex = new PIXI.Sprite(ufoIcon);
        ufoRow.push(ufoIndex);
        ufoIndex.scale.set(0.35);
        ufoIndex.position.x = ufoIconPositions[i * 2];
        ufoIndex.position.y = ufoIconPositions[i * 2 + 1];
        stage.addChild(ufoIndex);
      }
    }
    let nextRound = setInterval(() => {
      if (spaceshipArrayCounter > 8) {
        clearInterval(flashingSpaceShip);
        spaceshipArrayCounter = -1;
        setTimeout(() => {
          pause = true;
          clearInterval(nextRound);
          clearInterval(flyAway);
          clearInterval(laughingAlienInterval);
          clearInterval(spaceshipRotationgAndAlienWalking);
          clearInterval(explosionEffect);
          clearInterval(spaceshipClickListener);
          clearInterval(flashingShotImage);
          clearInterval(animate3);
          clearTimeout(createNewSpaceship);
          clearTimeout(laughingAlienTimeout);
          clearTimeout(laughingAlienPositionTimeout);
          clearTimeout(removeTheSpaceship2);
          clearTimeout(addASpaceship2);
          clearTimeout(limitTheShots);
          clearTimeout(angryAlienTimeout);
          clearInterval(angryAlienInterval);
          clearTimeout(setTheAlien2Position);

          spaceshipHasBeenShotByUser = false;
          renderer.destroy(true);
          stage.destroy(true);
          gameBackgroundMusic.pause();
          round++;
          if (round < 3) {
            theGameSpeed += 0.02;
          } else if (round > 3 && round < 7) {
            theGameSpeed += 0.015;
          } else if (round > 7) {
            theGameSpeed += 0.007;
          }
          if (huntedCounter > 5) {
            huntedCounter = 0;
            setTimeout(() => {
              pause = false;
              this.play();
            }, 1);
          } else {
            new Howl({
              src: GameOverMp3,
              autoplay: true,
              loop: false
            });
            $(".game-over").css("display", "inherit");
          }
        }, 2001);
      }
    }, 10);
    let alienLaughingMoving = false;
    let createNewSpaceship;
    let laughingAlienTimeout;
    let laughingAlienPositionTimeout;

    let flyAway = setInterval(() => {
      if (!spaceshipHasBeenShotByUser && spaceship.rotation === 0) {
        ufoIndexTimer = 9000;
        laserCount = 4;
        setTimeout(() => {
          stage.removeChild(spaceship);
        }, 2000);

        createNewSpaceship = setTimeout(() => {
          shotBol = false;
          shot.texture = shot1;
          spaceshipHasBeenShotByUser = false;
          spaceship.rotation = 0;
          stage.addChildAt(spaceship, 2);
          laserCount = 0;
        }, 3000);

        laughingAlienTimeout = setTimeout(() => {
          laugh.play();
          alienLaughingMoving = true;
          spaceshipArrayCounter++;
          ufoRow[spaceshipArrayCounter]._texture = ufoIcon;
          laughingAlienPositionTimeout = setTimeout(() => {
            alienLaughingMoving = false;
            alienLaughing.position.x = MAX_X / 2;
            alienLaughing.position.y = MAX_Y - 150;
          }, 4000);
        }, 400);
      }
    }, 9000);

    let animateCount = 0;

    ///////////////////////////////////////////////////
    //counter used for spaceship and alien animations//
    ///////////////////////////////////////////////////
    setInterval(() => {
      animateCount++;
      if (animateCount === 3) {
        animateCount = 0;
      }
    }, 150);

    ////////////////////////////////////////////////////////////
    //controls spaceship rotationg AND alien walking animation//
    ////////////////////////////////////////////////////////////
    let spaceshipRotationgAndAlienWalking = setInterval(() => {
      if (animateCount === 0) {
        spaceship.texture = spaceship2;
      } else if (animateCount === 1) {
        spaceship.texture = spaceship3;
      } else if (animateCount === 2) {
        spaceship.texture = spaceship1;
      }
      if (alien.position.x < MAX_X / 2) {
        if (animateCount === 0) {
          alien.texture = alienStep1;
        } else if (animateCount === 1) {
          alien.texture = alienStep2;
        } else if (animateCount === 2) {
          alien.texture = alienStep3;
        }
      } else {
        alien.scale.x -= 0.1;
        alien.scale.y -= 0.03;

        if (animateCount === 0) {
          alien.texture = alienStop1;
        } else if (animateCount === 1) {
          alien.texture = alienStop2;
        } else if (animateCount === 2) {
          alien.texture = alienStop3;
        }
      }
    }, 150);

    let shotBol = false;
    let spaceshipInteractive = "NO";

    ////////////////////////////
    //spaceship click listener//
    ////////////////////////////
    let spaceshipClickListener = setTimeout(() => {
      spaceshipInteractive = "YES";
      $("canvas").click(function() {
        if (laserCount < 3) {
          laserShoot.play();
          flash.texture = flashTexture;
          setTimeout(function() {
            flash.texture = transparent;
          }, 25);
          laserCount++;
        }
      });
    }, 3200);

    let shotBol1 = false;

    let flashingShotImage = setInterval(() => {
      if (shotBol) {
        shotBol1 = !shotBol1;
        if (shotBol1) {
          shot.texture = transparent;
        } else {
          shot.texture = shot1;
        }
      } else {
        shot.texture = shot1;
      }
    }, 125);

    alienLaughing.interactive = true;
    let alienLaughingBol = false;

    let laughingAlienInterval = setInterval(() => {
      alienLaughingBol = !alienLaughingBol;
      if (alienLaughingBol) {
        alienLaughing.texture = alienLaughing1;
      } else {
        alienLaughing.texture = alienLaughing2;
      }
    }, 130);

    var target = new PIXI.Point();

    const resetTarget = () => {
      target.x = Math.random() * MAX_X;
      target.y = Math.random() * 415;
      spaceshipMove.play();
    };

    let alienLaughingPositionCounter = 0;
    let alien2Counter = 0;
    let ufoRow = [];

    if (!pause) {
      requestAnimationFrame(animate);
    }

    let limitTheShots = setInterval(function() {
      if (laserCount === 0 && spaceshipInteractive === "YES") {
        spaceship.interactive = true;
        laserDots.texture = threeLaserdots;
      } else if (laserCount === 1) {
        spaceship.interactive = true;
        laserDots.texture = twoLaserdots;
      } else if (laserCount === 2) {
        spaceship.interactive = true;
        laserDots.texture = oneLaserdot;
      } else {
        spaceship.interactive = false;
        laserDots.texture = transparent;
      }
    }, 20);

    let animate3 = setInterval(function() {
      if (alienLaughingMoving) {
        if (alienLaughingPositionCounter !== 120) {
          alienLaughingPositionCounter++;
          alienLaughing.position.y -= 0.000000125;
        }
        if (alienLaughingPositionCounter === 120) {
          alienLaughing.position.y += 0.75;
        }
      }
      alienWalking();
      alienDisappear();

      contain(spaceship, { x: 0, y: -50, width: MAX_X, height: 575 });

      if (laserCount > 3) {
        spaceship.position.x += 10;
        spaceship.position.y -= 10;
        if (spaceship.scale.x < 160 && spaceship.scale.y < 180) {
          if (alienLaughingPositionCounter !== 120) {
            alienLaughingPositionCounter++;
            alienLaughing.position.y -= 1;
          }
          if (alienLaughingPositionCounter === 120) {
            alienLaughing.position.y += 1;
          }
        }
      }

      if (laserCount <= 3) {
        if (!spaceshipHasBeenShotByUser && alien.position.x > MAX_X / 2) {
          spaceship.position.x +=
            (target.x - spaceship.x) * (0.1 + theGameSpeed);
          spaceship.position.y +=
            (target.y - spaceship.y) * (0.1 + theGameSpeed);

          if (spaceship.scale.x < 1.75 && spaceship.scale.y < 1.75) {
            spaceship.scale.x += 0.04;
            spaceship.scale.y += 0.04;
          }
          if (
            Math.abs(spaceship.x - target.x) < 1 &&
            alien.position.x > MAX_X / 2
          ) {
            resetTarget();
          }
        }
      }
    }, 16.6);

    function animate() {
      if (!pause) {
        if (laserCount === 3) {
          shotBol = true;
        } else {
          shotBol = false;
        }

        if (!alienLaughingMoving) {
          alienLaughingPositionCounter = 0;
        }
        if (!pause) {
          renderer.render(stage);
          requestAnimationFrame(animate);
        }
      }
    }
    function contain(sprite, container) {
      var collision = "";
      //Left
      if (sprite.x < container.x) {
        sprite.x = container.x;
        collision = "left";
      }
      //Top
      if (sprite.y < container.y) {
        sprite.y = container.y;
        collision = "top";
      }
      //Bottom
      if (sprite.y + sprite.height > container.height) {
        sprite.y = container.height - sprite.height;
        collision = "bottom";
      }
      //Return the `collision` value
      return collision;
    }
    function alienWalking() {
      if (alien.position.x <= MAX_X / 2) {
        alien.position.x += 3;
      }
    }
    function alienDisappear() {
      if (alien.position.x > MAX_X / 2) {
        stage.removeChild(roundText);
        stage.removeChild(RoundBox);
        createjs.Tween.get(alien).to({ alpha: 0 }, 1700);
      }
    }
    let removeTheSpaceship2;
    let addASpaceship2;

    function onDown(eventData) {
      spaceshipArrayCounter++;
      huntedCounter++;
      ufoRow[spaceshipArrayCounter]._texture = ufoIconRed;

      explosion.play();
      spaceshipHasBeenShotByUser = true;
      animate2();
      // huntedSound.play()
      score += 500;
      scoreNumber.text = score;
      removeTheSpaceship2 = setTimeout(function() {
        stage.removeChild(spaceship);
      }, 2000);
      addASpaceship2 = setTimeout(function() {
        shotBol = false;
        shot.texture = shot1;
        spaceshipHasBeenShotByUser = false;
        spaceship.rotation = 0;
        stage.addChildAt(spaceship, 2);
        laserCount = 0;
      }, ufoIndexTimer);
      ufoIndexTimer = 9000;
    }
    spaceship.on("mousedown", onDown);
    spaceship.on("touchstart", onDown);

    function animate2() {
      if (spaceshipHasBeenShotByUser) {
        if (!pause) {
          requestAnimationFrame(animate2);

          spaceship.rotation += 0.3;
          spaceship.position.x += 0;
          spaceship.position.y += 3 + Math.random() * 7;

          explosionImg.position.x = spaceship.position.x - 120;
          explosionImg.position.y = spaceship.position.y - 240;
        }
      }
    }
    let flashingSpaceShip = setInterval(() => {
      flashingSpaceShipBoolean = !flashingSpaceShipBoolean;
      if (flashingSpaceShipBoolean) {
        ufoRow[spaceshipArrayCounter + 1]._texture = ufoIconGrey;
      } else {
        ufoRow[spaceshipArrayCounter + 1]._texture = ufoIcon;
      }
    }, 300);
    addToStage();
  };
  // this.play();
}
export default playService;
