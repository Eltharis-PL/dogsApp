import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function AppLayout() {
    return (

        <Tabs screenOptions={{
            headerStyle: {
                backgroundColor: '#2D4356',
            },
            headerTitleStyle: {
                color: '#EAB2A0',
                fontWeight: 'bold',
            },
            tabBarStyle: {
                backgroundColor: '#435B66',
            },
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'List',
                    tabBarIcon: ({ size }) => (
                        <Ionicons
                            name="list"
                            color={"#EAB2A0"}
                            size={size}
                        />
                    ),
                }} />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    tabBarIcon: ({ size }) => (
                        <Ionicons
                            name="search"
                            color={"#EAB2A0"}
                            size={size}
                        />
                    ),
                }}
            />
        </Tabs>
    );
};
