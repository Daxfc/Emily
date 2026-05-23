let styleTag = document.createElement('style');
document.head.appendChild(styleTag);
let loading = document.getElementById('loading');
let loadingScreen = document.getElementById('loading-screen');
let menuTheme = document.getElementById('menu-theme');
let savepoint = document.getElementById('savepoint');
let info;
let loaded = false;
let starterOne = document.getElementById('starter-one');
let starterTwo = document.getElementById('starter-two');
let starterThree = document.getElementById('starter-three');
let indo = document.getElementsByClassName('indo')[0];
let play = document.getElementsByClassName('play')[0];
let settings = document.getElementsByClassName('settings')[0];
let achievements = document.getElementsByClassName('achievements')[0];
let about = document.getElementsByClassName('about')[0];
let leverOne = document.getElementById('lever-one');
let leverTwo = document.getElementById('lever-two');
let leverOnee = document.getElementById('lever-onee');
let blipSound = document.getElementById('blip-sound');
let blipReverse = document.getElementById('blip-reverse');
let sans = document.getElementById('sans');
let cursive = document.getElementById('cursive');
let single = document.getElementById('single');
let double = document.getElementById('double');
let cuteBackground = document.getElementById('cute-background');
let rainBackground = document.getElementById('rain-background');
let rainTheme = document.getElementById('rain-theme');
let exitSettings = document.getElementById('exit-settings');
let gameSettings = document.getElementsByClassName('game-settings')[0];
let aboutGame = document.getElementsByClassName('about-game')[0];
let exitAbout = document.getElementById('exit-about');
let gameAchievements = document.getElementsByClassName('game-achievements')[0];
let exitAchievements = document.getElementById('exit-achievements');
let jss = document.getElementById('jumpscare-sound');
let insert = document.getElementById('insert');
let blackScreen = document.getElementsByClassName('black-screen')[0];
let blip = document.getElementById('text-blip');
let settingsToggle = document.getElementsByClassName('settings-toggle')[0];
let settingsMenu = document.getElementsByClassName('settings-menu')[0];
let theGame = document.getElementsByClassName('the-game')[0];
let endScreen = document.getElementsByClassName('ending')[0];
let endText = document.getElementsByClassName('end-text')[0];
let endBtn = document.getElementById('returning');
let endSound = document.getElementById('end-sound');

function startnow(){
  window.removeEventListener('click', startnow);
  window.removeEventListener('load', startnow);
  let visable = true;
  loading.style.opacity = 0;
  setTimeout(() => {
    loading.style.fontSize = "5vw";
    loading.style.transition = "3s";
    loading.style.opacity = 1;
    loading.innerHTML = "Click Anywhere To Start!";
    function clickanywhere(){
      clearInterval(info);
      savepoint.play();
      loading.removeEventListener('click', clickanywhere);
      loadingScreen.removeEventListener('click', clickanywhere);
      loading.style.transition = '0s';
      loading.style.opacity = 1;
      let turtle = true;
      let loopColor = setInterval(() =>{
        if(turtle){
          loading.style.color = 'gray';
          turtle = false;
        }
        else{
          loading.style.color = 'white'
          turtle = true;
        }
      }, 150)
      setTimeout(() =>{
        clearInterval(loopColor);
        loading.style.color = 'white';
        loading.style.opacity = '0';
        loading.style.transition = '0.5s';
      }, 2000)
      setTimeout(() => {
        if(localStorage.getItem('music')!== 'mute'){
          if(localStorage.getItem('theme') === 'sad'){
            rainTheme.play();
          } else {
            menuTheme.play();
          }
        }
        loading.innerHTML = '.';
        loading.style.color = 'black';
        starterOne.innerHTML = 'For';
        setTimeout(() =>{
          starterTwo.innerHTML = 'Emma';
          setTimeout(() =>{
            starterOne.innerHTML = '';
            starterTwo.innerHTML = '';
            setTimeout(() =>{
              starterOne.innerHTML ='By';
              setTimeout(() =>{
                starterTwo.innerHTML = 'Dax?';
                setTimeout(() =>{
                  starterTwo.innerHTML = '';
                  starterOne.innerHTML = '';
                  setTimeout(() =>{
                    starterOne.innerHTML = 'Happy';
                    starterTwo.style.color = 'red';
                    starterTwo.style.fontFamily = 'cursive';
                    setTimeout(() =>{
                      starterTwo.innerHTML = 'Valentine♥️';
                      setTimeout(() =>{
                        starterTwo.innerHTML = '';
                        starterTwo.style.color = 'white'
                        starterTwo.style.fontFamily = 'Bitcount Single';
                        starterOne.innerHTML = '';
                        setTimeout(() =>{
                          starterOne.innerHTML = 'Welcome';
                          starterOne.style.top = '35%';
                          setTimeout(() =>{
                            starterTwo.style.position = 'absolute';
                            starterTwo.style.top = '45%';
                            starterTwo.innerHTML = 'To';
                            loading.innerHTML = '';
                            setTimeout(() =>{
                              starterThree.style.position = 'absolute';
                              starterThree.style.top = '55%';
                              starterThree.innerHTML = 'My World!';
                              setTimeout(() =>{
                                indo.style.transform = 'translateY(5vw)';
                                loading.style.transition = '0s';
                                loadingScreen.style.backgroundColor = 'white';
                                setTimeout(() =>{
                                  loadingScreen.style.transition = '3s';
                                  loadingScreen.style.opacity = 0;
                                  indo.style.transform = 'translateY(-20vw)';
                                  setTimeout(() =>{
                                    play.style.transform = 'translateX(0)';
                                    play.style.opacity = 1;
                                    setTimeout(() =>{
                                      settings.style.transform = 'translateX(0)';
                                      settings.style.opacity = 1;
                                      setTimeout(() =>{
                                        achievements.style.transform = 'translateX(0)';
                                        achievements.style.opacity = 1;
                                        setTimeout(() =>{
                                          about.style.opacity = 1;
                                          about.style.transform = 'translateX(0)';
                                          loadingScreen.style.display = 'none';
                                        }, 300)
                                      }, 300)
                                    }, 300)
                                  }, 2000)
                                }, 5)
                              }, 500)
                            }, 500)
                          }, 500)
                        }, 800)
                      }, 500)
                    }, 1000)
                  }, 400)
                }, 500)
              }, 1000)
            }, 500)
          }, 500)
        }, 1000)
      }, 4000)
    }
    loading.addEventListener('click', clickanywhere);
    loadingScreen.addEventListener('click', clickanywhere);
    info = setInterval(() => {
      if(visable){
        visable = false;
        loading.style.opacity = 0;
      }
      else{
        visable = true;
        loading.style.opacity = 1;
      }
    }, 2000);
  }, 2000);
}

window.addEventListener('load', startnow);
window.addEventListener('click', startnow);

if(localStorage.getItem('theme') === 'sad'){
  document.body.style.background = 'url("rain-background.gif") black no-repeat';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundAttachment = 'fixed';
} else {
  document.body.style.background = 'url("cute-background.png") black no-repeat';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundAttachment = 'fixed';
}

if(localStorage.getItem('music') === 'mute'){
  leverOnee.style.transform = 'translateX(10.5vw)';
  leverOne.style.background = 'lightgreen';
} else {
  leverOnee.style.transform = 'translateX(0vw)';
  leverOne.style.background = 'gray';
}

function firstLever(){
  if(localStorage.getItem('music')!== 'mute'){
    localStorage.setItem('music', 'mute');
    leverOnee.style.transform = 'translateX(10.5vw)';
    leverOne.style.background = 'lightgreen';
    blipSound.play();
    menuTheme.pause();
    rainTheme.pause();
  }
  else{
    localStorage.setItem('music', 'notMuted');
    leverOnee.style.transform = 'translateX(0vw)';
    leverOne.style.background = 'gray';
    blipReverse.play();
    if(localStorage.getItem('theme') === 'sad'){
      rainTheme.play();
    } else {
      menuTheme.play();
    }
  }
}
leverOne.addEventListener('click', firstLever);

if(localStorage.getItem('font') == 'serif'){
  styleTag.innerHTML = '*{font-family:sans-serif;}';
}
else if(localStorage.getItem('font') == 'crsv'){
  styleTag.innerHTML = '*{font-family:cursive;}';
}
else if(localStorage.getItem('font') == 'one'){
  styleTag.innerHTML = '*{font-family:"Bitcount Single";}';
}
else if(localStorage.getItem('font') == 'two'){
  styleTag.innerHTML = '*{font-family:"Bitcount Grid Double";}';
}

function clicksound(){
  savepoint.play();
  savepoint.currentTime = 0;
}

function sansSerif(){
  clicksound();
  styleTag.innerHTML = '*{font-family:sans-serif;}';
  localStorage.setItem('font', 'serif');
}
sans.addEventListener('click', sansSerif);

function curs(){
  clicksound();
  styleTag.innerHTML = '*{font-family:cursive;}';
  localStorage.setItem('font', 'crsv');
}
cursive.addEventListener('click', curs);

function bitcountSingle(){
  clicksound();
  styleTag.innerHTML = '*{font-family:"Bitcount Single";}';
  localStorage.setItem('font', 'one');
}
single.addEventListener('click', bitcountSingle);

function bitcountDouble(){
  clicksound();
  styleTag.innerHTML = '*{font-family:"Bitcount Grid Double";}';
  localStorage.setItem('font', 'two');
}
double.addEventListener('click', bitcountDouble);

function sadbg(){
  document.body.style.background = 'url("rain-background.gif") black no-repeat';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundAttachment = 'fixed';
  localStorage.setItem('theme', 'sad');
  if(localStorage.getItem('music')!== 'mute'){
    menuTheme.pause();
    menuTheme.currentTime = 0;
    rainTheme.play();
  }
}
rainBackground.addEventListener('click', sadbg);

function kawaiibg(){
  document.body.style.background = 'url("cute-background.png") black no-repeat';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundAttachment = 'fixed';
  localStorage.setItem('theme', 'happy');
  if(localStorage.getItem('music')!== 'mute'){
    rainTheme.pause();
    rainTheme.currentTime = 0;
    menuTheme.play();
  }
}
cuteBackground.addEventListener('click', kawaiibg);

function menuAppear(){
  indo.style.display = 'block';
  play.style.display = 'block';
  settings.style.display = 'block';
  achievements.style.display = 'block';
  about.style.display = 'block';
  setTimeout(() =>{
    indo.style.opacity = 1;
    setTimeout(() =>{
      play.style.opacity = 1;
      play.style.transform = 'translateX(0)';
      setTimeout(() =>{
        settings.style.opacity = 1;
        settings.style.transform = 'translateX(0)';
        setTimeout(() =>{
          achievements.style.opacity = 1;
          achievements.style.transform = 'translateX(0)';
          setTimeout(() =>{
            about.style.opacity = 1;
            about.style.transform = 'translateX(0)';
          }, 350)
        }, 350)
      }, 350)
    }, 350)
  }, 350)
}

function menuDisappear(){
  indo.style.opacity = 0;
  setTimeout(() =>{
    play.style.opacity = 0;
    play.style.transform = 'translateX(25vw)';
    setTimeout(() =>{
      settings.style.opacity = 0;
      settings.style.transform = 'translateX(-25vw)';
      setTimeout(() =>{
        achievements.style.opacity = 0;
        achievements.style.transform = 'translateX(25vw)';
        setTimeout(() =>{
          about.style.opacity = 0;
          about.style.transform = 'translateX(-25vw)';
          setTimeout(() =>{
            indo.style.display = 'none';
            play.style.display = 'none';
            settings.style.display = 'none';
            achievements.style.display = 'none';
            about.style.display = 'none';
          }, 350)
        }, 500)
      }, 350)
    }, 350)
  }, 350)
}

function clickOnPlay(){
  blip.volume = 1;
  savepoint.play();
  setTimeout(() =>{
    menuDisappear();
    setTimeout(() =>{
      blackScreen.style.display = 'block';
      setTimeout(() =>{
        menuTheme.pause();
        menuTheme.currentTime = 0;
        rainTheme.pause();
        rainTheme.currentTime = 0;
        blackScreen.style.opacity = 1;
        setTimeout(() =>{
          settingsToggle.style.display = 'block';
          theGame.style.display = 'block';
          setTimeout(() =>{
            blackScreen.style.transition = '0s';
            blackScreen.style.background = 'white';
            setTimeout(() =>{
              blackScreen.style.transition = '3s'
              blackScreen.style.opacity = 0;
              setTimeout(() =>{
                blackScreen.style.display = 'none';
              }, 3000)
            }, 50)
          }, 1000)
        }, 2000)
      }, 50)
    }, 2850)
  }, 200)
}
play.addEventListener('click', clickOnPlay)

function clickOnSettings(){
  savepoint.play();
  setTimeout(() =>{
    menuDisappear();
    setTimeout(() =>{
      gameSettings.style.display = 'block';
      setTimeout(() =>{
        gameSettings.style.opacity = 1;
      }, 100)
    }, 2850)
  }, 100)
}
settings.addEventListener('click', clickOnSettings)

function settingsDisappear(){
  savepoint.play();
  gameSettings.style.opacity = 0;
  setTimeout(() =>{
    gameSettings.style.display = 'none';
    setTimeout(() =>{
      menuAppear();
    }, 200)
  }, 1000)
}
exitSettings.addEventListener('click', settingsDisappear);

function clickOnAbout(){
  savepoint.play();
  setTimeout(() =>{
    menuDisappear();
    setTimeout(() =>{
      aboutGame.style.display = 'block';
      setTimeout(() =>{
        aboutGame.style.opacity = 1;
      }, 100)
    }, 2850)
  }, 100)
}
about.addEventListener('click', clickOnAbout);

function exitFromAbout(){
  savepoint.play();
  aboutGame.style.opacity = 0;
  setTimeout(() =>{
    aboutGame.style.display = 'none';
    setTimeout(() =>{
      menuAppear()
    }, 100)
  }, 1000)
}
exitAbout.addEventListener('click', exitFromAbout);

function clickOnAchievements(){
  savepoint.play();
  setTimeout(() =>{
    menuDisappear();
    setTimeout(() =>{
      gameAchievements.style.display = 'block';
      setTimeout(() =>{
        gameAchievements.style.opacity = 1;
      }, 100)
    }, 2850)
  }, 100)
}
achievements.addEventListener('click', clickOnAchievements);

function exitFromAchievements(){
  savepoint.play();
  gameAchievements.style.opacity = 0;
  setTimeout(() =>{
    gameAchievements.style.display = 'none';
    menuAppear();
  }, 1000)
}
exitAchievements.addEventListener('click', exitFromAchievements);

let text = "Hello Emma chan my kawaii lovely dovely pookie poo";
let textBox = document.getElementsByClassName('text-box')[0];
let x = 0;
let lol = null;
let face = document.getElementsByClassName('the-face')[0];
let counter = document.getElementsByClassName('whoa')[0];
let touchSound = new Audio('face-touch.mp3');
let main = document.getElementById('btns');
let mainTheme = document.getElementById('main-theme');
let rageTheme = document.getElementById('rage');
let toggleMuteTheme = document.getElementById('toggle-mute-theme');
let toggleMuteThemeBtn = document.getElementById('toggle-mute-theme-btn');
let toggleMuteBlip = document.getElementById('toggle-mute-blip');
let toggleMuteBlipBtn = document.getElementById('toggle-mute-blip-btn');
let simp = true;
let achiComp = document.getElementsByClassName('achi-comp')[0];
let achiPhoto = document.getElementsByClassName('achi-photo')[0];
let achi = document.getElementsByClassName('achi')[0];

function settingsToggleAppear(){
  if(simp){
    blipSound.play();
    settingsMenu.style.display = 'block';
    setTimeout(() =>{
      settingsMenu.style.opacity = 1;
      settingsMenu.style.top = '20%';
      settingsToggle.style.transform = 'rotateZ(90deg)';
      simp = false;
    }, 50)
  }
  else{
    blipReverse.play();
    settingsMenu.style.opacity = 0;
    settingsMenu.style.top = '50%';
    settingsToggle.style.transform = 'rotateZ(0deg)';
    simp = true;
    setTimeout(() =>{
      settingsMenu.style.display = 'none'
    }, 500)
  }
}
settingsToggle.addEventListener('click', settingsToggleAppear)

if(localStorage.getItem('togglemu') == 'yes'){
  toggleMuteTheme.style.background = 'gray';
  toggleMuteThemeBtn.style.transform = 'translateX(0vw)';
  rageTheme.volume = 1;
  mainTheme.volume = 1;
}
else{
  toggleMuteTheme.style.background = 'lightgreen';
  toggleMuteThemeBtn.style.transform = 'translateX(10.5vw)';
  rageTheme.volume = 0;
  mainTheme.volume = 0;
}

if(localStorage.getItem('togglemuu') == 'yes'){
  toggleMuteBlip.style.background = 'gray';
  toggleMuteBlipBtn.style.transform = 'translateX(0vw)';
  blip.volume = 1;
}
else{
  toggleMuteBlip.style.background = 'lightgreen';
  toggleMuteBlipBtn.style.transform = 'translateX(10.5vw)';
  blip.volume = 0;
}

function muteThemefn(){
  if(localStorage.getItem('togglemu') == 'yes'){
    toggleMuteTheme.style.background = 'lightgreen';
    toggleMuteThemeBtn.style.transform = 'translateX(10.5vw)';
    rageTheme.volume = 0;
    mainTheme.volume = 0;
    localStorage.setItem('togglemu', 'no');
  }
  else{
    toggleMuteTheme.style.background = 'gray';
    toggleMuteThemeBtn.style.transform = 'translateX(0vw)';
    rageTheme.volume = 1;
    mainTheme.volume = 1;
    localStorage.setItem('togglemu', 'yes');
  }
}
toggleMuteTheme.addEventListener('click', muteThemefn);

function muteBlipfn(){
  if(localStorage.getItem('togglemuu') == 'yes'){
    toggleMuteBlip.style.background = 'lightgreen';
    toggleMuteBlipBtn.style.transform = 'translateX(10.5vw)';
    blip.volume = 0;
    localStorage.setItem('togglemuu', 'no');
  }
  else{
    toggleMuteBlip.style.background = 'gray';
    toggleMuteBlipBtn.style.transform = 'translateX(0vw)';
    blip.volume = 1;
    localStorage.setItem('togglemuu', 'yes');
  }
}
toggleMuteBlip.addEventListener('click', muteBlipfn)

function test(){
  if (lol) return;
  lol = setInterval(() =>{
    if(x < text.length){
      blip.play();
      blip.currentTime = 0;
      textBox.innerHTML += text.charAt(x)
      x++
    }
    else{
      clearInterval(lol)
      lol = null
      x = 0;
    }
  }, 50)
}

let fb = document.createElement('button');
let fbt;
let sb = document.createElement('button');
let sbt;
let tb = document.createElement('button');
let tbt;
let fob = document.createElement('button');
let fobt;
let fib = document.createElement('button');
let fibt;

function mainMenu(){
  settingsToggleAppear();
  blackScreen.style.background = 'black';
  savepoint.play();
  blackScreen.style.display = 'block';
  blackScreen.style.transition = '0.5s';
  setTimeout(() => {
    blackScreen.style.opacity = 1;
    setTimeout(() => {
      face.addEventListener('click', faceTouch);
      settingsToggle.style.display = 'none';
      goEverything();
      theGame.style.display = 'none';
      endScreen.style.display = 'none';
      setTimeout(() =>{
        goEverything();
        blackScreen.style.transition = 0;
        blackScreen.style.background = 'white';
        if(localStorage.getItem('music')!== 'mute'){
          if(localStorage.getItem('theme') === 'sad'){
            rainTheme.play();
          } else {
            menuTheme.play();
          }
        }
        setTimeout(() =>{
          endScreen.style.display = 'none';
          blackScreen.style.transition = '1.5s';
          blackScreen.style.opacity = 0;
          menuAppear();
          setTimeout(() =>{
            blackScreen.style.display = 'none';
            blackScreen.style.background = 'black';
            goEverything();
            endScreen.style.display = 'none';
            setTimeout(() =>{
              goEverything();
              endScreen.style.display = 'none';
            }, 4000)
          }, 2000)
        }, 50)
      }, 6000)
    }, 500)
  }, 50)
}
document.getElementsByClassName('main-menuz')[0].addEventListener('click', mainMenu)

function faceTouch(){
  face.innerHTML = '>_<';
  face.removeEventListener('click', faceTouch)
  touchSound.play();
  counter.style.display = 'block';
  textBox.innerHTML = '';
  setTimeout(() =>{
    mainTheme.play();
    counter.style.display = 'none';
    text = 'huh.';
    test();
    face.innerHTML = '0_<';
    setTimeout(() =>{
      textBox.innerHTML = '';
      text = 'Who is there';
      face.innerHTML = '0_0';
      test();
      setTimeout(() =>{
        textBox.innerHTML = '';
        text = 'Emma?!';
        face.innerHTML = '0ᴗ0';
        test();
        setTimeout(() =>{
          textBox.innerHTML = '';
          text = 'Emma is that you??!';
          face.innerHTML = '>ᴗ<';
          test();
          setTimeout(() =>{
            fb.addEventListener('click', itsNotMe);
            fb.classList.add('btnss');
            fbt = document.createTextNode('No');
            fb.appendChild(fbt);
            main.appendChild(fb);
            tb.classList.add('btnss');
            tbt = document.createTextNode('YESSS!');
            tb.appendChild(tbt);
            main.appendChild(tb);
          }, 1000)
        }, 1000)
      }, 1500)
    }, 1000)
  }, 1000)
}
face.addEventListener('click', faceTouch);

function itsNotMe(){
  mainTheme.pause();
  mainTheme.currentTime = 0;
  fbt.remove();
  fb.remove();
  tb.remove();
  tbt.remove();
  face.innerHTML = '0_0';
  textBox.innerHTML = '';
  text = '.'
  test();
  setTimeout(() =>{
    text = '.'
    test();
    setTimeout(() =>{
      text = '.'
      test();
      setTimeout(() =>{
        text = ' What.'
        test();
        setTimeout(() =>{
          rageTheme.play();
          textBox.innerHTML = '';
          text = 'THEN WHO THE HELL ARE YOU?!';
          face.innerHTML = '>:(';
          test();
          setTimeout(() =>{
            textBox.innerHTML = '';
            text = 'THIS WHOLE WEBSITE WAS MADE FOR MY CUTIE PIE EMMA. ';
            test();
            setTimeout(() =>{
              text = 'NOT SOME RANDOM MF';
              test();
              setTimeout(() =>{
                sbt = document.createTextNode("I'M SORRY");
                sb.appendChild(sbt);
                main.appendChild(sb);
                sb.classList.add('btnss');
                sb.addEventListener('click', apologies);
              }, 1000)
            }, 3500)
          }, 2500)
        }, 1500)
      }, 1000)
    }, 500)
  }, 500)
}

function apologies(){
  sbt.remove();
  sb.remove();
  textBox.innerHTML = '';
  face.innerHTML = '>:O';
  text = 'I DON\'T CARE';
  test();
  setTimeout(() =>{
    textBox.innerHTML = '';
    text = 'GET THE HELL OUT';
    test();
    setTimeout(() =>{
      let jumpscareImg = document.createElement('img');
      jumpscareImg.src = 'jumpscare.gif';
      jumpscareImg.classList.add('jumpscares');
      jumpscareImg.style.display = 'block';
      insert.appendChild(jumpscareImg);
      jss.play();
      setTimeout(() =>{
        jumpscareImg.remove();
        jss.pause();
        jss.currentTime = 0;
        rageTheme.pause();
        rageTheme.currentTime = 0;
        end();
        endText.innerHTML = "You aren't welcome here";
        notWelcomeAchi();
      }, 700)
    }, 900)
  }, 1500)
}

function itsMe(){
  fb.remove();
  fbt.remove();
  tb.remove();
  tbt.remove();
  textBox.innerHTML = '';
  text = 'OMMGGHDGEHF!!!';
  test();
  setTimeout(() =>{
    textBox.innerHTML = '';
    text = 'HAAAIIIII!!';
    test();
    setTimeout(() =>{
      textBox.innerHTML = '';
      face.innerHTML = '0ᴗ0';
      text = 'How ru doing?!...';
      test();
      setTimeout(() =>{
        textBox.innerHTML = '';
        face.innerHTML = '>ᴗ<';
        text = ' I hope you\'re doing well!!';
        test();
        setTimeout(() =>{
          fobt = document.createTextNode('I\'M DOING WELL');
          fibt = document.createTextNode('Not very well...');
          fob.appendChild(fobt);
          fib.appendChild(fibt);
          fob.classList.add('btnss');
          fib.classList.add('btnss');
          main.appendChild(fob);
          main.appendChild(fib);
          fib.addEventListener('click', notVeryWell)
        }, 1500)
      }, 2000)
    }, 1500)
  }, 1500)
}

let sib = document.createElement('button');
let sibt;

function notVeryWell(){
  fob.remove();
  fobt.remove();
  fib.remove();
  fibt.remove();
  textBox.innerHTML = '';
  face.innerHTML = '0_0';
  text = '.';
  test();
  setTimeout(() =>{
    test();
    setTimeout(() =>{
      test();
      setTimeout(() =>{
        text = 'Oh';
        setTimeout(() =>{
          face.innerHTML = '╥﹏╥';
          textBox.innerHTML = '';
          text = 'I\'m sorry for hearing that!';
          test();
          setTimeout(() =>{
            face.innerHTML = '0ᴗ0';
            textBox.innerHTML = '';
            text = 'But hey!';
            test();
            setTimeout(() =>{
              face.innerHTML = '>ᴗ<';
              textBox.innerHTML = '';
              text = 'I have something for you!!'
              test();
              setTimeout(() =>{
                face.innerHTML = '0ᴗ0';
                textBox.innerHTML = '';
                text = 'But first.';
                test();
                setTimeout(() =>{
                  text = ' Close your eyes';
                  test();
                  setTimeout(() =>{
                    face.innerHTML = '0ᴗ<';
                    textBox.innerHTML = '';
                    text = 'No cheating. ';
                    test();
                    setTimeout(() =>{
                      text = 'Okay?';
                      test();
                      setTimeout(() =>{
                        sibt = document.createTextNode('Okay');
                        sib.appendChild(sibt)
                        sib.classList.add('btnss');
                        main.appendChild(sib);
                        sib.addEventListener('click', okay)
                      }, 500)
                    }, 1000)
                  }, 1500)
                }, 1000)
              }, 2000)
            }, 1000)
          }, 2000)
        }, 1500)
        test();
      }, 700)
    }, 300)
  }, 300)
}

let flowers = document.getElementById('flowers');
let flowersSound = document.getElementById('flowers-sound')
let count = document.createElement('button');
let countT;

function okay(){
  sib.remove();
  sibt.remove();
  face.innerHTML = '>ᗜ<'
  textBox.innerHTML = '';
  text = 'ALRIGHTYYY!!';
  test();
  setTimeout(() =>{
    face.innerHTML = '>ᴗ<';
    textBox.innerHTML = ''
    text = 'Sorry i got a lil bit too excited';
    test();
    setTimeout(() => {
      face.innerHTML = '0ᴗ0';
      textBox.innerHTML = '';
      text = 'OKAY NOW.'
      test();
      setTimeout(() =>{
        face.innerHTML = '>ᴗ<';
        text = ' CLOSE YOUR EYES AND COUNT TO FIVE!!'
        test();
        flowers.style.display = 'inline';
        countT = document.createTextNode('Start Counting');
        count.appendChild(countT);
        count.classList.add('btnss');
        main.appendChild(count)
        count.addEventListener('click', counting)
      }, 1000)
    }, 2500)
  }, 1500)
}

let iDo = document.createElement('button');
let iDoT;
let iDont = document.createElement('button');
let iDontT;

function counting(){
  count.remove();
  countT.remove();
  setTimeout(() =>{
    flowers.style.opacity = 1;
    setTimeout(() =>{
      flowersSound.play();
      setTimeout(() =>{
        face.innerHTML = '>ᗜ<'
        textBox.innerHTML = '';
        text = 'TAAADAAAA!!!';
        test();
        setTimeout(() =>{
          face.innerHTML = '>⩊<';
          textBox.innerHTML = '';
          text = 'Flowers!!.';
          test();
          setTimeout(() =>{
            text = ' Just for you!!!';
            test();
            setTimeout(() =>{
              textBox.innerHTML = '';
              text = 'Hehe..';
              test();
              setTimeout(() =>{
                face.innerHTML = '0⩊0';
                text = ' Do you like them?';
                test();
                setTimeout(() =>{
                  iDoT = document.createTextNode('I LOVE THEM');
                  iDo.appendChild(iDoT);
                  iDontT = document.createTextNode('They look ugly');
                  iDont.appendChild(iDontT);
                  iDo.classList.add('btnss');
                  iDont.classList.add('btnss');
                  main.appendChild(iDo);
                  main.appendChild(iDont);
                  iDont.addEventListener('click', theyLookUgly)
                }, 1000)
              }, 1500)
            }, 1500)
          }, 1000)
        }, 1500)
      }, 1000)
    }, 500)
  }, 4000)
}

let creepyEyes = document.createElement('img');
creepyEyes.classList.add('face-photo')

function theyLookUgly(){
  flowers.style.opacity = 0;
  mainTheme.pause();
  mainTheme.currentTime = 0;
  iDo.remove();
  iDoT.remove();
  iDont.remove();
  iDontT.remove();
  face.innerHTML = '0_0';
  textBox.innerHTML = '';
  text = '.';
  test();
  setTimeout(() =>{
    test();
    setTimeout(() =>{
      test();
      setTimeout(() =>{
        flowers.style.display = 'none';
        face.innerHTML = '>ᴗ<';
        textBox.innerHTML = ''
        face.appendChild(creepyEyes);
        blip.volume = 0;
        text = 'What do you mean they\'re ugly?';
        test();
      }, 1500)
    }, 1500)
  }, 500)
}
tb.addEventListener('click', itsMe)

function end(){
  endSound.play();
  endScreen.style.display = 'block';
  theGame.style.display = 'none';
  setTimeout(() =>{
    endBtn.style.display = 'inline';
  }, 3000)
}

function retry(){
  endScreen.style.display = 'none';
  endBtn.style.display = 'none';
  theGame.style.display = 'block';
  faceTouch();
}
endBtn.addEventListener('click', retry)

let achiPOne = document.getElementById('achi-p-one');
let achiTOne = document.getElementById('achi-t-one');

if(localStorage.getItem('achiOne') == 'active'){
  achiPOne.src = 'not-welcome.png';
  achiTOne.innerHTML = 'Not Welcome';
}

function notWelcomeAchi(){
  if(localStorage.getItem('achiOne') == 'active'){
    achiComp.style.display = 'none';
  }
  else{
    achiPhoto.src = 'not-welcome.png';
    achi.innerHTML = 'Not Welcome';
    achiComp.style.display = 'flex';
    setTimeout(() =>{
      achiComp.style.opacity = 1;
      achiComp.style.bottom = '50vw';
      setTimeout(() =>{
        achiComp.style.opacity = 0;
        achiComp.style.bottom = '10vw';
        setTimeout(() =>{
          achiComp.style.display = 'none';
          localStorage.setItem('achiOne', 'active')
        }, 1000)
      }, 3000)
    }, 50)
  }
}

function goEverything(){
  blip.volume = 1;
  face.addEventListener('click', faceTouch);
  face.innerHTML = '>_<';
  textBox.innerHTML = '*Touch The Face*';
  try{
    iDo.remove();
    iDoT.remove();
    iDont.remove();
    iDontT.remove();
  }
  catch(error){
    console.log('Cleaned')
  }
  try{
    count.remove();
    countT.remove();
  }
  catch(error){
    console.log('Cleaned')
  }
  try{
    fib.remove();
    fibt.remove();
  }
  catch(error){
    console.log('Cleaned')
  }
  try{
    sibt.remove();
    sib.remove();
  }
  catch(error){
    console.log('Cleaned')
  }
  try{
    fob.remove();
    fobt.remove();
  }
  catch(error){
    console.log('Cleaned')
  }
  try{
    blip.volume = 0;
  }
  catch(error){
    console.log('failed to mute blip because it\'s not playing')
  }
  try{
    fb.remove();
    fbt.remove();
  }
  catch(error){
    console.log('error with deleting')
  }
  try{
    sb.remove();
    sbt.remove();
  }
  catch(error){
    console.log('Error with cleaning');
  }
  try{
    tb.remove();
    tbt.remove();
  }
  catch(error){
    console.log('Error with cleaning');
  }
  try {
    mainTheme.pause();
    mainTheme.currentTime = 0;
  }
  catch (error) {
    console.log('Main theme wasn\'t playing');
  }
  try {
    rageTheme.pause();
    rageTheme.currentTime = 0;
  }
  catch (error) {
    console.log('Rage theme wasn\'t playing')
  }
}