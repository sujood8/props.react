//Sujood shani 
// hsen Heib
import ColorBlock from "./components/ColorBlock";
import ActionButton from "./components/ActionButton";
import ImageWithCaption from "./components/ImageWithCaption";


function App() {
  return (
    <div className="App">
      <h1>React Assignment</h1>
      {/* Exercise #1: ColorBlock */}
      <h2>ColorBlock Example</h2>
      <ColorBlock color="blue" />
      <ColorBlock /> {/* Default gray */}
      {/* Exercise #2: ActionButton */}
      <h2>ActionButton Example</h2>
      <ActionButton
        label="Click Me"
        onAction={() => alert("Button clicked!")}
      />
      {/* Exercise #3: ImageWithCaption */}
      <h2>ImageWithCaption Example</h2>
      <ImageWithCaption
        src="https://via.placeholder.com/150"
        caption="Simple Image"
      />
    </div>
  );
}

export default App;
