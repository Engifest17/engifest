function Spline() {
	this.points = [];
	this.cameraFarPoint = 300;
	this.sunCameraFarPoint = 500;
	this.curve;
	
	this.makeSplineFromPoints = function(arr) {
		for(var i =0;i<arr.length; i++) {
			this.points.push(arr[i]);
		}
		this.curve = new THREE.CatmullRomCurve3(this.points);	
	}

	this.makeSplinePoints = function(obj1, obj2) {			//obj1 is camera and obj2 is planet
		this.points.push(
			new THREE.Vector3(obj1.position.x, obj1.position.y, obj1.position.z)			
		);
		if(obj2 === sun ) {
			this.points.push(new THREE.Vector3(obj2.planet.position.x, obj2.planet.position.y, this.sunCameraFarPoint));
		} else {
			this.points.push(new THREE.Vector3(obj2.planet.position.x, obj2.planet.position.y, this.cameraFarPoint));
		}

		if(obj2 === sun) {
			this.points.push(new THREE.Vector3(obj2.planet.position.x, obj2.planet.position.y, 2*obj2.size));
		} else if(obj2 === mercury) {
			this.points.push(new THREE.Vector3(obj2.planet.position.x, obj2.planet.position.y+5, 2*obj2.size));
		} else if(obj2 === venus) {
			this.points.push(new THREE.Vector3(obj2.planet.position.x, obj2.planet.position.y+10, 2*obj2.size));
		} else if(obj2 === earth) {
			this.points.push(new THREE.Vector3(obj2.planet.position.x, obj2.planet.position.y+15, 2*obj2.size));
		} else if(obj2 === mars) {
			this.points.push(new THREE.Vector3(obj2.planet.position.x, obj2.planet.position.y+20, 2*obj2.size));
		}
		this.curve = new THREE.CatmullRomCurve3(this.points);
	}

}