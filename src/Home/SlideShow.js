
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
const MyCollection = [
  {
    label: "First Picture",
    imgPath:
      "https://www.shutterstock.com/image-vector/dark-wide-abstract-banner-grey-260nw-1804227037.jpg",
  },
  {
    label: "Second Picture",
    imgPath:
      "https://thumbs.dreamstime.com/b/technology-banner-background-old-new-using-computer-circuits-old-machine-cogs-37036025.jpg",
  },
  {
    label: "Third Picture",
    imgPath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6wLN510g4POD23UhKHnu8yEhHlYDBso3Eug&usqp=CAU",
  },
];
var inc = 0;
function SlideShow(props) {
  const state = useSelector((state) => state);
  const theme = useTheme();
  const [index, setActiveStep] = useState(0);
  var CollectionSize;
  if (state.allProduct.products.data !== undefined) {
    CollectionSize = state.allProduct.products.data.length;
  }
  useEffect(()=>{
    console.log(inc);
  },[index])
  if (inc !== 3) {
    var inverval_timer = setInterval( ()=> {
      setActiveStep(inc);
      inc++;
      clearInterval(inverval_timer);
    }, 2000);
  } else if (inc === 3) {
    inc = 0;
  } else {
    inc = 0;
  }
  return (
    <div
      style={{
      }}
    >
      <div
        style={{
          flexGrow: 1,
        }}
      >
        <img
          src={MyCollection[index].imgPath}
          style={{
            height: 255,
            width: 1200,
            display: "block",
            overflow: "hidden",
          }}
          alt="#"
        />


      </div>

    </div>
  );
}

export default SlideShow;