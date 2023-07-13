import {Tabs} from "expo-router";
import Home from "./Home";
import List from "./List";

export default () => {

    return (

        <Tabs>
            <Tabs.Screen name="Home" component={Home}/>
            <Tabs.Screen name="Home" component={List}/>
        </Tabs>
    );
};
