import React, { useState, useEffect } from "react";

import { Category } from "../Category";
import { List, Item } from "./styles";
import { useCategoriesData } from "../../hooks/useCategoriesData";

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false);
  const { categories, loading } = useCategoriesData();

  useEffect(() => {
    const onScroll = (e) => {
      window.scrollY > 200 ? setShowFixed(true) : setShowFixed(false);
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [showFixed]);
  console.log(categories);
  console.log("papitas");
  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <Item key="loading">
          <Category />
        </Item>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))
      )}
    </List>
  );
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
