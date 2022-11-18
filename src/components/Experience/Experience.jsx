import React, { useState } from "react";
import "./Experience.css";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

export default function Experience() {
  const [value, setValue] = useState("1");
  const educationData = [
    {
      designation: "B.Tech",
      stream: "ECE",
      city: "Srinagar",
      name: "NIT Srinagar",
      startDate: "08/2019",
      endDate: "05/2023",
    },
    {
      designation: "Intermediate",
      stream: "MPC",
      city: "Vijayawada",
      name: "Narayana Junior College",
      startDate: "04/2017",
      endDate: "05/2019",
    },
    {
      designation: "Schooling",
      stream: "",
      city: "Tanuku",
      name: "Sasi E.M High School",
      startDate: "03/2016",
      endDate: "03/2017",
    },
  ];

  const workData = [
    {
      designation: "Associate Software Engineer",
      stream: "Angular",
      city: "Charlotte",
      name: "Tabner",
      startDate: "01/2022",
      endDate: "",
    },
    {
      designation: "Junior Software Developer",
      stream: "React-Native",
      city: "Hyderabad",
      name: "Tabner",
      startDate: "08/2021",
      endDate: "01/2022",
    },
    {
      designation: "Intern",
      stream: "Python",
      city: "Hyderabad",
      name: "NSIC",
      startDate: "04/2021",
      endDate: "07/2021",
    },
    {
      designation: "Campus Ambassador",
      stream: "",
      city: "Bengaluru",
      name: "Verzeo",
      startDate: "01/2021",
      endDate: "03/2021",
    },
  ];

  return (
    <div className="experience">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: "100px 10% 0 10%",
          color: "white",
        }}
      >
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "70px",
            marginBottom: "70px",
            letterSpacing: "5px",
          }}
        >
          Experience
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <TabContext value={value}>
            <Box>
              <TabList onChange={(e, newValue) => setValue(newValue)} centered>
                <Tab
                  sx={{ color: "white", fontSize: "25px", width: "200px" }}
                  label="Work"
                  value="1"
                  icon={<WorkOutlineIcon />}
                  iconPosition="start"
                />
                <Tab
                  sx={{ color: "white", fontSize: "25px", width: "200px" }}
                  label="Education"
                  value="2"
                  icon={<SchoolOutlinedIcon />}
                  iconPosition="start"
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <DataRender workData={workData} />
            </TabPanel>
            <TabPanel value="2">
              <DataRender workData={educationData} />
            </TabPanel>
          </TabContext>
        </motion.div>
      </div>
    </div>
  );
}

const DataRender = ({ workData }) => {
  return (
    <div style={{ marginTop: "30px" }}>
      {workData.map((data, i) => {
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="experience_line"
          >
            <motion.div
              className="experience_data"
              initial={{ x: i % 2 === 0 ? 100 : -100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3>
                {data.designation} {data.stream ? `(${data.stream})` : ""}
              </h3>
              <p>
                {data.name} - {data.city}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CalendarMonthOutlinedIcon />
                <p style={{ paddingLeft: "5px" }}>
                  {data.startDate} - {data.endDate ? data.endDate : "present"}
                </p>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};
