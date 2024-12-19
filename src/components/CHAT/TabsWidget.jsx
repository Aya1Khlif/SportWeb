import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabsWidget = ({ data }) => {
  return (
    <div>
      <h3>{localStorage.getItem("language") === "ar" ? "الفوائد" : data.title}</h3>
      <Tabs>
        <TabList>
          {data.content.map((item, index) => (
            <Tab key={index}>{localStorage.getItem("language") === "ar" ? `تاب ${index + 1}` : `Tab ${index + 1}`}</Tab>
          ))}
        </TabList>
        {data.content.map((item, index) => (
          <TabPanel key={index}>
            <p>{item}</p>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default TabsWidget;
