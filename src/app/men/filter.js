"use client";
import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { apiUrl } from "../api";
import { useFilter } from "../../context/FilterContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Filter = () => {
  const { checkedFilters, updateCheckedFilters } = useFilter();
  const [loading, setLoading] = useState(true); 
  const [bodyFits, setBodyFits] = useState([]);
  const [colours, setColours] = useState([]);
  const [dressTypes, setDressTypes] = useState([]);
  const [lengths, setLengths] = useState([]);
  const [neckLines, setNecklines] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [sleeveLengths, setSleeveLength] = useState([]);
  const [styles, setStyles] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/product/filters`);
      setBodyFits(response.data.bodyFits);
      setColours(response.data.colours);
      setDressTypes(response.data.dressTypes);
      setLengths(response.data.lengths);
      setNecklines(response.data.neckLines);
      setSeasons(response.data.seasons);
      setSleeveLength(response.data.sleeveLengths);
      setStyles(response.data.styles);
      setLoading(false); 
    } catch (error) {
      console.error("Error fetching the filters:", error);
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderSkeleton = () => <Skeleton count={4} height={20} />;

  const renderList = (items, type) => {
    return items.map((item) => (
      <li key={item[type + "Id"]}>
        <label className="d-flex align-items-center gap-1 ">
          <span className="d-flex justify-content-between w-100">
            {item.name || item.colourName}
          </span>
          <input
            type="checkbox"
            checked={checkedFilters[type].includes(item[type + "Id"])}
            onChange={() => updateCheckedFilters(type, item[type + "Id"])}
          />
        </label>
      </li>
    ));
  };

  return (
    <div className="tp-shop-sidebar mr-10 filter-shadow">
      <div className="tp-shop-widget">
        <h3 className="tp-shop-widget-title">Body Type</h3>
        <ul className="filter-items">{loading ? renderSkeleton() : renderList(bodyFits, "bodyFits")}</ul>
      </div>
      <div className="tp-shop-widget">
        <h3 className="tp-shop-widget-title">Colors</h3>
        <ul className="filter-items">{loading ? renderSkeleton() : renderList(colours, "colours")}</ul>
      </div>
      <div className="tp-shop-widget">
        <h3 className="tp-shop-widget-title">Dress Types</h3>
        <ul className="filter-items">{loading ? renderSkeleton() : renderList(dressTypes, "dressTypes")}</ul>
      </div>
      <div className="tp-shop-widget">
        <h3 className="tp-shop-widget-title">Lengths</h3>
        <ul className="filter-items">{loading ? renderSkeleton() : renderList(lengths, "lengths")}</ul>
      </div>
      <div className="tp-shop-widget">
        <h3 className="tp-shop-widget-title">Neck Lines</h3>
        <ul className="filter-items">{loading ? renderSkeleton() : renderList(neckLines, "neckLines")}</ul>
      </div>
      <div className="tp-shop-widget">
        <h3 className="tp-shop-widget-title">Seasons</h3>
        <ul className="filter-items">{loading ? renderSkeleton() : renderList(seasons, "seasons")}</ul>
      </div>
      <div className="tp-shop-widget">
        <h3 className="tp-shop-widget-title">Sleeve Lengths</h3>
        <ul className="filter-items">{loading ? renderSkeleton() : renderList(sleeveLengths, "sleeveLengths")}</ul>
      </div>
      <div className="tp-shop-widget">
        <h3 className="tp-shop-widget-title">Styles</h3>
        <ul className="filter-items">{loading ? renderSkeleton() : renderList(styles, "styles")}</ul>
      </div>
    </div>
  );
};

export default Filter;
