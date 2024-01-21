import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
} from "react-native";

const SubjectList = ({ title, results }) => {

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                horizontal={false}
                numColumns={2}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={{ flex: .5 }}
                        // onPress={() => {
                        //     navigation.navigate("BranchDetail", { id: item.id });
                        // }}
                        >
                            <BtechCard
                                name={item.name}
                                fee={item.fee}
                            />
                        </TouchableOpacity>
                    );

                }}
            />
        </View>
    );
};

const BtechCard = ({ name, fee }) => {
    return (
        <View style={btechCard.card}>
            <View style={btechCard.iconContainer}>
                <Image
                    source={require("../assets/engineering-icon.png")}
                    style={btechCard.icon}
                />
            </View>
            <View style={btechCard.textContainer}>
                <Text style={btechCard.titleText}>{fee}</Text>
                <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={btechCard.descriptionText}
                >
                    {name}
                </Text>
            </View>
        </View>
    );
};

const btechCard = StyleSheet.create({
    card: {
        flex: .5,
        flexDirection: "row",
        borderRadius: 10,
        overflow: "hidden", // Ensures the border radius is applied
        borderWidth: 1, // Add border for visibility
        borderColor: "#ddd", // Border color
        margin: 10,
    },
    iconContainer: {
        padding: 10,
    },
    icon: {
        width: 40, // Adjust the width of the icon
        height: 40, // Adjust the height of the icon
    },
    textContainer: {
        flex: 1,
        padding: 10,
    },
    titleText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    descriptionText: {
        fontSize: 14,
        marginTop: 5,
    },

});

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        margin: 10,
    },
});

export default SubjectList;
