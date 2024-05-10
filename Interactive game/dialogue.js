function setup() {
  createCanvas(700, 500);
  background(0);
}

let i = 0;

function dialogueTrials(str) {
  fill(255);
  textFont("Courier");
  let current = "";

  setTimeout(function type() {
    if (i < str.length) {
      current += str[i];
      text(current, 50 + i * 10, 350, 600, 200);
      console.log(current);
      i++;
    }
  }, 3000);
}

function draw() {
  dialogueTrials(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus diam sit amet ex tempus, et faucibus neque porttitor. Integer placerat nibh luctus purus pellentesque ultricies. Vivamus eget ultricies metus, vel ullamcorper tortor. Duis iaculis dictum est vel scelerisque. Morbi consequat tortor nec diam egestas sollicitudin. Maecenas laoreet lorem at urna tincidunt, a pellentesque dui euismod. Quisque eleifend vitae ante nec tincidunt. Etiam pulvinar vitae mauris non venenatis. Fusce iaculis diam sed lacus lacinia lacinia. Vestibulum rhoncus, dolor vitae pretium vehicula, justo sem sagittis nibh, non rutrum sem augue a eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin tempor enim elit, quis aliquet mauris venenatis ac. Pellentesque viverra sodales ex, blandit placerat leo mattis ac. In tempus mauris quam. Maecenas non orci ac leo rhoncus semper. In molestie condimentum nibh, sed mollis lectus blandit eget."
  );
  fill(255);
  textFont("Courier");
  text("Mwister Obwama??", 100, 235, 50, 50);
}
