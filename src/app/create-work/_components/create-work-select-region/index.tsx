"use client";
import { dataRegion } from "@component/constants/constant";
import { IconSearch } from "@component/constants/Icon";
import { Checkbox, Input, Radio } from "antd";
import { useEffect, useState } from "react";
import "./index.scss";

type Props = {
    [key: string]: any;
};

const CreateWorkSelectRegion = ({ setChecked, setSelectedCountry, selectedCountry }: Props) => {
    const [selectedRegion, setSelectedRegion] = useState<string | null>("Asia");
    const [countries, setCountries] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    const getCountries = (region: string) => {
        return dataRegion.filter((item) => item.region === region);
    };
    const getAllCountries = () => {
        return dataRegion.map((item) => item.countries).flat();
    };

    const changeSelectCountry = (item: any) => {
        setSelectedCountry([
            {
                ...item,
            },
        ]);
        setChecked(true);
    };

    const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        if (selectedRegion) {
            setCountries(getCountries(selectedRegion)[0].countries);
            return;
        }
        setCountries(dataRegion.map((item) => item.countries).flat());
    }, [selectedRegion]);

    useEffect(() => {
        if (selectedCountry.length <= 0) setChecked(false);
    }, [selectedCountry]);

    return (
        <div className="select-region-main">
            <Input
                className="custom-placeholder"
                size="large"
                placeholder="Search Region"
                prefix={<IconSearch size={18} />}
                style={{
                    background: "inherit",
                    border: "1px solid #40444B",
                    color: "white",
                }}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="select-region-content">
                <div className="content-left">
                    {dataRegion.map((item, index) => {
                        return (
                            <div
                                key={item.region}
                                className={`select-region-item ${selectedRegion === item.region ? "active" : ""}`}
                                onClick={() => {
                                    if (selectedRegion === item.region) {
                                        setSelectedRegion(null);
                                        return;
                                    }
                                    setSelectedRegion(item.region);
                                }}
                            >
                                <p className={`${selectedRegion === item.region ? "active" : ""}`}>{item.region}</p>
                            </div>
                        );
                    })}
                </div>
                <div className="content-right">
                    {filteredCountries.length === 0 ? (
                        <p
                            style={{
                                textAlign: "center",
                                color: "white",
                                justifyContent: "center",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                height: "50%",
                            }}
                        >
                            No results found
                        </p>
                    ) : (
                        filteredCountries.map((item, index) => {
                            return (
                                <div
                                    style={{ cursor: "pointer" }}
                                    onClick={() => changeSelectCountry(item)}
                                    key={item.name}
                                    className="select-country-item"
                                >
                                    <Radio
                                        value={item.name}
                                        checked={selectedCountry[0] && selectedCountry[0].name === item.name}
                                        onChange={(e) => {
                                            changeSelectCountry(item);
                                            e.stopPropagation();
                                        }}
                                    />
                                    <div>
                                        <p>{item.flag}</p>
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
};

export default CreateWorkSelectRegion;
