import React, { useState } from "react";
import { RefreshControl, SafeAreaView, ScrollView, Text, View } from "react-native";
import { HeaderTitle } from "../components/HeaderTitle";
import { styles } from "../theme/appTheme";

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setData("Hola mundo");
    }, 1500);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressViewOffset={10}
            progressBackgroundColor="#5856d6"
            // colors={["white", "red", "orange"]}
          />
        }
      >
        <View style={styles.globalMargin}>
          <HeaderTitle title="Pull to refresh" />
          {data && <HeaderTitle title={data} />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
