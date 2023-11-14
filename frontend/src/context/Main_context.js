import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const MainContext = createContext();

const Context = ({ children }) => {
  const [modalVisible, setmodalVisible] = useState(false);
  const [allData, setallData] = useState([]);
  const [navData, setnavData] = useState({});
  const [className, setclassName] = useState("");
  const [theory, settheory] = useState("");
  const [panel, setpanel] = useState("theory");
  // console.log("api", theory);

  const getData = async () => {
    await axios.get("http://localhost:4000/api/getClasses").then((res) => {
      setallData(res.data.allClasses);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const getNavData = async (classId, subId, clsName) => {
    await axios
      .get(`http://localhost:4000/api/getSingleClass/${classId}/${subId}`)
      .then((res) => {
        setclassName(clsName);
        setnavData(res.data);
        console.log("navData", res.data);
      });
  };

  // const getTheory = async () => {
  //   navData.filter((chp) => chp.map((x) => x.chpname === chpname? ))
  // };

  return (
    <MainContext.Provider
      value={{
        modalVisible,
        setmodalVisible,
        allData,
        setallData,
        getNavData,
        navData,
        className,
        setclassName,
        theory,
        settheory,
        panel,
        setpanel,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default Context;
