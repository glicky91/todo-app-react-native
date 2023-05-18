import { useState } from "react";
import { INSPOQUOTES } from "../shared/inspoQuotes";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native";
import { Card, Input } from "react-native-elements";

//could be cool to try to create a new list of productive quotes with a button to randomly generate one.... then allow someone to share that out?
const InspoScreen = () => {
    const [author, setAuthor] = useState('');
    const [quote, setQuote] = useState('');
    const [quoteList, setQuoteList] = useState(INSPOQUOTES);

    const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)]

    const handleQuoteSubmit = () => {
        const newQuote = {
            author,
            quote
        };
        setQuoteList(quoteList.concat(newQuote))
        console.log(quoteList)
        console.log(quoteList.length)
        resetForm();
    }
    const resetForm = () => {
        setAuthor('');
        setQuote('');

    }

    return (
        <>
            <Card>
                <Card.Title>Inspirational Quotes</Card.Title>
                <Card.Divider />
                <Text>{randomQuote.quote}</Text>
                <Text style={{ color: 'gray', fontStyle: 'italic' }}>-{randomQuote.author}</Text>
            </Card>
            <Card>
                <Card.Title>Add an Inspo Quote to the list!</Card.Title>
                <Input
                    placeholder='Add Quote'
                    leftIcon={{ type: 'font-awesome', name: 'book' }}
                    onChangeText={(quote) => setQuote(quote)}
                    value={quote}
                />
                <Input
                    placeholder='Add Author'
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(author) => setAuthor(author)}
                    value={author}
                />
                <TouchableOpacity
                    style={{ backgroundColor: '#74a0ef', alignItems: 'center' }}
                    onPress={() => handleQuoteSubmit()}
                >
                    <Text>Submit</Text>
                </TouchableOpacity>
            </Card>


        </>
    )

};

export default InspoScreen;