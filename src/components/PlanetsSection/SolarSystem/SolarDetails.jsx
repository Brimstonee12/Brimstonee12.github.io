import React, {Component} from 'react'
import {Button,Container, Jumbotron, Nav} from 'react-bootstrap'
import '../Planets.css'
import {SolarProps} from '../PlanetsProps'
import Planets from '../Planets'


class SunDetails extends Component {render(){
    return(
      <div>
      <SolarProps
        img_title="https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/07/SolarFull_SeanDoran_2880FullwidthLede-2880x1620.jpg"
        title="Sun"
        content_first= "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is by far the most important source of energy for life on Earth. Its diameter is about 1.39 million kilometers (864,000 miles), or 109 times that of Earth, and its mass is about 330,000 times that of Earth. It accounts for about 99.86% of the total mass of the Solar System. Roughly three quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron.
        The Sun is a G-type main-sequence star (G2V) based on its spectral class. As such, it is informally and not completely accurately referred to as a yellow dwarf (its light is closer to white than yellow). It formed approximately 4.6 billion years ago from the gravitational collapse of matter within a region of a large molecular cloud. Most of this matter gathered in the center, whereas the rest flattened into an orbiting disk that became the Solar System. The central mass became so hot and dense that it eventually initiated nuclear fusion in its core. It is thought that almost all stars form by this process.
        The Sun is roughly middle-aged; it has not changed dramatically for more than four billion[a] years, and will remain fairly stable for more than another five billion years. It currently fuses about 600 million tons of hydrogen into helium every second, converting 4 million tons of matter into energy every second as a result. This energy, which can take between 10,000 and 170,000 years to escape from its core, is the source of the Suns light and heat. In about 5 billion years, when hydrogen fusion in its core has diminished to the point at which the Sun is no longer in hydrostatic equilibrium, its core will undergo a marked increase in density and temperature while its outer layers expand to eventually become a red giant. It is calculated that the Sun will become sufficiently large to engulf the current orbits of Mercury and Venus, and render Earth uninhabitable. After this, it will shed its outer layers and become a dense type of cooling star known as a white dwarf, and no longer produce energy by fusion, but still glow and give off heat from its previous fusion."

        img_center="https://www.abc.net.au/news/image/10572938-3x2-940x627.jpg"

        content_center="Structure and Fusion:

        Core – the innermost 20-25% of the Suns radius, where temperature (energies) and pressure are sufficient for nuclear fusion to occur. Hydrogen fuses into helium (which cannot currently be fused at this point in the Suns life). The fusion process releases energy, and the helium gradually accumulates to form an inner core of helium within the core itself.
        Radiative zone – Convection cannot occur until much nearer the surface of the Sun. Therefore, between about 20-25% of the radius, and 70% of the radius, there is a radiative zone in which energy transfer occurs by means of radiation (photons) rather than by convection.
        Tachocline – the boundary region between the radiative and convective zones.
        Convective zone – Between about 70% of the Suns radius and a point close to the visible surface, the Sun is cool and diffuse enough for convection to occur, and this becomes the primary means of outward heat transfer, similar to weather cells which form in the earths atmosphere.
        Photosphere – the deepest part of the Sun which we can directly observe with visible light. Because the Sun is a gaseous object, it does not have a clearly-defined surface; its visible parts are usually divided into a photosphere and atmosphere.
        Atmosphere – a gaseous halo surrounding the Sun, comprising the chromosphere, solar transition region, corona and heliosphere. These can be seen when the main part of the Sun is hidden, for example, during a solar eclipse."
      />
      </div>
    )}}


class MercuryDetails extends Component {render(){
    return(
      <div>
      <SolarProps
        img_title="https://www.universetoday.com/wp-content/uploads/2010/07/Mercury-as-Never-Seen-Before.jpg"
        title="Mercury"
        content_first="Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 87.97 days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods.
        Like Venus, Mercury orbits the Sun within Earths orbit as an inferior planet, and never exceeds 28° away from the Sun when viewed from Earth. This proximity to the Sun means the planet can only be seen near the western or eastern horizon during the early evening or early morning. At this time it may appear as a bright star-like object, but is often far more difficult to observe than Venus. The planet telescopically displays the complete range of phases, similar to Venus and the Moon, as it moves in its inner orbit relative to Earth, which reoccurs over the so-called synodic period approximately every 116 days.
        Mercury is tidally locked with the Sun in a 3:2 spin-orbit resonance, and rotates in a way that is unique in the Solar System. As seen relative to the fixed stars, it rotates on its axis exactly three times for every two revolutions it makes around the Sun. As seen from the Sun, in a frame of reference that rotates with the orbital motion, it appears to rotate only once every two Mercurian years. An observer on Mercury would therefore see only one day every two Mercurian years.
        Mercurys axis has the smallest tilt of any of the Solar Systems planets (about ​1⁄30 degree). Its orbital eccentricity is the largest of all known planets in the Solar System;[b] at perihelion, Mercurys distance from the Sun is only about two-thirds (or 66%) of its distance at aphelion. Mercurys surface appears heavily cratered and is similar in appearance to the Moons, indicating that it has been geologically inactive for billions of years. Having almost no atmosphere to retain
        heat, it has surface temperatures that vary diurnally more than on any other planet in the Solar System, ranging from 100 K (−173 °C; −280 °F) at night to 700 K (427 °C; 800 °F) during the day across the equatorial regions. The polar regions are constantly below 180 K (−93 °C; −136 °F). The planet has no known natural satellites."

        img_center="https://cdn.cnn.com/cnnnext/dam/assets/120918102846-mercury-messenger-story-top.jpg"
        content_center="Two spacecraft have visited Mercury: Mariner 10 flew by in 1974 and 1975; and MESSENGER, launched in 2004, orbited Mercury over 4,000 times in four years before exhausting its fuel and crashing into the planet's surface on April 30, 2015.[18][19][20] The BepiColombo spacecraft is planned to arrive at Mercury in 2025.
        Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core"
      />
      </div>
      )}}

      class VenusDetails extends Component {render(){
          return(
            <div>
            <SolarProps
              img_title="https://www.universetoday.com/wp-content/uploads/2017/08/venus-e1502994496509.jpg"
              title="Venus"
              content_first="Venus is the second planet from the Sun, orbiting it every 224.7 Earth days.It has the longest rotation period (243 Earth days) of any planet in the Solar System and rotates in the opposite direction to most other planets (meaning the Sun rises in the west and sets in the east).[14] It does not have any natural satellites. It is named after the Roman goddess of love and beauty. It is the second-brightest natural object in the night sky after the Moon, reaching an apparent magnitude of −4.6 – bright enough to cast shadows at night and, rarely, visible to the naked eye in broad daylight.[15][16] Orbiting within Earth's orbit, Venus is an inferior planet and never appears to venture far from the Sun; its maximum angular distance from the Sun (elongation) is 47.8°.
              Venus is a terrestrial planet and is sometimes called Earths sister planet because of their similar size, mass, proximity to the Sun, and bulk composition. It is radically different from Earth in other respects. It has the densest atmosphere of the four terrestrial planets, consisting of more than 96% carbon dioxide. The atmospheric pressure at the planets surface is 92 times that of Earth, or roughly the pressure found 900 m (3,000 ft) underwater on Earth. Venus is by far the hottest planet in the Solar System, with a mean surface temperature of 735 K (462 °C; 863 °F), even though Mercury is closer to the Sun. Venus is shrouded by an opaque layer of highly reflective clouds of sulfuric acid, preventing its surface from being seen from space in visible light. It may have had water oceans in the past,but these would have vaporized as the temperature rose due to a runaway greenhouse effect. The water has probably photodissociated, and the free hydrogen has been swept into interplanetary space by the solar wind because of the lack of a planetary magnetic field. Venus surface is a dry desertscape interspersed with slab-like rocks and is periodically resurfaced by volcanism."

              img_center="https://cdn.arstechnica.net/wp-content/uploads/2017/02/venus1-760x380.jpg"
              content_center="As one of the brightest objects in the sky, Venus has been a major fixture in human culture for as long as records have existed. It has been made sacred to gods of many cultures, and has been a prime inspiration for writers and poets as the morning star and evening star. Venus was the first planet to have its motions plotted across the sky, as early as the second millennium BC.
              As the planet with the closest approach to Earth, Venus has been a prime target for early interplanetary exploration. It was the first planet beyond Earth visited by a spacecraft (Mariner 2 in 1962), and the first to be successfully landed on (by Venera 7 in 1970). Venus thick clouds render observation of its surface impossible in visible light, and the first detailed maps did not emerge until the arrival of the Magellan orbiter in 1991. Plans have been proposed for rovers or more complex missions, but they are hindered by Venus hostile surface conditions."
            />
            </div>
            )}}


        class EarthDetails extends Component {render(){
          return(
          <div>
            <SolarProps
              img_title="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
              title="Earth"
              content_first="Earth is the third planet from the Sun, and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago. Earths gravity interacts with other objects in space, especially the Sun and the Moon, Earths only natural satellite. Earth orbits around the Sun in 365.26 days, a period known as an Earth year. During this time, Earth rotates about its axis about 366.26 times.[n 5]
              Earths axis of rotation is tilted with respect to its orbital plane, producing seasons on Earth. The gravitational interaction between Earth and the Moon causes tides, stabilizes Earths orientation on its axis, and gradually slows its rotation. Earth is the densest planet in the Solar System and the largest and most massive of the four terrestrial planets.
              Earths lithosphere is divided into several rigid tectonic plates that migrate across the surface over many millions of years. About 71% of Earths surface is covered with water, mostly by oceans. The remaining 29% is land consisting of continents and islands that together contain many lakes, rivers and other sources of water that contribute to the hydrosphere. The majority of Earths polar regions are covered in ice, including the Antarctic ice sheet and the sea ice of the Arctic ice pack. Earths interior remains active with a solid iron inner core, a liquid outer core that generates the Earths magnetic field, and a convecting mantle that drives plate tectonics."

              img_center="https://thenypost.files.wordpress.com/2018/07/diamonds-found-earths-core.jpg?quality=90&strip=all&w=618&h=410&crop=1"
              content_center="Within the first billion years of Earths history, life appeared in the oceans and began to affect the Earths atmosphere and surface, leading to the proliferation of aerobic and anaerobic organisms. Some geological evidence indicates that life may have arisen as early as 4.1 billion years ago. Since then, the combination of Earths distance from the Sun, physical properties, and geological history have allowed life to evolve and thrive. In the history of the Earth, biodiversity has gone through long periods of expansion, occasionally punctuated by mass extinction events. Over 99% of all species that ever lived on Earth are extinct. Estimates of the number of species on Earth today vary widely; most species have not been described. Over 7.6 billion humans live on Earth and depend on its biosphere and natural resources for their survival. Humans have developed diverse societies and cultures; politically, the world has about 200 sovereign states."
            />
            </div>
            )}}


            class MarsDetails extends Component {render(){
              return(
              <div>
                <SolarProps
                  img_title="https://i.ytimg.com/vi/FHOQdiDmpxE/maxresdefault.jpg"
                  title="Mars"
                  content_first="Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war, and is often referred to as the Red Planet because the iron oxide prevalent on its surface gives it a reddish appearance that is distinctive among the astronomical bodies visible to the naked eye. Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth.
                  The days and seasons are likewise comparable to those of Earth, because the rotational period as well as the tilt of the rotational axis relative to the ecliptic plane are very similar. Mars is the site of Olympus Mons, the largest volcano and second-highest known mountain in the Solar System, and of Valles Marineris, one of the largest canyons in the Solar System. The smooth Borealis basin in the northern hemisphere covers 40% of the planet and may be a giant impact feature. Mars has two moons, Phobos and Deimos, which are small and irregularly shaped. These may be captured asteroids, similar to 5261 Eureka, a Mars trojan."
                  img_center="https://static.epodreczniki.pl/portal/f/res-minimized/RxPFS4mHcW1Om/3/960/U1ig9uEyRwrWh77C9ko8PV6PtcLHBg0H.jpg"
                  content_center="There are ongoing investigations assessing the past habitability potential of Mars, as well as the possibility of extant life. Future astrobiology missions are planned, including the Mars 2020 and ExoMars rovers. Liquid water cannot exist on the surface of Mars due to low atmospheric pressure, which is less than 1% of the Earths, except at the lowest elevations for short periods.The two polar ice caps appear to be made largely of water. The volume of water ice in the south polar ice cap, if melted, would be sufficient to cover the entire planetary surface to a depth of 11 meters (36 ft). In November 2016, NASA reported finding a large amount of underground ice in the Utopia Planitia region of Mars. The volume of water detected has been estimated to be equivalent to the volume of water in Lake Superior.
                  Mars can easily be seen from Earth with the naked eye, as can its reddish coloring. Its apparent magnitude reaches −2.94, which is surpassed only by Jupiter, Venus, the Moon, and the Sun. Optical ground-based telescopes are typically limited to resolving features about 300 kilometers (190 mi) across when Earth and Mars are closest because of Earths atmosphere."
                />
                </div>
                )}}


                  class JupiterDetails extends Component {render(){
                    return(
                    <div>
                      <SolarProps
                        img_title="https://thumbs-prod.si-cdn.com/7vPVZl0jYdYIypjcn__oFtJ_eQw=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/79/c9/79c978d0-ecfa-4e8e-9955-c66ce1b2a35e/pia02873-16.jpg"
                        title="Jupiter"
                        content_first="Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a giant planet with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter and Saturn are gas giants; the other two giant planets, Uranus and Neptune, are ice giants. Jupiter has been known to astronomers since antiquity. It is named after the Roman god Jupiter. When viewed from Earth, Jupiter can reach an apparent magnitude of −2.94, bright enough for its reflected light to cast shadows, and making it on average the third-brightest natural object in the night sky after the Moon and Venus.
                        Jupiter is primarily composed of hydrogen with a quarter of its mass being helium, though helium comprises only about a tenth of the number of molecules. It may also have a rocky core of heavier elements, but like the other giant planets, Jupiter lacks a well-defined solid surface. Because of its rapid rotation, the planets shape is that of an oblate spheroid (it has a slight but noticeable bulge around the equator). The outer atmosphere is visibly segregated into several bands at different latitudes, resulting in turbulence and storms along their interacting boundaries. A prominent result is the Great Red Spot, a giant storm that is known to have existed since at least the 17th century when it was first seen by telescope. Surrounding Jupiter is a faint planetary ring system and a powerful magnetosphere. Jupiter has 79 known moons, including the four large Galilean moons discovered by Galileo Galilei in 1610. Ganymede, the largest of these, has a diameter greater than that of the planet Mercury."
                        img_center="http://www.geek.com/wp-content/uploads/2014/07/jupiter-3.jpg"
                        content_center="Jupiter has been explored on several occasions by robotic spacecraft, most notably during the early Pioneer and Voyager flyby missions and later by the Galileo orbiter. In late February 2007, Jupiter was visited by the New Horizons probe, which used Jupiter's gravity to increase its speed and bend its trajectory en route to Pluto. The latest probe to visit the planet is Juno, which entered into orbit around Jupiter on July 4, 2016.[22][23] Future targets for exploration in the Jupiter system include the probable ice-covered liquid ocean of its moon Europa."
                      />
                      </div>
                      )}}

                      class SaturnDetails extends Component {render(){
                        return(
                        <div>
                          <SolarProps
                            img_title="https://vignette.wikia.nocookie.net/generator/images/6/61/Saturn.jpg/revision/latest?cb=20170124185142&path-prefix=pl"
                            title="Saturn"
                            content_first="Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. It has only one-eighth the average density of Earth, but with its larger volume Saturn is over 95 times more massive. Saturn is named after the Roman god of agriculture; its astronomical symbol (♄) represents the god's sickle.
                            Saturns interior is probably composed of a core of iron–nickel and rock (silicon and oxygen compounds). This core is surrounded by a deep layer of metallic hydrogen, an intermediate layer of liquid hydrogen and liquid helium, and finally a gaseous outer layer. Saturn has a pale yellow hue due to ammonia crystals in its upper atmosphere. Electrical current within the metallic hydrogen layer is thought to give rise to Saturns planetary magnetic field, which is weaker than Earths, but has a magnetic moment 580 times that of Earth due to Saturns larger size. Saturns magnetic field strength is around one-twentieth of Jupiters. The outer atmosphere is generally bland and lacking in contrast, although long-lived features can appear. Wind speeds on Saturn can reach 1,800 km/h (1,100 mph; 500 m/s), higher than on Jupiter, but not as high as those on Neptune. In January 2019, astronomers reported that a day on the planet Saturn has been determined to be  10h 33m 38s + 1m 52s  − 1m 19s , based on studies of the planets C Ring."
                            img_center="http://cdn.sci-news.com/images/enlarge6/image_7042e-Saturn-Ring-Moons.jpg"
                            content_center="The planets most famous feature is its prominent ring system that is composed mostly of ice particles, with a smaller amount of rocky debris and dust. At least 62 moons are known to orbit Saturn, of which 53 are officially named. This does not include the hundreds of moonlets in the rings. Titan, Saturn's largest moon, and the second-largest in the Solar System, is larger than the planet Mercury, although less massive, and is the only moon in the Solar System to have a substantial atmosphere."
                          />
                          </div>
                          )}}

                          class UranusDetails extends Component {render(){
                            return(
                            <div>
                              <SolarProps
                                img_title="https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fblogs-images.forbes.com%2Fstartswithabang%2Ffiles%2F2019%2F01%2Furanus-1200x800.jpg"
                                title="Uranus"
                                content_first="Uranus (from the Latin name Ūranus for the Greek god Οὐρανός) is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as ice giants to distinguish them from the gas giants. Uranus' atmosphere is similar to Jupiters and Saturn's in its primary composition of hydrogen and helium, but it contains more ices such as water, ammonia, and methane, along with traces of other hydrocarbons. It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds. The interior of Uranus is mainly composed of ices and rock."
                                img_center="https://docplayer.me/docs-images/92/110644185/images/20-0.jpg"
                                content_center="Like the other giant planets, Uranus has a ring system, a magnetosphere, and numerous moons. The Uranian system has a unique configuration because its axis of rotation is tilted sideways, nearly into the plane of its solar orbit. Its north and south poles, therefore, lie where most other planets have their equators. In 1986, images from Voyager 2 showed Uranus as an almost featureless planet in visible light, without the cloud bands or storms associated with the other giant planets. Observations from Earth have shown seasonal change and increased weather activity as Uranus approached its equinox in 2007. Wind speeds can reach 250 metres per second (900 km/h; 560 mph).
                                Uranus is the only planet whose name is derived directly from a figure from Greek mythology, from the Latinised version of the Greek god of the sky Ouranos."
                              />
                              </div>
                              )}}

                              class NeptuneDetails extends Component {render(){
                                return(
                                <div>
                                  <SolarProps
                                    img_title="https://www.universetoday.com/wp-content/uploads/2011/07/HubbleNeptune.jpg"
                                    title="Neptune"
                                    content_first="Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth, slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. Neptune orbits the Sun once every 164.8 years at an average distance of 30.1 AU (4.5 billion km). It is named after the Roman god of the sea and has the astronomical symbol ♆, a stylised version of the god Neptune's trident.
                                    Neptune is not visible to the unaided eye and is the only planet in the Solar System found by mathematical prediction rather than by empirical observation. Unexpected changes in the orbit of Uranus led Alexis Bouvard to deduce that its orbit was subject to gravitational perturbation by an unknown planet. Neptune was subsequently observed with a telescope on 23 September 1846 by Johann Galle within a degree of the position predicted by Urbain Le Verrier. Its largest moon, Triton, was discovered shortly thereafter, though none of the planets remaining known 13 moons were located telescopically until the 20th century. The planets distance from Earth gives it a very small apparent size, making it challenging to study with Earth-based telescopes. Neptune was visited by Voyager 2, when it flew by the planet on 25 August 1989. The advent of the Hubble Space Telescope and large ground-based telescopes with adaptive optics has recently allowed for additional detailed observations from afar."
                                    img_center="https://www.universetoday.com/wp-content/uploads/2008/11/neptune_int-browse.jpg"
                                    content_center="Like Jupiter and Saturn, Neptunes atmosphere is composed primarily of hydrogen and helium, along with traces of hydrocarbons and possibly nitrogen, though it contains a higher proportion of ices such as water, ammonia, and methane. However, similar to Uranus, its interior is primarily composed of ices and rock; Uranus and Neptune are normally considered ice giants to emphasise this distinction. Traces of methane in the outermost regions in part account for the planets blue appearance.
                                    In contrast to the hazy, relatively featureless atmosphere of Uranus, Neptunes atmosphere has active and visible weather patterns. For example, at the time of the Voyager 2 flyby in 1989, the planets southern hemisphere had a Great Dark Spot comparable to the Great Red Spot on Jupiter. These weather patterns are driven by the strongest sustained winds of any planet in the Solar System, with recorded wind speeds as high as 2,100 km/h (580 m/s; 1,300 mph). Because of its great distance from the Sun, Neptunes outer atmosphere is one of the coldest places in the Solar System, with temperatures at its cloud tops approaching 55 K (−218 °C; −361 °F). Temperatures at the planets centre are approximately 5,400 K (5,100 °C; 9,300 °F). Neptune has a faint and fragmented ring system (labelled arcs), which was discovered in 1984, then later confirmed by Voyager 2"
                                  />
                                  </div>
                                  )}}

export  {SunDetails , MercuryDetails , VenusDetails,EarthDetails,MarsDetails,JupiterDetails,SaturnDetails,UranusDetails,NeptuneDetails  }
