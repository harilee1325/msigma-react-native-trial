import { React, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import useGetSubjectsList from '../hooks/useGetSubjectsList';
import SubjectList from '../components/SubjectList';
import SearchBar from '../components/SearchBar';
const BranchDetailScreen = ({ route }) => {


    let id = route.params.id

    const [results, errMsg] = useGetSubjectsList(id);

    const [term, setTerm] = useState('')

    const [finalSubjectResult, setFinalResult] = useState([]);

    const searchSubject = (query) => {
        console.log(query);
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
                    if (term.length !== 0) searchSubject(term);
                }}
                onTermSubmit={() => searchSubject(term)}
            />
            {errMsg ? <Text>{errMsg}</Text> : null}
            <View>
                <SubjectList
                    results={finalSubjectResult}
                    title="Subjects"
                />
            </View>
        </>
    )
}

export default BranchDetailScreen