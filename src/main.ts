
type Triangles = [number, number, number, [number, number, number]][];

// //  HOUSE
// const points = [
//   [-10, -10, -5], // 0 front bottom left
//   [-10,  10, -5], // 1 front bottom right
//   [-10,  10,  5], // 2 front top right
//   [-10, -10,  5], // 3 front top left
//   [ 10, -10, -5], // 4 back bottom left
//   [ 10,  10, -5], // 5 back bottom right
//   [ 10,  10,  5], // 6 back top right
//   [ 10, -10,  5], // 7 back top left
//   [-10,   0, 10], // 8 front peak
//   [ 10,   0, 10], // 9 back peak
// ];

// const triangles: Triangles = [
//   [0, 1, 2, [180, 120, 80]],
//   [0, 2, 3, [180, 120, 80]],
//   [3, 2, 8, [200, 60, 60]],
//   [4, 5, 6, [140, 90, 60]],
//   [4, 6, 7, [140, 90, 60]],
//   [7, 6, 9, [160, 40, 40]],
//   [0, 4, 7, [160, 100, 70]],
//   [0, 7, 3, [160, 100, 70]],
//   [3, 7, 9, [170, 50, 50]],
//   [3, 9, 8, [170, 50, 50]],
//   [1, 5, 6, [160, 100, 70]],
//   [1, 6, 2, [160, 100, 70]],
//   [2, 6, 9, [170, 50, 50]],
//   [2, 9, 8, [170, 50, 50]],
//   [0, 1, 5, [80, 80, 80]],
//   [0, 5, 4, [80, 80, 80]],
// ];

//  mountains
// const points = [[10, 0, -3], [10, 4, -1], [10, -4, -1], [10, 0, -5], [12, 2, 0], [12, -2, 0], [12, 0, 2], [12, 3, -2], [12, -3, -2], [14, 0, -2], [14, 4, 0], [14, -4, 0], [14, 0, 3], [14, 2, -4], [14, -2, -4], [11, 6, -1], [11, -6, -1], [11, 6, -3], [11, -6, -3], [13, 6, 0], [13, -6, 0], [13, 6, -2], [13, -6, -2], [10, 1, 1], [10, -1, 1], [10, 1, -1], [10, -1, -1], [12, 1, 1.5], [12, -1, 1.5], [11, 2, -2], [11, -2, -2], [11, 0, -3.5], [13, 2, -2], [13, -2, -2], [13, 0, -4], [10, 5, -2], [10, -5, -2], [10, 5, -4], [10, -5, -4], [12, 5, -1], [12, -5, -1]];
// const triangles: [number, number, number, [number, number, number]][] = [[0, 1, 4, [240, 245, 255]], [0, 4, 6, [240, 245, 255]], [0, 2, 5, [240, 245, 255]], [0, 5, 6, [240, 245, 255]], [0, 1, 7, [180, 160, 140]], [1, 7, 4, [120, 110, 100]], [0, 2, 8, [180, 160, 140]], [2, 8, 5, [120, 110, 100]], [0, 3, 7, [90, 80, 75]], [0, 3, 8, [90, 80, 75]], [3, 7, 9, [120, 110, 100]], [3, 8, 9, [120, 110, 100]], [4, 6, 12, [240, 245, 255]], [4, 10, 12, [180, 160, 140]], [5, 6, 12, [240, 245, 255]], [5, 11, 12, [180, 160, 140]], [4, 7, 10, [120, 110, 100]], [5, 8, 11, [120, 110, 100]], [7, 9, 13, [90, 80, 75]], [8, 9, 14, [90, 80, 75]], [9, 13, 34, [120, 110, 100]], [9, 14, 34, [120, 110, 100]], [13, 34, 33, [90, 80, 75]], [14, 34, 33, [90, 80, 75]], [15, 17, 21, [80, 120, 60]], [15, 19, 21, [60, 100, 45]], [16, 18, 22, [80, 120, 60]], [16, 20, 22, [60, 100, 45]], [17, 21, 37, [60, 100, 45]], [18, 22, 38, [60, 100, 45]], [35, 37, 21, [80, 120, 60]], [36, 38, 22, [80, 120, 60]], [23, 25, 29, [120, 110, 100]], [24, 26, 30, [120, 110, 100]], [25, 26, 31, [90, 80, 75]], [29, 30, 31, [90, 80, 75]], [27, 23, 24, [80, 120, 60]], [27, 28, 24, [80, 120, 60]], [28, 24, 26, [80, 120, 60]], [39, 19, 21, [60, 130, 180]], [39, 40, 19, [40, 100, 150]], [40, 20, 22, [40, 100, 150]], [40, 39, 22, [60, 130, 180]], [1, 15, 17, [180, 170, 130]], [2, 16, 18, [180, 170, 130]], [23, 27, 25, [40, 90, 40]], [24, 28, 26, [40, 90, 40]], [27, 28, 6, [30, 70, 30]], [6, 27, 23, [200, 220, 200]], [6, 28, 24, [200, 220, 200]]];

window.onload = function main() {
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;

  const canvas: HTMLCanvasElement = document.querySelector('#canvas')!;

  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  const context = canvas.getContext('2d')!;






  //  QUATERNIONS

  type Quaternion = { w: number, x: number, y: number, z: number };

  const UNIT_QUATERNION = { w: 1, x: 0, y: 0, z: 0 };

  function fromAxisAngle(ax: number, ay: number, az: number, angle: number): Quaternion {
    const s = Math.sin(angle / 2);
    return {
      w: Math.cos(angle / 2),
      x: ax * s,
      y: ay * s,
      z: az * s,
    };
  }

  function multiply(a: Quaternion, b: Quaternion): Quaternion {
    return {
      w: a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z,
      x: a.w * b.x + a.x * b.w + a.y * b.z - a.z * b.y,
      y: a.w * b.y - a.x * b.z + a.y * b.w + a.z * b.x,
      z: a.w * b.z + a.x * b.y - a.y * b.x + a.z * b.w,
    };
  }

  function normalize(q: Quaternion): Quaternion {
    const len = Math.sqrt(q.w * q.w + q.x * q.x + q.y * q.y + q.z * q.z);
    return { w: q.w / len, x: q.x / len, y: q.y / len, z: q.z / len };
  }

  function applyToPoint(q: Quaternion, px: number, py: number, pz: number): [number, number, number] {
    const p: Quaternion = { w: 0, x: px, y: py, z: pz };
    const qConj: Quaternion = { w: q.w, x: -q.x, y: -q.y, z: -q.z };
    const result = multiply(multiply(q, p), qConj);
    return [result.x, result.y, result.z];
  }

  function sameQuaternion(a: Quaternion, b: Quaternion): boolean {
    return a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;
  }



















  //  THE POINT CLOUD
  let points = [[1, -1, -1], [1, 1, -1], [1, -1, 1], [1, 1, 1], [-1, -1, -1], [-1, 1, -1], [-1, -1, 1], [-1, 1, 1]];
  //  THE LINES
  // const lines = [[0,1], [0,2], [1,3], [2,3], [0,4], [1,5], [4,5], [4,6], [5,7], [6,7], [2,6], [3,7]];
  //  TRIANGLES
  const triangles: Triangles = [
    // [0, 1, 2, [102, 178, 155]]
    // , [1, 2, 3, [102, 178, 55]]
    [1, 5, 7, [102, 78, 255]]
    , [1, 3, 7, [12, 178, 255]]
    , [2, 3, 6, [102, 108, 255]]
    , [3, 6, 7, [102, 178, 25]]
    , [0, 2, 6, [10, 18, 255]]
    , [0, 4, 6, [102, 18, 255]]
    , [0, 1, 4, [12, 178, 255]]
    , [1, 4, 5, [12, 8, 25]]
    , [4, 5, 7, [10, 78, 55]]
    , [4, 6, 7, [100, 140, 25]]];


  let ZOOM_X = 10;
  let SHIFT_Y = 0;
  let LIFT_Z = 0;

  let FOCAL_LENGTH = 3640;


  const STEP = 1 * Math.PI / 180;
  let ROTATION: Quaternion = { w: 0, x: 0, y: 0, z: 1 };
  // let ACTIVE_DELTA = UNIT_QUATERNION;
  let deltaZ: Quaternion = { w: 1, x: 0, y: 0, z: 0 };
  let deltaY: Quaternion = { w: 1, x: 0, y: 0, z: 0 };
  let deltaX: Quaternion = { w: 1, x: 0, y: 0, z: 0 };


  // let ANGLE_X = 0;
  // let ANGLE_Y = 0;
  // let ANGLE_Z = 180;

  // let ANGLE_DELTA_X = 0;
  // let ANGLE_DELTA_Y = 0;
  // let ANGLE_DELTA_Z = 0;

  // let ROTATING_LEFT_RIGHT: boolean = false;
  // let ROTATING_TOP_DOWN: boolean = false;
  // let ROTATING_CLOCK_COUNTER_WISE: boolean = false;


  // function radX(): number {
  //   return (ANGLE_X + ANGLE_DELTA_X) * Math.PI / 180
  // }

  // function radY(): number {
  //   return (ANGLE_Y + ANGLE_DELTA_Y) * Math.PI / 180
  // }

  // function radZ(): number {
  //   return (ANGLE_Z + ANGLE_DELTA_Z) * Math.PI / 180
  // }





  function draw(): void {
    // console.log("START RENDERING");

    // const now = performance.now();

    // ROTATION = normalize(multiply(ROTATION, ACTIVE_DELTA));
    ROTATION = normalize(multiply(multiply(multiply(ROTATION, deltaX), deltaY), deltaZ));

    // if (ANGLE_DELTA_Z !== 0) {
    //   ANGLE_Z += ANGLE_DELTA_Z;
    // }
    // if (ANGLE_DELTA_Y !== 0) {
    //   ANGLE_Y += ANGLE_DELTA_Y;
    // }
    // if (ANGLE_DELTA_X !== 0) {
    //   ANGLE_X += ANGLE_DELTA_X;
    // }

    context.clearRect(0, 0, WIDTH, HEIGHT);
    const projectedPoints = points
      //  ROTATION FIRST
      .map(([x, y, z]) => applyToPoint(ROTATION, x, y, z))
      // .map(([x, y, z]) => [Math.cos(radZ()) * x - Math.sin(radZ()) * y, Math.sin(radZ()) * x + Math.cos(radZ()) * y, z])
      // .map(([x, y, z]) => [Math.cos(radY()) * x - Math.sin(radY()) * z, y, Math.sin(radY()) * x + Math.cos(radY()) * z])
      // .map(([x, y, z]) => [x, Math.cos(radX()) * y - Math.sin(radX()) * z, Math.sin(radX()) * y + Math.cos(radX()) * z])
      //  CAMERA OFFSET NEXT
      .map(([x, y, z]) => [x + ZOOM_X, y, z])
      .map(([x, y, z]) => [x, y + SHIFT_Y, z])
      .map(([x, y, z]) => [x, y, z + LIFT_Z])
      //  PLANER PROJECTION NEXT
      .map(([x, y, z]) => [Math.round(FOCAL_LENGTH * y / x), Math.round(FOCAL_LENGTH * z / x), x]);

    //  ADJUST FROM CARTESIAN TO CANVAS COORDINATE SYSTEM
    const canvasAdjusted = projectedPoints.map(([x, y, d]) => [Math.round(x + WIDTH / 2), Math.round(-y + HEIGHT / 2), d]);


    //  Create and initialize the RGB buffer for every pixel - all white or some light color.
    const rgbBuffer: Uint8ClampedArray = freshCanvas();

    //  CREATE AND INITIALIZE THE DEPTHS
    const depths: number[] = freshDepths();

    triangles.forEach(([in1, in2, in3, rgb]) => {
      const [X1, Y1, D1] = canvasAdjusted[in1];
      const [X2, Y2, D2] = canvasAdjusted[in2];
      const [X3, Y3, D3] = canvasAdjusted[in3];

      //  SCANLINE ALGO
      //  1. Find the Ymin and Ymax range of all the three points.
      //  2. Iterate that range.

      const YMin: number = minY(in1, in2, in3);
      const YMax: number = maxY(in1, in2, in3);

      // console.log({ YMin, YMax });

      for (let y = YMin; y <= YMax; y++) {
        //  3.  Calculate where this line intersects the triangle.
        //      It could be a single point.
        //      It could be a whole line.
        //      It could be two points of the two out of the three edges of the triangle.

        //      · I ignore those edges that have both points at the same Y as is the current `y`.
        //      · I ignore those edges that have both points's Ys below the current `y`.

        //      I iterate all the edges. And ignore those as described above:

        const edges = [[canvasAdjusted[in1], canvasAdjusted[in2]], [canvasAdjusted[in2], canvasAdjusted[in3]], [canvasAdjusted[in1], canvasAdjusted[in3]]];

        let intersections: number[] = Array();

        //  The following code always skips one edge. The one that we don't care about.
        edges.forEach(([p1, p2]) => {
          const [x1, y1] = p1;
          const [x2, y2] = p2;

          const yMin = Math.min(y1, y2);
          const yMax = Math.max(y1, y2);

          if (y <= yMin || y > yMax) {
            return;
          }

          // //  We ignore edges that are laying completely on the scanline or below.
          // if (y < y1 && y < y2 || y > y1 && y > y2) { //  TODO: is this condition correct?
          //   //  SKIP
          //   return;
          // }

          //  Compute the intersections.
          if (y1 === y2 && y == y1) {
            return;
          }
          const t = (y - y1) / (y2 - y1);
          const x = x1 + t * (x2 - x1);

          intersections.push(Math.round(x));
        });

        //  I should now have either two distinct Xs or twice the same X.
        const [begin, end]: [number, number] = intersections.sort((a, b) => a - b) as [number, number];

        //  4.  Iterate all the pixels on the line `y` between `begin` and `end`.
        for (let ix = begin; ix < end; ix++) {
          //  Calculate the depth of this pixel.
          //  Pixel is at [ ix ; y ]. 
          const totalArea = (X2 - X1) * (Y3 - Y1) - (X3 - X1) * (Y2 - Y1);

          const w1 = ((X2 - ix) * (Y3 - y) - (X3 - ix) * (Y2 - y)) / totalArea;
          const w2 = ((X3 - ix) * (Y1 - y) - (X1 - ix) * (Y3 - y)) / totalArea;
          const w3 = 1 - w1 - w2;

          const depth = w1 * D1 + w2 * D2 + w3 * D3;

          if (depth < depths[y * WIDTH + ix]) {
            rgbBuffer[Math.round((y * WIDTH + ix) * 4)] = rgb[0];
            rgbBuffer[Math.round((y * WIDTH + ix) * 4) + 1] = rgb[1];
            rgbBuffer[Math.round((y * WIDTH + ix) * 4) + 2] = rgb[2];
            rgbBuffer[Math.round((y * WIDTH + ix) * 4) + 3] = 255;
            depths[y * WIDTH + ix] = depth;
          }

        }

      }

    });

    // console.log(canvasAdjusted);








    //  THIS WILL BE THE FINAL LINE.
    const imgData: ImageData = new ImageData(rgbBuffer as unknown as ImageDataArray, WIDTH, HEIGHT);
    context.putImageData(imgData, 0, 0);


    // //  THIS WILL BE COMMENTED OUT
    // triangles.forEach(([index1, index2, index3, rgb]) => {
    //   const pointA = canvasAdjusted[index1];
    //   const pointB = canvasAdjusted[index2];
    //   const pointC = canvasAdjusted[index3];

    //   drawLine(context, pointA as any, pointB as any);
    //   drawLine(context, pointB as any, pointC as any);
    //   drawLine(context, pointA as any, pointC as any);
    // });

    requestAnimationFrame(draw);

    // console.log("DONE RENDERING in ", performance.now() - now);




    function minY(in1: number, in2: number, in3: number): number {
      const [x1, y1] = canvasAdjusted[in1];
      const [x2, y2] = canvasAdjusted[in2];
      const [x3, y3] = canvasAdjusted[in3];

      // console.log('minY ', [y1, y2, y3], ' min is = ', Math.min(y1, y2, y3));

      return Math.min(y1, y2, y3);
    }

    function maxY(in1: number, in2: number, in3: number): number {
      const [x1, y1] = canvasAdjusted[in1];
      const [x2, y2] = canvasAdjusted[in2];
      const [x3, y3] = canvasAdjusted[in3];

      return Math.max(y1, y2, y3);
    }


  }

  draw();





  function freshCanvas(): Uint8ClampedArray {
    const buffer = new Uint8ClampedArray(WIDTH * HEIGHT * 4);
    for (let i = 0; i < buffer.length; i += 4) {
      buffer[i] = 100;  //  R
      buffer[i + 1] = 200;  //  G
      buffer[i + 2] = 200;  // B
      buffer[i + 3] = 100;  //  α
    }
    return buffer;
  }


  function freshDepths(): number[] {
    const depths = new Array(WIDTH * HEIGHT);
    for (let i = 0; i < depths.length; i++) {
      depths[i] = Infinity;
    }
    return depths;
  }








  window.addEventListener('wheel', (event) => {
    if (event.deltaX > 0) {
      ZOOM_X += 0.1;
    }
    else if (event.deltaX < 0) {
      ZOOM_X -= 0.1;
    }

    if (event.deltaY > 0) {
      FOCAL_LENGTH = Math.min(5000, FOCAL_LENGTH + 10);
    }
    else if (event.deltaY < 0) {
      FOCAL_LENGTH = Math.max(10, FOCAL_LENGTH - 10);
    }
  })

  window.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowUp') {
      LIFT_Z += 0.05;
    }
    else if (event.code === 'ArrowDown') {
      LIFT_Z -= 0.05;
    }
    else if (event.code === 'ArrowLeft') {
      SHIFT_Y -= 0.05;
    }
    else if (event.code === 'ArrowRight') {
      SHIFT_Y += 0.05;
    }

    else if (event.key === 'R') {
      draw();
    }

    // else if (event.code === 'Space') {
    //   ROTATION = { w: 1, x: 0, y: 0, z: 0 };
    //   ACTIVE_DELTA = { w: 1, x: 0, y: 0, z: 0 };

    //   // ANGLE_DELTA_X = 0;
    //   // ANGLE_DELTA_Y = 0;
    //   // ANGLE_DELTA_Z = 0;
    //   // ANGLE_X = 0;
    //   // ANGLE_Y = 0;
    //   // ANGLE_Z = 180;
    // }

    else if (event.key === 'a') {
      const qConj = { w: ROTATION.w, x: -ROTATION.x, y: -ROTATION.y, z: -ROTATION.z };
      const viewerZ = applyToPoint(qConj, 0, 0, 1);
      
      deltaZ = deltaZ.w === 1 ? fromAxisAngle(viewerZ[0], viewerZ[1], viewerZ[2], STEP) : { w: 1, x: 0, y: 0, z: 0 };
      // deltaZ = deltaZ.w === 1 ? fromAxisAngle(0, 0, 1, STEP) : { w: 1, x: 0, y: 0, z: 0 };
    }
    else if (event.key === 'd') {
      const qConj = { w: ROTATION.w, x: -ROTATION.x, y: -ROTATION.y, z: -ROTATION.z };
      const viewerZ = applyToPoint(qConj, 0, 0, 1);
      deltaZ = deltaZ.w === 1 ? fromAxisAngle(viewerZ[0], viewerZ[1], viewerZ[2], -STEP) : { w: 1, x: 0, y: 0, z: 0 };
      // deltaZ = deltaZ.w === 1 ? fromAxisAngle(0, 0, 1, -STEP) : { w: 1, x: 0, y: 0, z: 0 };
    }
    else if (event.key === 'w') {
      const qConj = { w: ROTATION.w, x: -ROTATION.x, y: -ROTATION.y, z: -ROTATION.z };
      const viewerY = applyToPoint(qConj, 0, 1, 0);
      deltaY = deltaY.w === 1 ? fromAxisAngle(viewerY[0], viewerY[1], viewerY[2], STEP) : { w: 1, x: 0, y: 0, z: 0 };
      // deltaY = deltaY.w === 1 ? fromAxisAngle(0, 1, 0, STEP) : { w: 1, x: 0, y: 0, z: 0 };
    }
    else if (event.key === 's') {
      const qConj = { w: ROTATION.w, x: -ROTATION.x, y: -ROTATION.y, z: -ROTATION.z };
      const viewerY = applyToPoint(qConj, 0, 1, 0);
      deltaY = deltaY.w === 1 ? fromAxisAngle(viewerY[0], viewerY[1], viewerY[2], -STEP) : { w: 1, x: 0, y: 0, z: 0 };
      // deltaY = deltaY.w === 1 ? fromAxisAngle(0, 1, 0, -STEP) : { w: 1, x: 0, y: 0, z: 0 };
    }
    else if (event.key === 'q') {
      const qConj = { w: ROTATION.w, x: -ROTATION.x, y: -ROTATION.y, z: -ROTATION.z };
      const viewerX = applyToPoint(qConj, 1, 0, 0);
      deltaX = deltaX.w === 1 ? fromAxisAngle(viewerX[0], viewerX[1], viewerX[2], STEP) : { w: 1, x: 0, y: 0, z: 0 };

      // deltaX = deltaX.w === 1 ? fromAxisAngle(1, 0, 0, STEP) : { w: 1, x: 0, y: 0, z: 0 };
    }
    else if (event.key === 'e') {
      const qConj = { w: ROTATION.w, x: -ROTATION.x, y: -ROTATION.y, z: -ROTATION.z };
      const viewerX = applyToPoint(qConj, 1, 0, 0);
      deltaX = deltaX.w === 1 ? fromAxisAngle(viewerX[0], viewerX[1], viewerX[2], -STEP) : { w: 1, x: 0, y: 0, z: 0 };
      // deltaX = deltaX.w === 1 ? fromAxisAngle(1, 0, 0, -STEP) : { w: 1, x: 0, y: 0, z: 0 };
    }
    else if (event.code === 'Space') {
      deltaX = { w: 1, x: 0, y: 0, z: 0 };
      deltaY = { w: 1, x: 0, y: 0, z: 0 };
      deltaZ = { w: 1, x: 0, y: 0, z: 0 };
      ROTATION = { w: 0, x: 0, y: 0, z: 1 };
      // ROTATION = { w: 1, x: 0, y: 0, z: 0 };
    }
  })



}





function drawLine(ctx: CanvasRenderingContext2D, [x1, y1]: [number, number], [x2, y2]: [number, number]): void {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}