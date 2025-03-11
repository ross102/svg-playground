 import * as THREE from  "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js" 

      

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer()
        console.log(scene);
        // console.log(camera);
        // console.log(renderer);
        
         renderer.setSize(innerWidth, innerHeight)
      //   // renderer.setPixelRatio(devicePiexelRatio)
         document.body.appendChild(renderer.domElement)

         const boxGeometry = new THREE.BoxGeometry(1,1,1)
         const material = new THREE.MeshBasicMaterial({color: 'blue' })

         const mesh = new THREE.Mesh(boxGeometry, material)

      //   console.log(mesh)
        scene.add(mesh)
        
        camera.position.set( 0, 0, 5);

        // renderer.render(scene, camera);

       function animate() {
	         renderer.render( scene, camera );

           mesh.rotation.x += 0.01
        //  mesh.rtoation.y += 0.02
       }

       renderer.setAnimationLoop( animate );
       