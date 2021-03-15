import React, { useState } from 'react';
import { View, Text, StyleSheet } from "react-native";

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
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={ () => searchApi(term)}
            />
            { errorMessage ? <Text>{errorMessage}</Text> : null }
            <Text>We have found {results.length} results</Text>
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
        </View>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;
