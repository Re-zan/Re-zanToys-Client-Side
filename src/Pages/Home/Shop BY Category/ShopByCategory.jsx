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
  const uicornData = toys.filter((data) => data.Sub_category === "unicorn");
  //Horse data
  const horseData = toys.filter((data) => data.Sub_category === "horse");
  //teddy_bear data
  const teddy_bearData = toys.filter(
    (data) => data.Sub_category === "teddy_bear"
  );
  //dinosaur data
  const dinosaurData = toys.filter((data) => data.Sub_category === "dinosaur");
  //dogs data
  const dogsData = toys.filter((data) => data.Sub_category === "dogs");
  //cats data
  const catsData = toys.filter((data) => data.Sub_category === "cats");

  return (
    <div className="my_container">
      <Tabs>
        <TabList>
          <Tab>Uicorn</Tab>
          <Tab>Horse</Tab>
          <Tab>Teddy_bear</Tab>
          <Tab>Dinosaur</Tab>
          <Tab>Cat</Tab>
          <Tab>Dog</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-3 lg:p-0">
            {uicornData.slice(0, 4).map((subcat) => (
              <CategoryData subcat={subcat} key={subcat._id}></CategoryData>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {horseData.slice(0, 4).map((subcat) => (
              <CategoryData subcat={subcat} key={subcat._id}></CategoryData>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {teddy_bearData.slice(0, 4).map((subcat) => (
              <CategoryData subcat={subcat} key={subcat._id}></CategoryData>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dinosaurData.slice(0, 4).map((subcat) => (
              <CategoryData subcat={subcat} key={subcat._id}></CategoryData>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid ggrid-cols-1 md:grid-cols-3 gap-4">
            {catsData.slice(0, 4).map((subcat) => (
              <CategoryData subcat={subcat} key={subcat._id}></CategoryData>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dogsData.slice(0, 4).map((subcat) => (
              <CategoryData subcat={subcat} key={subcat._id}></CategoryData>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
