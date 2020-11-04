import React, { useContext, useState } from "react";
import { Select } from 'antd';
const { Option } = Select;
const lang = {
    vn: {
      hello: "xin chao",
    },
    en: {
      hello: "hello",
    }
};

const NumberContext = React.createContext();
const TestContext = () => {
    const [state,setState] = useState(lang.vn);
    console.log(state);
    const randomNumber = (value) => {
        if(value === "vn"){
            setState(lang.vn);
        }
        if(value === "en"){
            setState(lang.en)
        }
    }
    return(
        <NumberContext.Provider value={{text : state, randomNumber}}>
            <Button123 />
        </NumberContext.Provider>
    );
}
const Button123 = () => {
    const context = useContext(NumberContext);
    console.log(context);
    return(
        <>
            <h1>{context.text.hello}</h1>
            <Select defaultValue="vn" style={{ width: 120 }} onChange={context.randomNumber}>
                <Option value="vn">VN</Option>
                <Option value="en">EN</Option>
            </Select>
        </>
    );
}
export default TestContext;