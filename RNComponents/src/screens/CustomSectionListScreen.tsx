import React from "react";
import { Text, View } from "react-native";
import { HeaderTitle } from "../components/HeaderTitle";
import { styles } from "../theme/appTheme";
import { SectionList } from "react-native";

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: "DC Comics",
    data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin"],
  },
  {
    casa: "Marvel Comics",
    data: [
      "Antman",
      "Thor",
      "Spiderman",
      "Antman",
      "Antman",
      "Thor",
      "Spiderman",
      "Antman",
      "Antman",
      "Thor",
      "Spiderman",
      "Antman",
    ],
  },
  {
    casa: "Anime",
    data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama"],
  },
];

export const CustomSectionListScreen = () => {
  return (
    <View style={{ ...styles.globalMargin, flex: 1 }}>
      <SectionList
        keyExtractor={(item, index) => item + index}
        sections={casas}
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        ListFooterComponent={() => <HeaderTitle title={"Total de casas: " + casas.length} />}
        renderItem={({ item }) => <Text>{item}</Text>}
        stickySectionHeadersEnabled
        renderSectionHeader={({ section: { casa } }) => (
          <View style={{ backgroundColor: "white" }}>
            <HeaderTitle title={casa} />
          </View>
        )}
        renderSectionFooter={({ section }) => <HeaderTitle title={"Total:" + section.data.length} />}
      />
    </View>
  );
};
