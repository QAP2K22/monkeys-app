import React, { useState } from 'react'
import { Button, StyleSheet } from 'react-native'

const Buttons = (props) => {

    const [number, setNumber] = useState(1)

    function sumNumber() {
        setNumber(number + 1)
    }
 
    return (
        <>
            <Button
                /* title={`${number == 1?`1+1=${number == 0 ? "?" : number}`:`1+${number-1}=${number == 0 ? "?" : number}`}`} Lógica de doido!*/

                title={`${number == 1?`1+1=${number+1}`:`1+${number}=${number+1}`}`}
                onPress={() => sumNumber()}

            />


            {number > 1 ?
                <Button
                    title='Zerar'
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"                    
                    onPress={() => setNumber(1)}
                /> : <></>
            }
        </>
    )
}

export default Buttons


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
});
