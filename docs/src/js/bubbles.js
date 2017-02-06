var Particle, particleCount, particles, sketch, z;

sketch = Sketch.create();

particles = [];
particleCount = 400;
sketch.mouse.x = sketch.width / 2;
sketch.mouse.y = sketch.height / 2;
sketch.strokeStyle = 'rgba(255, 255, 255, 0)';
sketch.globalCompositeOperation = 'lighter';

Particle = function() {
    this.x = random(sketch.width);
    this.y = random(sketch.height, sketch.height * 2);
    this.vx = 0;
    this.vy = -random(1, 10) / 5;
    this.radius = this.baseRadius = 1;
    this.maxRadius = 20;
    return this.threshold = 100;
};

Particle.prototype = {
    update: function() {
        var dist, distx, disty, radius;
        distx = this.x - sketch.mouse.x;
        disty = this.y - sketch.mouse.y;
        dist = sqrt(distx * distx + disty * disty);
        if (dist < this.threshold) {
            radius = this.baseRadius + ((this.threshold - dist) / this.threshold) * this.maxRadius;
            this.radius = radius > this.maxRadius ? this.maxRadius : radius;
        } else {
            this.radius = this.baseRadius;
        }
        this.vx += (random(100) - 50) / 1000;
        this.vy -= random(1, 5) / 10000;
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < -this.maxRadius || this.x > sketch.width + this.maxRadius || this.y < -this.maxRadius) {
            this.x = random(sketch.width);
            this.y = random(sketch.height + this.maxRadius, sketch.height * 2);
            this.vx = 0;
            return this.vy = -random(1, 10) / 5;
        }
    },
    render: function() {
        sketch.beginPath();
        sketch.arc(this.x, this.y, this.radius, 0, TWO_PI);
        sketch.closePath();
        sketch.fillStyle = 'rgba(255, 255, 255, 1)';
        return sketch.fill();
    }
};

z = particleCount;

while (z--) {
    particles.push(new Particle());
}

sketch.clear = function() {
    return sketch.clearRect(0, 0, sketch.width, sketch.height);
};

sketch.update = function() {
    var i, results;
    i = particles.length;
    results = [];
    while (i--) {
        results.push(particles[i].update());
    }
    return results;
};

sketch.draw = function() {
    var i, results;
    i = particles.length;
    results = [];
    while (i--) {
        results.push(particles[i].render());
    }
    return results;
};