import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";

import ResultsList from "../Components/ResultsList";
import SearchBar from "../Components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
      return results.filter( result => {
          return result.price === price;
      });
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={ () => searchApi(term)}
            />
            { errorMessage ? <Text>{errorMessage}</Text> : null }
            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice('€')}
                    title="Cost Effective"
                />
                <ResultsList
                    results={filterResultsByPrice('€€')}
                    title="Bit pricier"
                />
                <ResultsList
                    results={filterResultsByPrice('€€€')}
                    title="Big Spender"
                />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    parentView: {
        flex: 1
    }
});

export default SearchScreen;
