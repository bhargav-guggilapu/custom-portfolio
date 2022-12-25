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

export default function Experience({ userData }) {
  const [value, setValue] = useState("1");
  const educationData = userData.educations?.map((edu) => {
    return {
      designation: edu.qualification,
      stream: edu.specialization,
      city: edu.location,
      name: edu.company,
      startDate: edu.startDate,
      endDate: edu.endDate,
    };
  });

  const workData = userData.works?.map((work) => {
    return {
      designation: work.designation,
      stream: work.workedOn,
      city: work.location,
      name: work.company,
      startDate: work.startDate,
      endDate: work.endDate,
    };
  });

  return (
    <div className="experience">
      <div className="experience-bg-effect" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: "100px 10% 0 10%",
          color: "white",
          zIndex: "1",
        }}
      >
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "70px",
            marginBottom: "50px",
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
      {workData?.map((data, i) => {
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
