import { Component, Inject, OnInit } from '@angular/core';
import { MoveDirection, ClickMode, HoverMode, OutMode } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { PrimeNGConfig } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { canActivate } from '@angular/fire/auth-guard';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portafolio';
  themeSelection: boolean = false;


  ngOnInit(): void {
    this.primengconfig.ripple = true;
}

  constructor(private primengconfig: PrimeNGConfig, public route: ActivatedRoute, public router: Router, @Inject(DOCUMENT) private document: Document){
    let theme = window.localStorage.getItem('theme');
    if(theme){
        this.themeSelection = theme == 'dark' ? true : false;
        this.changeTheme(this.themeSelection);
    }
  }

  changeTheme(state: boolean){
    console.log(state);
    let theme = state ? 'dark' : 'light';
    window.localStorage.setItem('theme', theme);
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    themeLink.href = 'lara-' + theme + '-purple'+'.css';	
} 

  id = "tsparticles";

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";

  /* or the classic JavaScript object */

  particlesOff = {
    "fpsLimit": 60,
    "fullScreen": {
        "enable": true,
        "zIndex": -1
    },
    "particles": {
        "number": {
            // "value": 180,
            "value": 190,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            // "value": "#091a49"
            "value": "#FFFF"

        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.4,
            // "direction": "none",
            "random": true,
            "straight": false,
            // "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": false,
    "background": {
        "color": "#040d19",
        "repeat": "no-repeat",
        "size": "20%"
    }

  }
  particlesOptions = {
    "fpsLimit": 30,
    "fullScreen": {
        "enable": true,
        "zIndex": -1
    },
    "particles": {
        "number": {
            "value": 190,
            // "value": 190,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#5e17eb"
            // "value": "#FFFF"

        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.4,
            // "direction": "none",
            "random": true,
            "straight": false,
            // "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 10,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": false,

};

// particlesOptionsNight = {
//     "fullScreen": {
//         "enable": true,
//         "zIndex": -1
//     },
//     "particles": {
//       "number": {
//         "value": 4,
//         "density": {
//           "enable": true,
//           "value_area": 1000
//         }
//       },
//       "color": {
//         "value": "#5e17eb"
//       },
//       "shape": {
//         "type": "circle",
//         "stroke": {
//           "width": 0,
//           "color": "#000"
//         },
//         "polygon": {
//           "nb_sides": 6
//         },
//         "image": {
//           "src": "img/github.svg",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.3,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 1,
//           "opacity_min": 0.1,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 130,
//         "random": false,
//         "anim": {
//           "enable": true,
//           "speed": 10,
//           "size_min": 40,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": false,
//         "distance": 200,
//         "color": "#ffffff",
//         "opacity": 1,
//         "width": 2
//       },
//       "move": {
//         "enable": true,
//         "speed": 1,
//         "random": false,
//         "straight": false,
//         "bounce": false,
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": "bubble"
//         },
//         "onclick": {
//           "enable": false,
//           "mode": "bubble"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 400,
//           "line_linked": {
//             "opacity": 3
//           }
//         },
//         "bubble": {
//           "distance": 400,
//           "size": 90,
//           "duration": 2,
//           "opacity": 0.2,
//           "speed": 0.5
//         },
//         "repulse": {
//           "distance": 200,
//           "duration": 0.4
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true
//   }


  particlesLoaded(container: any): void {
    console.log(container);
  }

  async particlesInit(engine: any): Promise<void> {

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }
}
