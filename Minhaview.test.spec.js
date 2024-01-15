import React from "react";
import renderer from 'react-test-renderer' 
import MinhaView from "./Minhaview.spec";
import { CliqueAqui } from "./Minhaview.spec";


test('verifica renderização', () => {
    const tree = renderer.create(<MinhaView />).toJSON()
    expect(tree).toMatchSnapshot()

    
});

test('verifica cliqueAqui', () => {
    expect (CliqueAqui()).toBeTruthy()

});