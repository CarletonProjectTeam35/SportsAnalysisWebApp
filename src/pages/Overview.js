import { RadialGauge, RadialGaugeSeries } from "reaviz";

const data = [
  { key: "Speed", data: 40 },
  { key: "EMG 1", data: 20 },
  { key: "EMG 2", data: 14 },
  { key: "EMG 3", data: 19 },
  { key: "EMG 4", data: 30 },
  { key: "EMG 5", data: 47 },
  { key: "EMG 6", data: 75 },
  { key: "Pressure Plate Left", data: 25 },
  { key: "Pressure Plate Right", data: 25 },
];
const Overview = () => {
  return (
    <div>
      hi from overview page
      <RadialGauge
        width={800}
        height={450}
        data={data}
        series={<RadialGaugeSeries minGaugeWidth={150} />}
      />
    </div>
  );
};

export default Overview;
