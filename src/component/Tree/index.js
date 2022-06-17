import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./index.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Tree = ({ data }) => {
  console.log(data);
  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {[data].map((tree) => (
          <TreeNode node={tree} />
        ))}
      </ul>
    </div>
  );
};
const TreeLeafNode = ({ data }) => {
  console.log(data);
  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {data.map((tree) => (
          <TreeNode node={tree} />
        ))}
      </ul>
    </div>
  );
};

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisiblity] = useState(false);

  const hasChild = node.children ? true : false;
  return (
    <>
      <li className="d-tree-node border-0 ">
        <div className="d-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
          <div className="col floder">
            <div className="floder">
              {childVisible ? (
                <FontAwesomeIcon icon="fa-solid fa-square-minus" />
              ) : (
                <FontAwesomeIcon icon="fa-solid fa-square-plus" />
              )}
            </div>
            <div className="floder">
              {childVisible ? (
                <FontAwesomeIcon icon="fa-solid fa-folder-open" color="#ff9900" />
              ) : (
                <FontAwesomeIcon icon="fa-solid fa-folder" color="#ff9900" />
              )}
            </div>              
            <div className="floder">{node.name}</div>
          </div>
        </div>

        {hasChild && childVisible && (
          <div className="d-tree-content">
            <ul className="d-flex d-tree-container flex-column">
              <TreeLeafNode data={node.children} />
            </ul>
          </div>
        )}
      </li>
    </>
  );
};

export default Tree;
