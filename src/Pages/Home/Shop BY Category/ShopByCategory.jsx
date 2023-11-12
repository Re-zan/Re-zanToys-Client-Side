import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryData from "./CategoryData";
const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://re-zan-toys-server-side.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  //Uicorn data
  const uicornData = toys
    .filter((data) => data.Sub_category === "unicorn")
    .slice(0, 8);

  //Horse data
  const horseData = toys
    .filter((data) => data.Sub_category === "horse")
    .slice(0, 8);
  //teddy_bear data
  const teddy_bearData = toys
    .filter((data) => data.Sub_category === "teddy_bear")
    .slice(0, 8);
  //dinosaur data
  const dinosaurData = toys
    .filter((data) => data.Sub_category === "dinosaur")
    .slice(0, 8);
  //dogs data
  const dogsData = toys
    .filter((data) => data.Sub_category === "dogs")
    .slice(0, 8);
  //cats data
  const catsData = toys
    .filter((data) => data.Sub_category === "cats")
    .slice(0, 8);

  return (
    <div className="my_container">
      <Tabs>
        <TabList style={{ color: "#000000" }}>
          <Tab>Uicorn</Tab>
          <Tab>Horse</Tab>
          <Tab>Teddy_bear</Tab>
          <Tab>Dinosaur</Tab>
          <Tab>Cat</Tab>
          <Tab>Dog</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-3 lg:p-0">
            {uicornData.map((subcat) => (
              <CategoryData subcat={subcat} key={subcat._id}></CategoryData>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {horseData.map((subcat) => (
              <CategoryData subcat={subcat} key={subcat._id}></CategoryData>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {teddy_bearData.map((subcat) => (
              <CategoryData subcat={subcat} key={subcat._id}></CategoryData>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {dinosaurData.map((subcat) => (
              <CategoryData subcat={subcat} key={subcat._id}></CategoryData>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid ggrid-cols-1 md:grid-cols-4 gap-6">
            {catsData.map((subcat) => (
              <CategoryData subcat={subcat} key={subcat._id}></CategoryData>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {dogsData.map((subcat) => (
              <CategoryData subcat={subcat} key={subcat._id}></CategoryData>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
