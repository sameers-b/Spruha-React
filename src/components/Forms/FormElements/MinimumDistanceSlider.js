import Slider from "@mui/material/Slider";
import React from "react";
export function MinimumDistanceSlider() {
    const [value1, setValue1] = React.useState([20, 40,]);
  
    const handleChange1 = (_event, newValue, activeThumb) => {
      if (!Array.isArray(newValue)) {
        return;
      }
  
      if (activeThumb === 0) {
        setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
      } else {
        setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
      }
    };
    function valuetext(value) {
        return `${value}`;
      }
      
      const minDistance = 10;
    return (
      <div>
        <Slider
          style={{
            color: "#6259ca",
          }}
          getAriaLabel={() => "Minimum distance"}
          value={value1}
          onChange={handleChange1}
          getAriaValueText={valuetext}
          disableSwap
          valueLabelDisplay="on"
        />
      </div>
    );
  }