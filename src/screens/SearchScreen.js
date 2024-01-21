import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import useFeaturedList from "../hooks/useFeaturedList";
import FeaturedList from "../components/FeaturedList";

const SearchScreen = () => {
    const [term, setTerm] = useState("");

    const [finalBranchResult, setFinalResult] = useState([]);

    const [searchApi, results, errMsg] = useResults();

    const [featuredList, resultsFeaturedList, errMessage] = useFeaturedList();

    const searchBranch = (query) => {
        setFinalResult(
            results.filter((result) => {
                console.log(result.name);
                return result.name.toLowerCase().includes(query.toLowerCase());
            })
        );
    };

    useEffect(() => {
        setFinalResult(results);
    }, [results]);
    return (
        <>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => {
                    setTerm(newTerm);
                    if (term.length !== 0) searchBranch(term);
                }}
                onTermSubmit={() => searchBranch(term)}
            />
            {errMsg ? <Text>{errMsg}</Text> : null}
            {errMessage ? <Text>{errMessage}</Text> : null}

            <ScrollView>
                <View>
                    <FeaturedList
                        results={resultsFeaturedList}
                        title="Featured List"
                    />
                    <ResultsList
                        results={finalBranchResult}
                        title="Branches"
                    />
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
