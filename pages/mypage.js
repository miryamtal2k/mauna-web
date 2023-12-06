import React, { useEffect, useState, useRef } from 'react';
import '../styles/global.css';

const MyPage = () => {

  const [key, setKey] = useState(Date.now());
  const textRef = useRef(null);
  {/*const scrollToSection = (nomBouton, nomSection) => {
    console.log("Bouton cliqué:", nomBouton); // Affiche le nom du bouton cliqué
    const section = document.getElementById(nomSection);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log("Section non trouvée pour l'ID:", nomSection);
    }
  };*/}

  const smoothScrollTo = (element, duration) => {
    const headerHeight = 0; // Hauteur de l'en-tête, ajustez selon votre mise en page
    const targetPosition = element.getBoundingClientRect().top - headerHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition;
    let startTime = null;
  
    const animation = currentTime => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
  
    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };
  
    requestAnimationFrame(animation);
  };
  
  const scrollToSection = (nomBouton, nomSection) => {
    console.log("Bouton cliqué:", nomBouton);
    const section = document.getElementById(nomSection);
    if (section) {
      smoothScrollTo(section, 1000); // 1000ms = 1 seconde pour le défilement
    }
  };
  
  
  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          // L'élément est visible
          setKey(Date.now()); // Redémarre l'animation
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    return (
      <div className="content-container">
        <div className='header-container'>
          <div className="logo-container">
            <img src="/logo-mauna.svg" alt="logo Mauna" className="logo-mauna" />
            <span className="text-mauna">MAUNA</span>
          </div>
          <div className='menu-container'>
            <p className='menu-text'>Solution</p>
            <p className='menu-text'>Product</p>
            <p className='menu-text'>R&D</p>
            <p className='menu-text'>Become beta-testeur</p>
          </div>
        </div>
        <div className="Background">
          <div className='iceberg-container'>
            <img src="iceberg.svg" alt="Iceberg" className="icebergImage" />
            <img src="petit iceberg-g.svg" alt="Petit Iceberg G" className="petitIcebergG" />
            <img src="petit iceberg-d.svg" alt="Petit Iceberg D" className="petitIcebergD" />
            <img src="/carte1.svg" alt="Carte 1" className="carte1" />
            <img src="/carte2.svg" alt="Carte 2" className="carte2" />
            <img src="/carte3.svg" alt="Carte 3" className="carte3" />
            <img src="/carte4.svg" alt="Carte 4" className="carte4" />
            <img src="/carte5.svg" alt="Carte 5" className="carte5" />
            <img src="/carte6.svg" alt="Carte 6" className="carte6" />
            <img src="/carte7.svg" alt="Carte 7" className="carte7" />
            <img src="/carte8.svg" alt="Carte 8" className="carte8" />
            <img src="/carte9.svg" alt="Carte 9" className="carte9" />
            <img src="/carte10.svg" alt="Carte 10" className="carte10" />
            <img src="/carte11.svg" alt="Carte 11" className="carte11" />
            <img src="/carte12.svg" alt="Carte 12" className="carte12" />
            <img src="/carte13.svg" alt="Carte 13" className="carte13" />
            <img src="/carte14.svg" alt="Carte 14" className="carte14" />
            <div className="typewriter-container" style={{ top: '732px', right: '56px' }}>
              <div className="typewriter-text" id="text1">UNLOCK</div>
            </div>
            <div className="typewriter-container" style={{ top: '792px', right: '56px' }}>
              <div className="typewriter-text" id="text2">YOUR HIDDEN</div>
            </div>
            <div className="typewriter-container" style={{ top: '852px', right: '56px' }}>
              <div className="typewriter-text" id="text3">POTENTIAL.</div>
            </div>
          </div>
        <button className="get-started-btn" onClick={() => scrollToSection("get-started-btn","MaunaSolution-container")}>
          Get Started
        </button>
        <div className='secondSection-container'>
          <div className='thematics-container'>
            <div className="MaunaSolution-container" id='MaunaSolution-container'>
              <div className='TroisLogosAndTexts-container'>
                <div className='LogoAndText-container'>
                  <div className='LogoAndTitre-container'>
                    <img src="/Centralize.svg" alt="logo Centralize" className="logo"/>
                    <p className='solution-title'>ONE PLACE</p>
                  </div>
                  <div className='solution-text-container'>
                    <p className='solution-text'>Mauna gathers in one single place multiple factors relevant to the athlete's performance:</p>
                    <ul className='solution-text-list'>
                      <li>Nutrition</li>
                      <li>Sleep</li>
                      <li>Sport Activity</li>
                      <li>Health</li>
                    </ul>
                  </div>
                </div>
                <div className='LogoAndText-container'>
                  <div className='LogoAndTitre-container'>
                    <img src="/AI.svg" alt="logo AI" className="logo"/>
                    <p className='solution-title'>ADVANCED AI</p>
                  </div>
                  <div className='solution-text-container'>
                    <p className='solution-text'>Mauna's algorithms derive scores from these factors to assess the following :</p>
                    <ul className='solution-text-list'>
                      <li>The athlete's performance status</li>
                      <li>The athlete's risk of injury</li>
                    </ul>
                    <p className='solution-text'>The athlete can then understand which factors exactly are impacting his scores.</p>
                  </div>
                </div>
                <div className='LogoAndText-container'>
                  <div className='LogoAndTitre-container'>
                    <img src="/Test.svg" alt="logo Test" className="logo"/>
                    <p className='solution-title'>PHYSIO TESTS</p>
                  </div>
                  <div className='solution-text-container'>
                    <div className='solution-text'>
                      <p>Mauna offers the athlete a great understanding of the complementary tests he can do to access deeper information on his physiology.</p>
                      <p>Mauna also provides the athlete with the possibility to do them easily, taking into account his location and preferred time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="MaunaProduct">
              <div className='title-product-container'>
                <p className='title-product'>Power of software at your fingertips.</p>
              </div>
              <div className='TextAndImage-container'>
                <div className='text-product-container'>
                  <div className='text-product'>
                    <p>Acces MAUNA trhough your smartphone or computer.</p>
                    <p>Get personalized recommendations on optimising sleep duration and dietary changes to the nature of training sessions and alerts about potential injury risks.</p>
                    <p>By utilising MAUNA, athletes and coaches can gain a clear understanding of how the athlete's body operates, benefit from simplified scientific explanations, and receive direct insights for enhanced decision-making.</p>
                  </div>
                </div>
                <div className='image-product-container'>
                  <img src="/Iphone&Computer.png" alt="Iphone & Computer" className='image-product'/>
                </div>
              </div>
              <div className='devices-container'>
                <div className='title-devices-container'>
                  <p className='title-devices'>Working with multiple devices.</p>
                </div>
                <div className='boxes'>
                  <div className='box'>
                    <img src="/Garmin.svg" alt="Garmin" />
                  </div>
                  <div className='box'>
                    <img src="/Coros.svg" alt="Coros" />
                  </div>
                  <div className='box'>
                    <img src="/Polar.svg" alt="Polar" />
                  </div>
                  <div className='box'>
                    <img src="/Suunto.svg" alt="Polar" />
                  </div>
                </div>
              </div>
            </div>
            <div className='MaunaDataBase'>
              <div className='currentlyBuilding-container'>
                <p className='titre-buildingDataBase'>Currently building a world unique database...</p>
                <div className='becomeBetaAndSynch-container'>
                  <div className='synchAndNumbers-container'>
                    <img src="/logo-synch.svg" alt="Logo Synch" className="logo-synch"/>
                    <div className='WithAndNumbers-container'>
                      <p className='text-numbers'> With</p>
                      <div className='Numbers-container'>
                        <p className='text-numbers'><b>+150</b> athletes</p>
                        <p className='text-numbers'><span className="extra-bold">+5</span> sports experts</p>
                      </div>
                    </div>
                  </div>
                  <button className="become-beta-btn" onClick={() => scrollToSection("become-beta-btn","register-container")}>
                    Become a beta tester
                  </button>
                  {/*<button className="become-beta-btn">Become a beta tester</button>*/}
                </div>
              </div>
              <div className='become-beta-container' id='become-beta-container'>
                <div className='titre-become-beta-container'>
                  <p className='titre-become-beta'>Become a MAUNA beta-tester.</p>
                </div>
                <div className='triptych-cards-container'>
                  <div className='card-container'>
                    <p className='text-card'>OBJECTIVES</p>
                    <div className='image-container'>
                    <div className="image-text">
                      <ul>
                        <li>Build the database to develop and consolidate our algorithms.</li>
                        <li>Gather and iterate from your feedbacks to release our final app in 2024.</li>
                        <li>Bring endurance sports to the next level.</li>
                        <li>Make you proud to be part of Mauna's community!</li>
                      </ul>
                      </div>
                      <img src="/carteYvan.png" alt="Carte Yvan" className='image-objective'/>
                    </div>
                  </div>
                  <div className='card-container'>
                    <p className='text-card'>IMPLICATIONS</p>
                    <div className='image-container'>
                      <div className="image-text">
                        <ul>
                          <li>Input your data every day (nutrition, activity, sleep and overall scores information)</li>
                          <li>Give us feedbacks on your overall experience.</li>
                        </ul>
                      </div>
                      <img src="/carteSprint.png" alt="Carte Sprint" className='image-objective'/>
                    </div>
                  </div>
                  <div className='card-container'>
                    <p className='text-card'>BENEFITS</p>
                    <div className='image-container'>
                      <div className="image-text">
                        <ul>
                          <li>Gathering your data in one single place.</li>
                          <li>Having frequent personalised reports.</li>
                          <li>Accessing free physiological tests.</li>
                          <li>Participating to sport science's progresses.</li>
                          <li>Being part of Mauna's pioneers.</li>
                        </ul>
                      </div>
                      <img src="/carteNageur.png" alt="Carte Nageur" className='image-objective'/>
                      </div>
                  </div>
                </div>
              </div>
              <div className='btn-container'>
                <button className="become-beta-btn">Get Started</button>
              </div>
            </div>
            <div className='register-container' id='register-container'>
              <p className='title-register-container'>Become a MAUNA beta-tester.</p>
              <div className='NameAndMail-boxes-container' id='NameAndMail-boxes-container'>
                <div className='label-box-container'>
                  <p className='label'>Name</p>
                </div>
                <div className='label-box-container'>
                  <p className='label'>First name</p>
                </div>
                <div className='label-box-container'>
                  <p className='label'>E-mail address</p>
                </div>
              </div>
              <button className="become-beta-btn">Become a beta tester</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  };
  

export default MyPage;
