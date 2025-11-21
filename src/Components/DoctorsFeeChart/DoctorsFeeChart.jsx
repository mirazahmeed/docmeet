import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

// bookings = array of booked doctors
const DoctorsFeeChart = ({ bookings }) => {
  // prepare data for chart
  const data = bookings.map((doctor) => ({
    name: doctor.name, // bottom labels
    fee: doctor.fee,   // left side values
  }));

  const margin = { top: 20, right: 30, left: 20, bottom: 5 };

  return (
    <div className="w-full md:w-3/4 lg:w-1/2">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={margin}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis /> {/* shows fee on left */}
          <Tooltip
            wrapperStyle={{ width: 150, backgroundColor: "#f0f0f0" }}
          />
           {/* <Legend
		   className=""
            verticalAlign="top"
            align="right"
            wrapperStyle={{
              padding: "4px 10px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginTop: "5px",
			  width:"60px"
            }}
          /> */}
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar 
            dataKey="fee"
            fill="#8884d8"
            barSize={30}
            name="C Fee"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DoctorsFeeChart;
