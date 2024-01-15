import React from "react";
import { Button, TextInput } from "react-native";

export default function MinhaView() {
return(

    <view>
    <TextInput  
    value="Meu Texto"
    
    />

    <Button
    title="Clique Aqui"
    onPress={CliqueAqui}
    />


    </view>
)
}

export function CliqueAqui (){
return true


}

