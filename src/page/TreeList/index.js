import React, { useEffect, useState } from "react";
import Tree from "../../component/Tree";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const TreeList = () => {
  const [treeData, setTreeData] = useState([]);
  const [status, setStatus] = useState(false);
  const getData = () => {
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        level: 1,
      }),
    };
    let fetchRes = fetch(
      "https://poc.molecularconnections.com/Tree/getTerm",
      options
    );
    setStatus(true);
    fetchRes
      .then((res) => res.json())
      .then((d) => {
        setTreeData(d);
        setStatus(false);
      });
  };
  useEffect(() => getData(), []);
  if (status) {
    return "Laoding";
  } else {
    return (
      <>
        <div className="row">
          <div className="col text-center">
            <h2>Molicular Connection Assignment</h2>
            
            <p className="mt-3">
              <Tree data={treeData} />
            </p>
          </div>
        </div>
      </>
    );
  }
};

export default TreeList;
