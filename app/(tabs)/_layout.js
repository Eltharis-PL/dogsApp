import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function AppLayout() {
    return (

        <Tabs screenOptions={{
            headerStyle: {
                backgroundColor: '#A0BFE0',
            },
            headerTitleStyle: {
                color: '#4A55A2',
                fontWeight: 'bold',
            },
            tabBarStyle: {
                backgroundColor: '#A0BFE0',
            },
            tabBarLabelStyle: {
                color: '#4A55A2',
            },
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'List',
                    tabBarIcon: ({ size }) => (
                        <Ionicons
                            name="list"
                            color={"#4A55A2"}
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
                            color={"#4A55A2"}
                            size={size}
                        />
                    ),
                }}
            />
        </Tabs>
    );
};
