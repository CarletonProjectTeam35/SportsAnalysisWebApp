import Gauge from "../components/Gauge/Gauge";

const SpeedDial = new Gauge(
  "Speed",
  420, 
  69, 
  100
  );
const Overview = () => {

  return( 
  <div>hi from overview page
    <div>    
    <SpeedDial
    />
    </div>

  </div>
  )
};
console.log("The speed dial: ", SpeedDial);

export default Overview;
