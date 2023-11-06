# mik-dropdown

### installation

`npm install mik-dropdown`

### Usage

```javascript
import useState from "react";
import Dropdown from "mik-dropdown/dist/Dropdown";

function Example() {
  const [color, setColor] = useState("");
  const options = [
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "red", label: "Red" },
    { value: "yellow", label: "Yellow" },
    { value: "orange", label: "Orange" },
    { value: "pink", label: "Pink" },
    { value: "purple", label: "Purple" },
    { value: "grey", label: "Grey" },
  ];

  return (
    <div>
      <Dropdown
        label="Please choose a color"
        options={options}
        onChange={(value) => setColor(value)}
      />
    </div>
  );
}
```
