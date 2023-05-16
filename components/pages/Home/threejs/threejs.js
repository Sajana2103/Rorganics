import { useEffect, useRef, useState, } from 'react'
import * as THREE from 'three'
import Stats from 'three/addons/libs/stats.module.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Water } from 'three/addons/objects/Water.js';
import { Sky } from 'three/addons/objects/Sky.js';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { SplitText } from 'gsap/dist/SplitText';
import { gsap } from 'gsap';
import { setupSplits,setupMenuTextAnimation} from '../../../gsapFuncs';

function Threejs({ container, isLoaded, models, animations }) {
  // console.log(container,isLoaded,models,animations)
  let skyUniforms
  const isDesktop = useRef()
  let stats;
  let camera, scene, renderer;
  let controls, water, sun, mesh;
  let pos = new THREE.Vector3()
  let parameters = {
    elevation: 5,
    azimuth: 180
  };
  const sceneRef = useRef()
  const windowRef = useRef()
  // let stats = new Stats(1)
  // document.body.appendChild(stats.dom)
  let ballMesh
  useEffect(() => {
    if (sceneRef.current && isLoaded) {
      let smoother = ScrollSmoother.get()
      if(smoother){

        smoother.paused(true)
        smoother.scrollTop(0)
      } else{
        window.scrollTo(0,0)
        gsap.to(document.querySelector('body'),{overflowY:'hidden'})
      }

      windowRef.current = window
      isDesktop.current = window.devicePixelRatio < 2
      init()
      animate()
      let threejsSlides = gsap.utils.toArray(".threejs-slide");
      gsap.set('.threejs-content-2',{opacity:0})
        ScrollTrigger.getAll()

      let ctx = gsap.context(() => {
        let sections = gsap.utils.toArray(".stats");
        let testimonials = gsap.utils.toArray(".testimonial");
        let whoImages = gsap.utils.toArray(".who-image");
        let innovativeTween = gsap.timeline({
          scrollTrigger: {
            trigger: '#home-innovative',
            start: 'top top',
            pin: true,
            scrub: 0.1,
            anticipatePin:1,
            //snap: directionalSnap(1 / (sections.length - 1)),
            end:isDesktop.current? "+=2500" : '+=3000',
            // end:'bottom bottom',
            // endTrigger:'#home-who-what',
            // markers:true,id:'threejs'
          }
        })
        if(isDesktop.current){
          innovativeTween.to(camera.position,{x:-26,y:197,z:8},'<')
          innovativeTween.to(pos, { x:10,y: 205,z:10 }, '<')
        } else {
          innovativeTween.to(camera.position,{x:-100,y:197,z:0},'<')
          innovativeTween.to(pos, { x:0,y: 170,z:0 }, '<')
        }
        innovativeTween.to('.threejs-content-1',{yPercent: -100 ,},'<+=50%')
        innovativeTween.to('.threejs-content-1',{opacity:0},'<')
        innovativeTween.to('.threejs-content-2',{opacity:1},'<')
        innovativeTween.to('.threejs-content-2',{yPercent: -100 ,},'<')

        if(isDesktop.current){
          innovativeTween.to(camera.position,{x:20,y:210,z:50},)
          innovativeTween.to(pos, { x:25,y: 205,z:0 }, '<')
        } else {
          innovativeTween.to(camera.position,{x:-20,y:200,z:40})
          innovativeTween.to(pos, { x:0,y: 190,z:0 },'<' )
        }
        let whoWeAreTween = gsap.to('#home-who-what', {
          
          ease: "none", // <-- IMPORTANT!
          scrollTrigger: {
            trigger: "#home-who-what",
            start: 'top top',
            pin: '#sand-dune-bg',
            scrub: 0.1,
            endTrigger:'#home-who-what',
            //snap: directionalSnap(1 / (sections.length - 1)),
            end:  '+=4000px',
            // markers:true,id:'who-images',

          }
        },);
        if(isDesktop.current){
          let whoImagesTween = gsap.to(whoImages, {
            xPercent: -100 * (whoImages.length - 1),
            ease: "none", // <-- IMPORTANT!
            scrollTrigger: {
              trigger: "#home-who-we-are",
              start: 'top top',
              pin:true,
              scrub: 0.1,
              end:  '+=1000px',

              // endTrigger:'#home-who-what',
              //snap: directionalSnap(1 / (sections.length - 1)),
              // end: isDesktop.current ? "+=1000px" : '+=1500px',
              // markers:true,id:'who-images',
  
            }
          },);
        }
        
        
        let statsTween = gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none", // <-- IMPORTANT!
          scrollTrigger: {
            trigger: "#home-statistics",
            start: 'top +=200px',
            pin: true,
            scrub: 0.1,
            //snap: directionalSnap(1 / (sections.length - 1)),
            end: "+=1000px",
            // markers:true, if:'stats',

          }
        },);
        let testimonialTween = gsap.to(testimonials, {
          xPercent: -100 * (testimonials.length - 1),
          ease: "none", // <-- IMPORTANT!
          scrollTrigger: {
            trigger: "#home-testimonials",
            start: 'top top',
            pin: true,
            scrub: 0.1,
            //snap: directionalSnap(1 / (sections.length - 1)),
            end: "+=1000px",
            // markers:true,id:'testimonials'
          }
        },);
        let pages = document.querySelector('.main-page') 
        setupMenuTextAnimation(pages,gsap)
  
        setupSplits(SplitText,gsap)
        setTimeout(() => {

          gsap.timeline({defaults:{ease:'Power1.In',duration:1},onComplete:
        () => {
          if(smoother){

            smoother.paused(false)
          } else{
            window.scrollTo(0,0)
            gsap.to(document.querySelector('body'),{overflowY:'scroll'})
          }
        }})
          .to('#loadingScreen',{yPercent:-100,duration:0.5,})
          .to('#loadingScreen',{display:'none',duration:0.1})
          
    
        },1500)
       
      })
      return () => ctx.revert()

    }
  }, [isLoaded])
  function init() {
    //

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setPixelRatio(windowRef.current.devicePixelRatio);
    renderer.setSize(windowRef.current.innerWidth, windowRef.current.innerHeight);
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    sceneRef.current.appendChild(renderer.domElement);

    //

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(55,
      windowRef.current.innerWidth / windowRef.current.innerHeight, 0.01, 20000);
    if (isDesktop.current) {

      camera.position.set(30, 50, 100);
      pos.y = 30
    } else {
      camera.position.set(-120, 20, 0);
      console.log(pos)
      pos.x = 0
      pos.y = 50
      pos.z= 0

    }

    //

    sun = new THREE.Vector3();

    // Models
    models[0].position.set(0, 0, 0)
    models[0].scale.set(5, 5, 5)
    models[1].position.set(0, 200, 0)
    scene.add(models[0])
    scene.add(models[1])
    console.log(models[1])
    // Water

    const waterGeometry = new THREE.PlaneGeometry(10000, 10000);

    water = new Water(
      waterGeometry,
      {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: new THREE.TextureLoader().load('/assets/textures/waternormals.jpg', function (texture) {

          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

        }),
        sunDirection: new THREE.Vector3(),
        sunColor: 0xffffff,
        waterColor: 0x00eeff,
        distortionScale: 3.7,
        fog: scene.fog !== undefined
      }
    );

    water.rotation.x = - Math.PI / 2;

    scene.add(water);

    // Skybox

    const sky = new Sky();
    sky.scale.setScalar(10000);
    scene.add(sky);

   skyUniforms = sky.material.uniforms;

    skyUniforms['turbidity'].value = 10;
    skyUniforms['rayleigh'].value = 2;
    skyUniforms['mieCoefficient'].value = 0.005;
    skyUniforms['mieDirectionalG'].value = 0.8;


    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    let renderTarget;

    function updateSun() {

      const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
      const theta = THREE.MathUtils.degToRad(parameters.azimuth);

      sun.setFromSphericalCoords(1, phi, theta);
      
      sky.material.uniforms['sunPosition'].value.copy(sun);
      water.material.uniforms['sunDirection'].value.copy(sun).normalize();

      if (renderTarget !== undefined) renderTarget.dispose();

      renderTarget = pmremGenerator.fromScene(sky);

      scene.environment = renderTarget.texture;

    }

    updateSun();
    setInterval(updateSun, 50)
    //

    const geometry = new THREE.BoxGeometry(30, 30, 30);
    const material = new THREE.MeshStandardMaterial({ roughness: 0 });

    // mesh = new THREE.Mesh(geometry, material);
    // scene.add(mesh);

    //

    controls = new OrbitControls(camera, renderer.domElement);
    controls.maxPolarAngle = Math.PI * 0.495;
    controls.target.set(0, 10, 0);
    // controls.minDistance = 40.0;
    // controls.maxDistance = 200.0;
    controls.update();

    //

    stats = new Stats();
    // sceneRef.current.appendChild(stats.dom);


    //

    windowRef.current.addEventListener('resize', onWindowResize);

  }

  function onWindowResize() {

    camera.aspect = windowRef.current.innerWidth / windowRef.current.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(windowRef.current.innerWidth, windowRef.current.innerHeight);

  }

  function animate() {

    parameters.elevation += 0.001
    requestAnimationFrame(animate);
    camera.lookAt(pos)
    render();
    stats.update();

  }

  function render() {

    const time = performance.now() * 0.001;

    models[0].position.y = Math.sin(time) * 0.21 + 1;
    models[0].rotation.x = time * 0.0001;
    models[0].rotation.z = time * 0.0001;
    models[0].rotation.y = 5;

    water.material.uniforms['time'].value += 0.5 / 60.0;

    renderer.render(scene, camera);

  }



  return (
    <div id='animation' className="h-screen absolute  -z-10 pointer-events-none">
      <div className='' id="sceneRef" ref={sceneRef}></div>
    </div>
  )
}

export default Threejs
